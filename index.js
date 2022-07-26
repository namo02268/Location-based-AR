window.addEventListener('load', () => {
  // 100msごとに実行
  setInterval(() => {
    // カメラ
    const camera = document.getElementById('camera');
    const cPos = camera.object3D.position;
    const cLatLon = camera.components['gps-camera'].currentCoords;

    document.getElementById('cPos').textContent = `x:${cPos.x.toFixed(1)}m, y:${cPos.y.toFixed(1)}m, z:${cPos.z.toFixed(1)}m`;
    document.getElementById('cLatLon').textContent = `lat:${cLatLon.latitude}, lon:${cLatLon.longitude}`;

    // 目的地
    const distination = document.getElementById('distination');
    const dPos = distination.object3D.position;
    const dLatLon = distination.components['gps-entity-place'].attrValue;

    document.getElementById('dPos').textContent = `x:${dPos.x.toFixed(1)}m, y:${dPos.y.toFixed(1)}m, z:${dPos.z.toFixed(1)}m`;
    document.getElementById('dLatLon').textContent = `lat:${dLatLon.latitude}, lon:${dLatLon.longitude}`;

    // 距離
    distance = cPos.distanceTo(dPos);
    document.getElementById('distance').textContent = `${distance.toFixed(1)}m`
  }, 100);
});
