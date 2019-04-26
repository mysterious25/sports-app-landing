var slider = tns({
  container: '.my-slider',
  "items": 3,
  "edgePadding": 50,
  "swipeAngle": false,
  "speed": 400,
  "navAsThumbnails": true,

  responsive: {
    640: {
      "fixedWidth": false,
    },
    700: {
      "fixedWidth": false,
    },
    1200: {
      "fixedWidth": 410,
    }
  }
});