# Texas Stock Pitch 2023

## Link

https://stockpitch.texasusit.com/

## Description

Website for the University Securities Investment Team's annual Texas Stock Pitch Competition

## Project Directory

```
.
├── build
│   └── static
│       ├── css
│       ├── js
│       └── media
├── public
└── src
    ├── assets
    │   ├── css
    │   ├── fonts
    │   ├── images
    │   └── scss
    ├── components
    │   ├── Layout
    │   └── Shared
    └── pages
        ├── About
        ├── Contact
        ├── Event
        ├── Forums
        ├── Special
        └── Utility
```

## Used

React
Docker (Might drop this)
Landrick-React template

## Testing

`docker-compose up --build`

from TSP-22 directory

For m1 mac users (possibly)
if docker-compose up --build throws a strange exception:

`DOCKER_BUILDKIT=0 docker-compose up --build`
