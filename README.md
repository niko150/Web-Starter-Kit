# Vanilla Starter Kit (Beta)

> A single-page application boilerplate for Vanilla HTML/CSS/JS, Material, Firebase, Gulp, Rollup, PostCSS, and Babel.

[![Build Status](https://travis-ci.org/Shyam-Chen/Vanilla-Starter-Kit--Web.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Vanilla-Starter-Kit--Web)
 //
[![Dependency Status](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit--Web.svg)](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit--Web)
[![devDependency Status](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit--Web/dev-status.svg)](https://david-dm.org/Shyam-Chen/Vanilla-Starter-Kit--Web?type=dev)

[Live Demo](https://test-1498d.firebaseapp.com/)

This seed repository provides the following features:
* [x] Start coding **Vanilla HTML/CSS/JS** right now.
* [x] UI components with **Material**.
* [x] Back-end service with **Firebase**.
* [x] Routing and navigation with **Page**.
* [x] Render templates with **Lodash**.
* [x] Internationalization with **Intl**.
* [x] Data visualization with **Chart**.
* [x] Build system with **Gulp**.
* [x] Module bundler with **Rollup**.
* [x] Future CSS features with **PostCSS**.
* [x] Next generation JS with **Babel**.
* [x] Development server with **BrowserSync**.
* [x] HTML static code analyzer with **HTMLHint**.
* [x] CSS static code analyzer with **StyleLint**.
* [x] JS static code analyzer with **ESLint**.
* [x] Testing framework with **Jasmine**.
* [x] Unit tests with **Karma**.
* [x] End-to-end tests with **Protractor**.
* [x] Operating system with **Linux**.
* [x] Text editor with **Atom**.
* [x] Version control with **Git**.
* [x] Fast and deterministic builds with **Yarn**.
* [x] Virtual machine with **Docker**.
* [x] Continuous integration and delivery with **Travis**.

## Getting Started

1) Clone this Boilerplate
```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/Vanilla-Starter-Kit--Web.git <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

2) Install Dependencies
```bash
$ yarn install
```

3) Run the Application
```bash
$ yarn start
```

4) Stay up-to-date
```bash
$ git remote add upstream https://github.com/Shyam-Chen/Vanilla-Starter-Kit--Web.git
$ git pull upstream master
```

## Using Docker

1) Build the Image
```bash
$ docker build -t Vanilla-Starter-Kit--Web .
```

2) Run the Container
```bash
$ docker run -it -p 3000:3000 --name app Vanilla-Starter-Kit--Web
```

3) Just Compose
```bash
$ docker-compose up
```

## Other Commands

```bash
$ yarn run dev
$ yarn run dev-watch

$ yarn run test
$ yarn run test-watch

$ yarn run prod
$ yarn run e2e

$ yarn run clean
$ yarn run reset
$ yarn run reinstall
```

## Folder
* `pages` - One folder for one page
* `components` - Shared/Reusable components here
* `utils` - All the functions here
* `assets` - Images and Datas here
