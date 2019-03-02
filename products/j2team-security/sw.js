self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('j2team').then(function(cache) {
      return cache.addAll([
        'index.html',
        'assets/css/button.css',
        'assets/css/color.css',
        'assets/css/default.css',
        'assets/css/font.css',
        'assets/css/style.css',
        'assets/js/main.js',
        'assets/images/screenshot/1.png',
        'assets/images/screenshot/2.png',
        'assets/images/screenshot/3.png',
        'assets/images/screenshot/4.png',
        'assets/images/screenshot/5.png',
        'assets/images/screenshot/6.png',
        'assets/images/1.svg',
        'assets/images/2.svg',
        'assets/images/3.svg',
        'assets/images/chrome.svg',
        'assets/images/logo-white.png',
        'assets/images/logo-black.png',
        'assets/images/bg.png',
        'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.7.2/css/all.min.css',
        'https://fonts.googleapis.com/css?family=Heebo:300,400',
        'https://fonts.gstatic.com/s/heebo/v4/NGS6v5_NC0k9P9H2TbE.woff2',
        'https://fonts.gstatic.com/s/heebo/v4/NGS3v5_NC0k9P9ldb6RMkK4.woff2',
        'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  // console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});