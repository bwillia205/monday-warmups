# monday-warmups

## Useful docker commands

Build a docker image for the listotron service
```
docker build -t listotron .
```

Run the listotron service
```
docker run -p 3000:8000 listotron
```

List running containers
```
docker ps
```

List images
```
docker image ls
```

List all containers
```
docker container ls -a
```

Run a postgres instance
```
docker run -d -e POSTGRES_PASSWORD=$USER -p 5432:5432 postgres:14.4-alpine
```

## Working with docker compose

Run all services in background
```
docker compose up -d
```

Stop services and remove containers
```
docker compose down
```

The docker compose spec uses a volume mount for postgres data, allowing data to persist independently of containers. To clear the data:
```
rm -r postgres-data/*
```
