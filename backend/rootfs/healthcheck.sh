#!/bin/sh -e

# we are healthy if status.html has a good status code OR dramatiq is up
curl --fail -L http://localhost:8000/healthcheck/ || pgrep dramatiq
