# Apper Backend Dev Starter

This repo contains code for Apper's Cadetship Backend Dev Server Starter, built using Node JS.

1. [Local Development Setup](#local-development-setup)
2. [Curl](#curl)

## Local Development Setup

To open using Docker, open Docker desktop, and then run the following command on the root directory of this project:

```
docker compose build
docker compose up
```

To stop the local dev docker server, you can use `CTRL+C` for Windows or `CMD+.` for Mac to stop the docker compose dev server. It is more advisable, though, to open another terminal window and run the following command:

```
docker compose down
```

To just run the node project without either the Postgres or Redis dependencies, run the following:

```
npm run dev
```

## Curl

curl http://localhost:3000/

This should return the following response:

```
{"message":"hello world"}
```
