#!/usr/bin/env bash

docker-compose -f ./assembly/docker-compose.yml up -d
cd backend
./gradlew flywaymigratie
cd ..
cd ./web
npm run build
cd ..
rm -rf ./backend/src/main/resources/static
mkdir ./backend/src/main/resources/static
cp -R ./web/build/ ./backend/src/main/resources/static
