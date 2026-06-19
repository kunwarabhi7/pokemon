# Pokemon App

A simple React-based Pokemon application containerized using Docker and Docker Compose.

## Features

* View Pokemon data
* React frontend application
* Dockerized for consistent development and deployment
* Docker Compose support for easy container management

## Tech Stack

* React
* Docker
* Docker Compose

## Prerequisites

Make sure the following tools are installed:

* Docker
* Docker Compose

## Run with Docker

### Build Docker Image

```bash
docker build -t pokemon-app .
```

### Run Docker Container

```bash
docker run -d -p 3000:3000 --name pokemon-app pokemon-app
```

### Access Application

Open your browser and visit:

```text
http://localhost:3000
```

## Run with Docker Compose

### Start Application

```bash
docker compose up -d --build
```

### Check Running Containers

```bash
docker compose ps
```

### View Logs

```bash
docker compose logs -f
```

### Stop Application

```bash
docker compose down
```

## Project Structure

```text
pokemon-app/
├── src/
├── public/
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

## Docker Concepts Used

* Docker Image
* Docker Container
* Port Mapping
* Docker Compose
* Containerized React Application

## Author

Abhishek
