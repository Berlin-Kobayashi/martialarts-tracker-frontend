#!/usr/bin/env bash
apt-get update
apt-get install -y docker.io
docker swarm init --advertise-addr 10.19.0.5
