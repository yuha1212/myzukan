// 共通関数

function getZukans() {
  const json = localStorage.getItem('zukans');
  return json ? JSON.parse(json) : [];
}

function saveZukans(zukans) {
  localStorage.setItem('zukans', JSON.stringify(zukans));
}

function addZukan(name) {
  const zukans = getZukans();
  const newZukan = {
    id: Date.now().toString(),
    name: name,
    photos: []
  };
  zukans.push(newZukan);
  saveZukans(zukans);
  return newZukan.id;
}

function getZukans() {
  return JSON.parse(localStorage.getItem("zukans") || "[]");
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

function deleteZukan(id) {
  let zukans = getZukans();
  zukans = zukans.filter(zukan => zukan.id !== id);
  sessionStorage.setItem('zukans', JSON.stringify(zukans));
}
