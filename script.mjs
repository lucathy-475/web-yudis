import data from './informatika-2024.json'
console.log(data)

// const friendsData = [
//   {
//     nama: "Yudhistira Anugrah",
//     nim: "240411100162",
//     ttl: "Surabaya 20 Maret 2006",
//     alamat: "Kalimas Baru 3/15/2",
//     noHP: "082138403443",
//     photo: "./assets/yudhis.jpg"
//   },
//   {
//     nama: "Yudhistira Anugrah",
//     nim: "240411100162",
//     ttl: "Surabaya 20 Maret 2006",
//     alamat: "Kalimas Baru 3/15/2",
//     noHP: "082138403443",
//     photo: "./assets/yudhis.jpg"
//   },
//   {
//     nama: "Yudhistira Anugrah",
//     nim: "240411100162",
//     ttl: "Surabaya 20 Maret 2006",
//     alamat: "Kalimas Baru 3/15/2",
//     noHP: "082138403443",
//     photo: "./assets/Yudhis.jpg"
//   },
//   {
//     nama: "Yudhistira Anugrah",
//     nim: "240411100162",
//     ttl: "Surabaya 20 Maret 2006",
//     alamat: "Kalimas Baru 3/15/2",
//     noHP: "082138403443",
//     photo: "./assets/yudhis.jpg"
//   },
//   {
//     nama: "Yudhistira Anugrah",
//     nim: "240411100162",
//     ttl: "Surabaya 20 Maret 2006",
//     alamat: "Kalimas Baru 3/15/2",
//     noHP: "082138403443",
//     photo: "./assets/yudhis.jpg"
//   },
//   {
//     nama: "Yudhistira Anugrah",
//     nim: "240411100162",
//     ttl: "Surabaya 20 Maret 2006",
//     alamat: "Kalimas Baru 3/15/2",
//     noHP: "082138403443",
//     photo: "./assets/yudhis.jpg"
//   },
// ];

function friendListsElement() {
  const friendLists = document.getElementById("friend_list");
  const lists = `
    ${friendsData.map(data => `
      <li>
        <figure>
          <img src="${data.photo}" alt="Yudhistira Anugrah" width="100%">
          <figcaption>
            <span>Nama : ${data.nama}</span>
            <span>NIM : ${data.nim}</span>
            <span>TTL : ${data.ttl}</span>
            <span>Alamat : ${data.alamat}</span>
            <span>NoHP : ${data.noHP}</span>
          </figcaption>
        </figure>
      </li>
    `).join("")}
  `;

  return friendLists.innerHTML = lists
}

friendListsElement()