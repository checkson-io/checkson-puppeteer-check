# checkson-puppeteer-check

This repo open a website using Puppeteer and makes a screenshot.

## Run check locally

```
npm start
```

## Run check locally via Docker

```
docker run \
  --env CHECKSON_DIR=/tmp \
  --rm \
  -it \
  ghcr.io/checkson-io/checkson-puppeteer-check:main
```
