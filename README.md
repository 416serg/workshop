## Objective

The objective is having folks walk away from this workshop with less of a fear
of operations and be empowered to set up trivial production environments of
their own.

### Presentation Outline

 - Introduction
   - Who I am
   - Background
 - Poll folks:
   - What operating system folks use
   - Who if anyone, set themselves up with a digital ocean account?
   - Ask who is familiar with commands like `dir` or `cd`
 - State objective*
 - Begin with running a node application
   - What is happening?
   - Windows
   - Unix (Mac OSX) / Linux
 - (OPTIONAL) Poll folks:
   - What tools do they use to debug their applcation?
 - Talk a bit about processes
 - Introduce `ps`
 - (OPTIONAL) Introduce `strace`
 - (OPTIONAL) Talk about kernel and user space
 - Talk a bit about networking, ask if folks know how the internet works
   - Your IP on the LAN
     - 192.x.x.x, or, 10.x.x.x, or, 172.x.x.x
     - 127.0.0.1
     - 0.0.0.0
   - Your local "DNS"
 - Introduce `ip a` / `ifconfig`
 - Have everyone make a change to their Awesome App
 - Then have everyone ask their neighboor for their IP
 - Have everyone run their server on 0.0.0.0:80
 - Finally have everyone check out their neighboors Awesome App.
 - Neat!!
 - Remind everyone at this point that they're now running a server not much
   different than the ones you can spin up at Amazon or Digital Ocean
 - 



### Troubleshooting

#### I'm running Windows 7 / 8 or earlier

Unfortunately to follow along with this workshop you'll either need to have a
virtual machine running a linux distrobution or Cygwin/mingw

To install Cygwin,

1. Download the setup exe file ([32-bit](https://cygwin.com/setup-x86.exe) / [64-bit](https://cygwin.com/setup-x86_64.exe)
2. Run the setup program

#### I'm running Windows 10

Great! You should be able to install the Windows Subsystem for Linux:

https://docs.microsoft.com/en-us/windows/wsl/install-win10


Basic process management
SSH
Deploying application

 - ps -a
 - SIGTERM
