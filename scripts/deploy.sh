#!/bin/bash

docker run --rm -v "$PWD":/usr/src/app -w /usr/src/app node:10 yarn run build:prod
