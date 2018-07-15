#!/usr/bin/env bash

docker build -t cordova -f Dockerfile.cordova `dirname "$0"`/..

docker run --rm -v `pwd`/apps:/usr/src/cordova/platforms/android/build/outputs/apk cordova
