#!/bin/sh
NAME=termjs
IMAGE=krystism/termjs 
docker build -t $IMAGE . # Build the image
docker rm -f $NAME &>/dev/null # Remove if exists
docker run -t -i --rm -p 8000:8000 -v `pwd`:/root  --name $NAME $IMAGE
