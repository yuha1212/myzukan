// 共通関数

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

function getZukans() {
  return JSON.parse(sessionStorage.getItem("zukans") || "[]");
}

function saveZukans(zukans) {
  sessionStorage.setItem("zukans", JSON.stringify(zukans));
}

function deleteZukan(id) {
  let zukans = getZukans();
  zukans = zukans.filter(zukan => zukan.id !== id);
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

  zukans[index].photos.push(photoData);
  saveZukans(zukans);
}

