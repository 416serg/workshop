const path = require('path');
const { spawn, execSync, exec } = require('child_process');

// Process Snapshot 
console.log('INFO', execSync('ps', { encoding: 'ascii' }));

// Network Interfaces
console.log('INFO', execSync('ifconfig', { encoding: 'ascii' }));

switch (args[0]) {
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
