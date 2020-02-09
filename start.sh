#!/bin/bash
app="authenticate.me"
docker build -t ${app} .
docker run -d -p 56733:80 ${app}
