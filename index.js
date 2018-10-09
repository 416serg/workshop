const path = require('path');
const { exec, execSync, spawn } = require('child_process');

const key = process.env.KEY || '~/.ssh/id_rsa';
const args = process.argv.slice(2);

console.log('INFO', args);

// Process Snapshot 
// console.log('INFO', execSync('ps', { encoding: 'ascii' }));

// Network Interfaces
// console.log('INFO', execSync('ifconfig', { encoding: 'ascii' }));

switch (args[0]) {
  case 'deploy':
    let cmdIndex = 0;
    // Spawn a new process and run a command
    const deploy = spawn(
      'ssh',
      ['-tt', '-i', key, 'root@142.93.152.46'],
      { encoding: 'ascii' },
    );

    // process.stdin.resume();
    // process.stdin.on('data', function (chunk) {
    //   deploy.stdin.write(chunk);
    // });

    // Deploy server standard output event hook
    deploy.stdout.on('data', (data) => {
      console.log(`${data}`);
    });

    // Deploy server error output event hook
    deploy.stderr.on('data', (data) => {
      console.log(`ERROR ${data}`);
    });
    break;
  case 'run':
  default:
    // Run our App
    const app = exec(

      // The command we would like to execute
      `node ${path.join(__dirname, './src/server.js')}`,
      
      // Options, but specifically lets define the output as ascii rather than
      //  the default buffer
      { encoding: 'ascii' }, 
     
      // The callback
      function () {
        console.log('SUCCESS');
      },
  );

    // Standard Out
    // 
    app.stdout.on('data', (data) => {
      console.log(`STDOUT ${data}`);
    });

    // Standard Error
    app.stderr.on('data', (data) => {
      console.error(`STDERR ${data}`);
    });

}
