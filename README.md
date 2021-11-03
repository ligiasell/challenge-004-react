# React Training - Challenge #4

React Hooks and third party libraries.
If you need extra information please visit: https://coda.io/d/Chapter-Frontend_dPmePxjVB5S/Welcome_suzLZ#_lulk0

## Description

In this challenge we will learn how to use React Hooks instead of classes and also how to set up a third party library for google maps API. Studied concepts are: React Hooks and a Google maps library.
To start this challenge you will need to be familiar with:

- **Design:** https://app.zeplin.io/project/5ae76eec5b07c280209f6450/screen/5c052810f47bd12c8ab56b53
- **React Hooks:** 
  * https://reactjs.org/docs/hooks-reference.html
  * https://www.youtube.com/watch?v=G-aO5hzo1aw
  * https://www.youtube.com/watch?v=dpw9EHDh2bM
  * https://www.youtube.com/watch?v=KJP1E-Y-xyo
- **Google Maps API:** https://developers.google.com/maps/documentation/javascript/tutorial
- **Google API key (Maps, Directions and Places):** https://console.cloud.google.com/apis/credentials/key (You need to create your own API key)
- **Google Maps library:** https://github.com/JustFly1984/react-google-maps-api
- **Geolocation:** https://medium.com/better-programming/how-to-detect-the-location-of-your-websites-visitor-using-javascript-92f9e91c095f

## Acceptance criteria

- After loading the page the user must be prompted with a direction from where he is right now to the apartment;
- If typed a different origin google places api should display approximate matches and allow to pick the one desired;
- While typing on the input no flickering is allowed for the google map;
- The destination should be fixed to the apartment location while the origin should be the browser user location at start;
- The new origin or destination should be computed on the map after an enter press, removing focus of the input or picking a location from autocomplete;
- Changing the travel method should be reflected on the google maps api;
- The swap button should change the origin and destination;
- No console warnings are allowed.
