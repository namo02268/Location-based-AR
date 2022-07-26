window.addEventListener('load', () => {
  setInterval(() => {
    const currentPos = document.getElementById('camera').object3D.position;
    document.getElementById('current').textContent = `現在地: ${currentPos.x}, ${currentPos.y}, ${currentPos.z}`;

    const distinationPos = document.getElementById('Bamiyan').object3D.position;;
    document.getElementById('distination').textContent = `目的地: ${distinationPos.x}, ${distinationPos.y}, ${distinationPos.z}`;

    distance = currentPos.distanceTo(distinationPos);
    document.getElementById('distance').textContent = `目的地までの距離: ${distance}m`
  }, 100);
});
