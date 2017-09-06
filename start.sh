#!/usr/bin/env bash

docker-compose -f ./assembly/docker-compose.yml up -d
cd backend
./gradlew flywaymigrate
