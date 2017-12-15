# Raspberry Pi Relay NODE.JS
> Supported for Raspberry Pi II this simple Node.js webserver allows for GUI relay control. As well as URL encoding for the relays.
> for EX: 192.168.1.65/relay1/on
> Username and Password support coming soon!

![alt text](https://github.com/masterbachman/relay-control-raspberrypi/blob/master/public/images/RelayControl.gif)
![alt text](https://github.com/masterbachman/relay-control-raspberrypi/blob/master/public/images/RelayInAction.gif)

## Hardware Used
You can purchase the hardware I used from these websites.

> Here is a link to the relay:  http://www.keyestudio.com/keyestudio-rpi-4-channel-relay-shield.html
> Raspberry Pi https://www.adafruit.com/product/3055?src=raspberrypi


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




## References

1. BIG THANKS TOO! (<https://github.com/my-electronics-lab/rpi-led-local-server-nodejs>)
2. BIG SHOUTOUT TOO Cheridan Uter
