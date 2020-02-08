# Megahack backend

## Instructions

* Copy `.env.example` to `.env`
* Run `docker-compose up`

## Containers

### web (django)

Web application with the public facing API

### db (postgresql)

Database 

### redis (cache)

Cache

### rabbit (queue)

Message queue (usually used for dramatiq and django communication)

### dramatiq (task runner)

Task runner for instantiating background tasks
