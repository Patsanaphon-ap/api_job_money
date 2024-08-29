Api Job schedule Money Transfer

## Table of Contents

1. [Overview](Overview)
2. [Design Decisions](Design-Decisions)
3. [Setup](Setup)

## Overview

This project is simple update daily Exchange Rate system built using Node.js, Typscript and PostgreSQL. It Allow update  daily Buying/selling from Bank of thailand.

## Design Decisions

DatabaseChoice (PostgreSQL): Chosen for its robust support for ACID transactions and scalability.
sequelize: update postsql
node-cron: job schedule


##Setup
1.Clone The respository
```
$ git clone https://github.com/Patsanaphon-ap/api_job_money.git
$ cd api_job_money
```
2.Install dependencies:
```
$ npm install
```
3.Configure environment variables:
```
PORT = 4001

DB_PORT = 5431
DB_HOST = 'localhost'
DB_USERNAME = 'postgres'
DB_PASSWORD = ''
DB_DATABASE = 'postgres'

URL_EXCHANGE_RATE = 'https://www.bot.or.th/content/bot/en/statistics/exchange-rate/jcr:content/root/container/statisticstable2.results.level3cache.json'

```
4.Start the server:
```
npm start
```





