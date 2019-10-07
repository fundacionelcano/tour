//DO NOT MOVE THIS FILE INTO THE SCRIPT FOLDER
//Google Dev's code for registering a service worker
if ('serviceWorker' in navigator) {
  try{
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('https://fundacionelcano.github.io/tour/serviceworker.js').then(function(registration) {
        // console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
        // console.log('ServiceWorker registration failed: ', err);
        });
    });
  }
  catch(err){
    // console.log(`Error delaying service worker install: ${err}`);
    navigator.serviceWorker.register('https://fundacionelcano.github.io/tour/serviceworker.js').then(function(registration) {
      // console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
      // console.log('ServiceWorker registration failed: ', err);
      });
  }
}
else{
  // console.log('navigator.serviceWorker is not available. Try hosting over HTTPS or localhost.');
}
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  'https://fundacionelcano.github.io/tour/',

  //Top folder
  'https://fundacionelcano.github.io/tour/favicon.ico',
  'https://fundacionelcano.github.io/tour/index.html',
  'https://fundacionelcano.github.io/tour/manifest.json',
  'https://fundacionelcano.github.io/tour/serviceworker.js',

  //English Park Pages
  'https://fundacionelcano.github.io/tour/PagesEN/',
  'https://fundacionelcano.github.io/tour/PagesEN/Area1Excavation.html',
  'https://fundacionelcano.github.io/tour/PagesEN/index.html',
  'https://fundacionelcano.github.io/tour/PagesEN/InformationPanels.html',
  'https://fundacionelcano.github.io/tour/PagesEN/Mound3.html',
  'https://fundacionelcano.github.io/tour/PagesEN/museummap.html',
  'https://fundacionelcano.github.io/tour/PagesEN/parkmap.html',
  'https://fundacionelcano.github.io/tour/PagesEN/Riverrockcauseway.html',
  'https://fundacionelcano.github.io/tour/PagesEN/Rowofmonoliths.html',
  'https://fundacionelcano.github.io/tour/PagesEN/Sculptures.html',
  'https://fundacionelcano.github.io/tour/PagesEN/sponsor.html',
  'https://fundacionelcano.github.io/tour/PagesEN/ticketbooth.html',

  //English Museum Pages
  'https://fundacionelcano.github.io/tour/PagesEN/Museum/AS-V1.html',
  'https://fundacionelcano.github.io/tour/PagesEN/Museum/AS-V2.html',
  'https://fundacionelcano.github.io/tour/PagesEN/Museum/Panel1.html',
  'https://fundacionelcano.github.io/tour/PagesEN/Museum/Panel2.html',
  'https://fundacionelcano.github.io/tour/PagesEN/Museum/Panel3.html',
  'https://fundacionelcano.github.io/tour/PagesEN/Museum/Panel4.html',
  'https://fundacionelcano.github.io/tour/PagesEN/Museum/Panel5.html',
  'https://fundacionelcano.github.io/tour/PagesEN/Museum/Panel6.html',
  'https://fundacionelcano.github.io/tour/PagesEN/Museum/Panel7.html',
  'https://fundacionelcano.github.io/tour/PagesEN/Museum/SP-V1.html',
  'https://fundacionelcano.github.io/tour/PagesEN/Museum/SP-V2.html',
  'https://fundacionelcano.github.io/tour/PagesEN/Museum/SP-V3.html',
  'https://fundacionelcano.github.io/tour/PagesEN/Museum/SP-V4.html',
  'https://fundacionelcano.github.io/tour/PagesEN/Museum/SP-V5.html',
  'https://fundacionelcano.github.io/tour/PagesEN/Museum/SP-V6789.html',

  //French Park Pages
  'https://fundacionelcano.github.io/tour/PagesFR/',
  'https://fundacionelcano.github.io/tour/PagesFR/Area1Excavation.html',
  'https://fundacionelcano.github.io/tour/PagesFR/index.html',
  'https://fundacionelcano.github.io/tour/PagesFR/InformationPanels.html',
  'https://fundacionelcano.github.io/tour/PagesFR/Mound3.html',
  'https://fundacionelcano.github.io/tour/PagesFR/museummap.html',
  'https://fundacionelcano.github.io/tour/PagesFR/parkmap.html',
  'https://fundacionelcano.github.io/tour/PagesFR/Riverrockcauseway.html',
  'https://fundacionelcano.github.io/tour/PagesFR/Rowofmonoliths.html',
  'https://fundacionelcano.github.io/tour/PagesFR/Sculptures.html',
  'https://fundacionelcano.github.io/tour/PagesFR/sponsor.html',
  'https://fundacionelcano.github.io/tour/PagesFR/ticketbooth.html',

  // French Museum Pages
  'https://fundacionelcano.github.io/tour/PagesFR/Museum/AS-V1.html',
  'https://fundacionelcano.github.io/tour/PagesFR/Museum/AS-V2.html',
  'https://fundacionelcano.github.io/tour/PagesFR/Museum/Panel1.html',
  'https://fundacionelcano.github.io/tour/PagesFR/Museum/Panel2.html',
  'https://fundacionelcano.github.io/tour/PagesFR/Museum/Panel3.html',
  'https://fundacionelcano.github.io/tour/PagesFR/Museum/Panel4.html',
  'https://fundacionelcano.github.io/tour/PagesFR/Museum/Panel5.html',
  'https://fundacionelcano.github.io/tour/PagesFR/Museum/Panel6.html',
  'https://fundacionelcano.github.io/tour/PagesFR/Museum/Panel7.html',
  'https://fundacionelcano.github.io/tour/PagesFR/Museum/SP-V1.html',
  'https://fundacionelcano.github.io/tour/PagesFR/Museum/SP-V2.html',
  'https://fundacionelcano.github.io/tour/PagesFR/Museum/SP-V3.html',
  'https://fundacionelcano.github.io/tour/PagesFR/Museum/SP-V4.html',
  'https://fundacionelcano.github.io/tour/PagesFR/Museum/SP-V5.html',
  'https://fundacionelcano.github.io/tour/PagesFR/Museum/SP-V6789.html',

  //Images
  'https://fundacionelcano.github.io/tour/Images/backarrow.png',
  'https://fundacionelcano.github.io/tour/Images/cdsaber.png',
  'https://fundacionelcano.github.io/tour/Images/FECLogoNew.png',
  'https://fundacionelcano.github.io/tour/Images/footprintpossibilities.jpeg',
  'https://fundacionelcano.github.io/tour/Images/fundacionelcano.jpg',
  'https://fundacionelcano.github.io/tour/Images/Globalgiving.png',
  'https://fundacionelcano.github.io/tour/Images/INAC.jpg',
  'https://fundacionelcano.github.io/tour/Images/SENACYT.jpg',


  //Museum Images
  'https://fundacionelcano.github.io/tour/Images/Museum/AntesalaWall2.PNG',
  'https://fundacionelcano.github.io/tour/Images/Museum/AS-V1.png',
  'https://fundacionelcano.github.io/tour/Images/Museum/AS-V2.png',
  'https://fundacionelcano.github.io/tour/Images/Museum/MuseumMapLandscape.png',
  'https://fundacionelcano.github.io/tour/Images/Museum/MuseumPanel1.PNG',
  'https://fundacionelcano.github.io/tour/Images/Museum/MuseumPanel3.PNG',
  'https://fundacionelcano.github.io/tour/Images/Museum/MuseumSalaPrincipalCartela1.PNG',
  'https://fundacionelcano.github.io/tour/Images/Museum/MuseumSalaPrincipalCartela2.PNG',
  'https://fundacionelcano.github.io/tour/Images/Museum/MuseumSalaPrincipalCartela3.PNG',
  'https://fundacionelcano.github.io/tour/Images/Museum/MuseumSalaPrincipalCartela4.PNG',
  'https://fundacionelcano.github.io/tour/Images/Museum/SP-V1.jpg',
  'https://fundacionelcano.github.io/tour/Images/Museum/SP-V2.jpg',
  'https://fundacionelcano.github.io/tour/Images/Museum/SP-V3.JPG',
  'https://fundacionelcano.github.io/tour/Images/Museum/SP-V4.jpg',
  'https://fundacionelcano.github.io/tour/Images/Museum/SP-V5-2.JPG',
  'https://fundacionelcano.github.io/tour/Images/Museum/SP-V7.jpg',
  'https://fundacionelcano.github.io/tour/Images/Museum/SP-V8.PNG',
  'https://fundacionelcano.github.io/tour/Images/Museum/SP-V9.PNG',
  
  //Web Icons
  'https://fundacionelcano.github.io/tour/Images/WebIcons/HighRes.png',
  'https://fundacionelcano.github.io/tour/Images/WebIcons/MedRes.png',


  //Park Images
  'https://fundacionelcano.github.io/tour/Images/Park/area1excavation.2.jpeg',
  'https://fundacionelcano.github.io/tour/Images/Park/InfoPanel1.jpeg',
  'https://fundacionelcano.github.io/tour/Images/Park/monoliths&tree.jpeg',
  'https://fundacionelcano.github.io/tour/Images/Park/Mound3.2.jpeg',
  'https://fundacionelcano.github.io/tour/Images/Park/mound3tomb.jpeg',
  'https://fundacionelcano.github.io/tour/Images/Park/ParkMap.png',
  'https://fundacionelcano.github.io/tour/Images/Park/ParkMapFrench.png',
  'https://fundacionelcano.github.io/tour/Images/Park/riverrockcauseway.png',
  'https://fundacionelcano.github.io/tour/Images/Park/rowofmonoliths.jpeg',
  'https://fundacionelcano.github.io/tour/Images/Park/sacrifice2.png',
  'https://fundacionelcano.github.io/tour/Images/Park/ticketbooth.jpeg',
  
  // 'Styles/',
  'https://fundacionelcano.github.io/tour/Styles/BrandonGrotesque.ttf',
  'https://fundacionelcano.github.io/tour/Styles/frontpage.css',
  'https://fundacionelcano.github.io/tour/Styles/indexEN.css',
  'https://fundacionelcano.github.io/tour/Styles/jessiestyle.css',
  'https://fundacionelcano.github.io/tour/Styles/Klill-Light.ttf',
  'https://fundacionelcano.github.io/tour/Styles/museumsheets.css',
  'https://fundacionelcano.github.io/tour/Styles/parkmap.css',

  //StylesFR
  'https://fundacionelcano.github.io/tour/StylesFR/frontpage.css',
  'https://fundacionelcano.github.io/tour/StylesFR/indexFR.css',
  'https://fundacionelcano.github.io/tour/StylesFR/jessiestyle.css',
  'https://fundacionelcano.github.io/tour/StylesFR/museumsheets.css',
  'https://fundacionelcano.github.io/tour/StylesFR/parkmap.css',

  // 'Scripts/',
  'https://fundacionelcano.github.io/tour/Scripts/install.js'
  //Remember that the last file should not have a comma after it.
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
