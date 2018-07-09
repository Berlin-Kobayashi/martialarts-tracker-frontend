#!/usr/bin/env bash
docker build --build-arg API=http://ma-tracker.jsonmancer.com:81 -t danshu93/ma-tracker:latest `dirname "$0"`/..
