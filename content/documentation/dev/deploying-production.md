---
type: "page"
title: "Deployment"
subtitle: "Deploying onto your server."
draft: false
heroImage: "img/.jpg"
---
## Preparing the server

```
ssh usernamr@server_ip

sudo apt install docker-compose docker.io git make nginx

```

## BIMS

### Getting the code source

```
cd ../
sudo mkdir bims
sudo chown kartoza:kartoza bims
cd bims
git clone https://github.com/kartoza/django-bims.git

```

### Build docker images

```
cd deployement
cp docker-compose.override.template.yml docker-compose.override.yml
cd ../
make web

```



## GeoContext

### Getting the code source

```

cd bims
git clone https://github.com/kartoza/geocontext.git

```

### Build docker images

```
cd geocontext/deployment
make build
make start-web 

```

## NGINX Configuration