#!/bin/bash

docker run --name plans-db --rm -e MYSQL_ROOT_PASSWORD=123456789 -p 3307:3306 -d mysql:5.7

docker run --name subscriptions-db --rm -e MYSQL_ROOT_PASSWORD=123456789 -p 3308:3306 -d mysql:5.7
