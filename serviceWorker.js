const brex = "dev-coffee-site-v1";
const assets = [
    "/",
    '/index.html',
    '/script.js',
    '/CSS/style.css',
    '/Assets/carouselFirst.png',
    '/Assets/carouselSecond.png',
    '/Assets/carouselThird.png',
    '/Assets/carouselFour.png',
    '/Assets/carouselFive.png',
    '/Assets/carouselSix.png',
    '/Assets/carouselSeven.png',
    '/Assets/carouselEight.png',
    './Assets/enterprice.png',
    './Assets/enterTel.png',
    './Assets/homeImg.png',
    './Assets/Logo.png',
    './Assets/startUp.png',
    './Assets/startups.png',
    './Assets/Frame (1).png',
    './Assets/Frame (2).png',
    './Assets/Frame (3).png',
    './Assets/Frame (4).png',
    './Assets/one.png',
    './Assets/scl.png',
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(brex).then(cache => {
      cache.addAll(assets);
    })
  )
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
