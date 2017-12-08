# Raspberry Pi Relay NODE.JS
> Supported for Raspberry Pi II this simple Node.js webserver allows for GUI relay control. As well as URL encoding for the relays.
> for EX: 192.168.1.65/relay1/on
> Username and Password support coming soon!

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]



## Installation

OS X & Linux:

```sh
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install build-essential
sudo apt-get install git
```



## Usage

Download or clone the project into a directory of your choosing. Then navigate to that folder.
Use the following commands.

```sh
npm install
```

Run the server using the following command.

```sh
node index.js
```

To access your webserver find the IP of your machine.
```sh
ifconfig /
```
>Example: 192.168.1.1:3000


## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
make install
npm test
```



## References

1. BIG THANKS TOO! (<https://github.com/my-electronics-lab/rpi-led-local-server-nodejs>)
