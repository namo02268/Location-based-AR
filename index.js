window.addEventListener('load', () => {
  setInterval(() => {
    const currentPos = document.getElementById('camera').object3D.position;
    document.getElementById('current').textContent = `現在地の座標 x:${currentPos.x.toFixed(1)}, y:${currentPos.y.toFixed(1)}, z:${currentPos.z.toFixed(1)}`;

    const distinationPos = document.getElementById('Bamiyan').object3D.position;;
    document.getElementById('distination').textContent = `目的地 x:${distinationPos.x.toFixed(1)}, y:${distinationPos.y.toFixed(1)}, z:${distinationPos.z.toFixed(1)}`;

    distance = currentPos.distanceTo(distinationPos);
    document.getElementById('distance').textContent = `目的地までの距離: ${distance}m`
  }, 100);
});
