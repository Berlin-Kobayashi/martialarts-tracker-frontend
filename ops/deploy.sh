#!/usr/bin/env bash
scp docker-cloud.yml $1:/apps/ma-tracker
ssh $1 docker stack deploy --compose-file /apps/ma-tracker/docker-cloud.yml ma-tracker
