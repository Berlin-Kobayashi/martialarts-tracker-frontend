#!/usr/bin/env bash

docker build --build-arg API=http://ma-tracker.jsonmancer.com:81 --build-arg TOKEN=$TOKEN -t cordova -f Dockerfile.cordova `dirname "$0"`/..

docker run --rm -v `pwd`/apps:/usr/src/cordova/platforms/android/build/outputs/apk cordova
