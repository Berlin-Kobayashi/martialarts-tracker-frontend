#!/usr/bin/env bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
apt-get update
apt-cache policy docker-ce
sudo apt-get install -y docker-ce
docker swarm init --advertise-addr 10.19.0.5
mkdir -p /apps/ma-tracker
mkdir -p /data/ma-tracker
