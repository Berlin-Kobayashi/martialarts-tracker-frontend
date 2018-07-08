#!/usr/bin/env bash
docker build --build-arg API=http://jsonmancer.com:81 -t danshu93/ma-tracker:latest `dirname "$0"`/..
