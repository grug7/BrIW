#!/bin/bash
#file: RunDockerContainer.sh

docker run \
	--rm \
	-it \
	-p 8000:8080 \
	-v $(realpath .):/app \
	briw
