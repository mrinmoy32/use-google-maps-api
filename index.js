// const center = {
//   lat: 40.431908,
//   lng: 116.565291,
// };
// const zoom = 16;
// setInterval(() => {
//   const mapRef = document.getElementById("map");
//   const map = new window.google.maps.Map(mapRef.current, {
//     center: center,
//     zoom: zoom,
//   });
// }, 200);

// new window.google.maps.Marker({ position: center, map: map });
// -------Following code used from google maps official docs 
//goto:https://developers.google.com/maps/documentation/javascript/overview#js_api_loader_package

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 22.5860429, lng: 88.4889644 },
    zoom: 18,
  });
}

initMap();