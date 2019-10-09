#!/bin/bash
#file: RunDockerContainer.sh

docker run \
	--rm \
	-it \
	--entrypoint bash \
	-p 8000:8080 \
	-v $(realpath .):/app \
	briw
