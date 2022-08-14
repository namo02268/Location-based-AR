window.addEventListener('load', () => {
  // 1000msごとに実行
  setInterval(() => {
    // カメラ
    const camera = document.querySelector('.camera');
    const cPos = camera.getAttribute('position');
    const cLatLon = camera.components['gps-camera'].currentCoords;

    document.querySelector('.cPos').textContent = `x:${cPos.x.toFixed(1)}m, y:${cPos.y.toFixed(1)}m, z:${cPos.z.toFixed(1)}m`;
    document.querySelector('.cLatLon').textContent = `lat:${cLatLon.latitude}, lon:${cLatLon.longitude}`;

    console.log(camera);

    // 目的地
    const distination = document.querySelector('.distination');
    const dPos = distination.getAttribute('position');
    const dLatLon = distination.components['gps-entity-place'].attrValue;

    document.querySelector('.dPos').textContent = `x:${dPos.x.toFixed(1)}m, y:${dPos.y.toFixed(1)}m, z:${dPos.z.toFixed(1)}m`;
    document.querySelector('.dLatLon').textContent = `lat:${dLatLon.latitude}, lon:${dLatLon.longitude}`;

    // 距離
    distance = cPos.distanceTo(dPos);
    document.querySelector('.distance').textContent = `${あとdistance.toFixed(1)} meters`;
  }, 1000);
});
