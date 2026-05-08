# Laborator 7

## Pornire proiect

```bash
docker-compose up --build
```

Aplicația rulează la adresa :

http://localhost:3000

## Docker Hub

```bash
docker login
docker build -t laborator7-app .
docker tag laborator7-app USERNAME/laborator7-app
docker push USERNAME/laborator7-app
```

## GitHub Secrets

Secretele de autentificare în Docker Hub.:

- DOCKER_USERNAME
- DOCKER_PASSWORD

## Rulare pe server extern

```bash
docker pull USERNAME/laborator7-app
docker run -p 3000:3000 USERNAME/laborator7-app
```
