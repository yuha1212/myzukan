// 共通関数（localStorage 用）
function getZukans() {
  const json = localStorage.getItem('zukans');
  return json ? JSON.parse(json) : [];
}

function saveZukans(zukans) {
  localStorage.setItem('zukans', JSON.stringify(zukans));
}

function addZukan(zukan) {
  const zukans = getZukans();
  zukans.push(zukan);
  saveZukans(zukans);
}

function deleteZukan(id) {
  // 図鑑と中の写真データを完全削除
  const zukans = getZukans().filter(z => z.id !== id);
  saveZukans(zukans);
}

function getZukanById(id) {
  const zukans = getZukans();
  return zukans.find(zukan => zukan.id === id);
}

function addPhotoToZukan(id, photoData) {
  const zukans = getZukans();
  const index = zukans.findIndex(z => z.id === id);
  if (index === -1) return;
  if (!zukans[index].photos) zukans[index].photos = [];
  zukans[index].photos.push(photoData);
  saveZukans(zukans);
}
