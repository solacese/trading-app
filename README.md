# trading-app
Trading app for a dev workshop


## Event Design
[Trading App Event Portal Designer](https://console.solace.cloud/event-designer/domains/2mbq7gl8bw4v)

## Application Components

### Feed Handler - Java
The feed handler is responsible for generating random prices for a configured set of ticker symbols

### Trader Screen - Javascript
Thin client presenting the users with a simple UI to buy/sell stocks

### Trading Session Dashboard - Javascript
Thin client with a dashboard providing a realtime chart of the stock prices

### EMS - .NET
A console application that executes orders
