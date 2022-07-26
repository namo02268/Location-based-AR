window.addEventListener('load', () => {
  // 100msごとに実行
  setInterval(() => {
    // 現在地（カメラ）の空間座標を取得
    const currentPos = document.getElementById('camera').object3D.position;
    // currentに座標の値を代入
    document.getElementById('current').textContent = `現在地の座標 x:${currentPos.x.toFixed(1)}m, y:${currentPos.y.toFixed(1)}m, z:${currentPos.z.toFixed(1)}m`;

    // 目的地（バーミヤン）の空間座標を取得
    const distinationPos = document.getElementById('Bamiyan').object3D.position;;
    // distinationに座標の値を代入
    document.getElementById('distination').textContent = `目的地の座標 x:${distinationPos.x.toFixed(1)}m, y:${distinationPos.y.toFixed(1)}m, z:${distinationPos.z.toFixed(1)}m`;

    // currentPosとdistinationPosのベクトル差を計算
    distance = currentPos.distanceTo(distinationPos);
    // distanceに値を代入
    document.getElementById('distance').textContent = `目的地までの距離: ${distance.toFixed(1)}m`
  }, 100);
});
