# React Lazy Parallax

### Inspired by SpaceX's clean display for live launch telemetry.

[![PeerDependencies](https://img.shields.io/david/peer/michaellyons/react-lazy-parallax.svg?style=flat-square)](https://david-dm.org/michaellyons/react-lazy-parallax#info=peerDependencies&view=list)
[![Dependencies](https://img.shields.io/david/michaellyons/react-lazy-parallax.svg?style=flat-square)](https://david-dm.org/michaellyons/react-lazy-parallax)
[![DevDependencies](https://img.shields.io/david/dev/michaellyons/react-lazy-parallax.svg?style=flat-square)](https://david-dm.org/michaellyons/react-lazy-parallax#info=devDependencies&view=list)

## [Github Page](https://michaellyons.github.io/react-lazy-parallax)

## Prerequisites

You should be using [NodeJS](https://www.nodejs.org) and [ReactJS](https://facebook.github.io/react/)

## Installation

React Lazy Parallax is available as an [npm package](https://www.npmjs.org/package/react-lazy-parallax).
```sh
npm install react-lazy-parallax [-S]
```
or

```sh
yarn add react-lazy-parallax
```

## Usage

Using React Lazy Parallax is very straightforward. Once it is included in your project, you can use the components this way:

```js
import React from 'react';
import Parallax from 'react-lazy-parallax';


const MyAwesomeReactComponent = () => (
  <Parallax image={'./images/image.jpg'} style={{minHeight: 600}} />
);

export default MyAwesomeReactComponent;
```

## Customization

Key | Required |  Type | Description
----- | ----- |  ----- | -----
image | Y | String | This is the image for the parallax background.
style |  | Object | Style that is passed to container.
imageStyle |  | Object | Style that is passed to parallax image div.
