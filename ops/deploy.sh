#!/usr/bin/env bash
scp `dirname "$0"`/docker-cloud.yml $1:/apps/ma-tracker
ssh $1 TOKEN=$TOKEN docker stack deploy --compose-file /apps/ma-tracker/docker-cloud.yml ma-tracker
