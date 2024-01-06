# Auto-Insta

This is a Node.js application that uses the `kls-instagram-api` to automate Instagram actions.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Getting Started

1. Clone the repository:

```sh
git clone https://github.com/zthinhddo/node-insta-autotools.git
cd auto-insta

2. Install depedencies

```sh
npm install

3. Start the application
```sh
npm run start:dev

## Dockerization
1. Build image
```sh
docker build -t auto-insta .

2. Run docker container
```sh
docker run -p 3000:3000 auto-insta