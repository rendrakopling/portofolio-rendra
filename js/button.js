
// JavaScript portofolio Mochammad Narendra Yudho Nugroho
// Dipasang di ketiga halaman dengan defer

// 1. Daftar keahlian (halaman Beranda)
const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
];
skills.push({ nama: "JavaScript", level: "Dasar" });

console.log("Keahlian Mochammad Narendra Yudho Nugroho :");
console.table(skills);

const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

if (daftarSkill && jumlahSkill) {
  skills.forEach((skill) => {
    const item = document.createElement("li");
    item.textContent = `${skill.nama} (${skill.level})`;
    daftarSkill.appendChild(item);
  });

  jumlahSkill.textContent = `Ada ${skills.length} keahlian yang sedang saya kembangkan.`;
}

const hobi = ["Bermain badminton", "Membaca komik", "bermain game"];
for (const item of hobi) {
  console.log(`Hobi saya: ${item}`);
}
console.log(`Jumlah hobi: ${hobi.length}`);

// 2. Tema gelap (semua halaman)
const tombolTema = document.querySelector("#tombol-tema");

if (tombolTema) {
  tombolTema.addEventListener("click", () => {
    document.body.classList.toggle("gelap");
    tombolTema.textContent = document.body.classList.contains("gelap")
      ? "Mode Terang"
      : "Mode Gelap";
  });
}

// 3. Penghitung karakter pesan (halaman Kontak)
const kotakPesan = document.querySelector("#pesan");
const hitungKarakter = document.querySelector("#hitung-karakter");

if (kotakPesan && hitungKarakter) {
  kotakPesan.addEventListener("input", () => {
    hitungKarakter.textContent = `${kotakPesan.value.length}/300 karakter`;
  });
}

// 4. Daftar proyek dan filter (halaman Proyek)
const proyek = [
  {
    judul: "Halaman Profil Pertama",
    kategori: "HTML",
    gambar: "img/proyek.png",
    alt: "Tangkapan layar halaman profil Mochammad Narendra Yudho Nugroho",
    deskripsi: "Halaman web pertama saya, dibuat dengan HTML dasar.",
  },
  {
    judul: "Form Kontak",
    kategori: "HTML",
    gambar: "img/proyek-kontak.png",
    alt: "Tangkapan layar form kontak berisi lima isian",
    deskripsi: "Form dengan label dan validasi bawaan browser.",
  },
  {
    judul: "Tabel Jadwal Belajar",
    kategori: "HTML",
    gambar: "img/proyek-jadwal.png",
    alt: "Tangkapan layar tabel jadwal belajar mandiri",
    deskripsi: "Jadwal belajar mingguan dengan thead dan tbody.",
  },
  {
    judul: "Portofolio Responsif",
    kategori: "CSS",
    gambar: "img/PORTOFOLIO RENDRA.jpeg",
    alt: "Tangkapan layar portofolio di ponsel dan laptop",
    deskripsi: "Rapi di ponsel, tablet, dan laptop dengan Flexbox.",
  },
  {
    judul: "Kalkulator Nilai Rapor",
    kategori: "JavaScript",
    gambar: "img/kalkulator.png",
    alt: "Tangkapan layar hasil kalkulator nilai di Console",
    deskripsi: "Rata-rata dan predikat nilai dengan fungsi JavaScript.",
  },
  {
    judul: "Lima Soal Logika",
    kategori: "JavaScript",
    gambar: "img/lima soal logika.png",
    alt: "Tangkapan layar hasil uji lima soal logika",
    deskripsi: "Lima fungsi logika yang masing-masing diuji 3 masukan.",
  },
];

const daftarProyek = document.querySelector("#daftar-proyek");
const jumlahProyek = document.querySelector("#jumlah-proyek");

function buatKartu(item) {
  return `
    <article class="kartu">
      <span class="label">${item.kategori}</span>
      <h3>${item.judul}</h3>
      <img src="${item.gambar}" alt="${item.alt}" width="280">
      <p>${item.deskripsi}</p>
    </article>`;
}

function tampilkanProyek(daftar) {
  const semuaKartu = daftar.map((item) => buatKartu(item));
  daftarProyek.innerHTML = semuaKartu.join("");
  jumlahProyek.textContent = `Menampilkan ${daftar.length} dari ${proyek.length} proyek`;
}

function pasangFilter(idTombol, kategori) {
  const tombol = document.querySelector(idTombol);

  if (!tombol) {
    return;
  }

  tombol.addEventListener("click", () => {
    if (kategori === "Semua") {
      tampilkanProyek(proyek);
    } else {
      tampilkanProyek(proyek.filter((item) => item.kategori === kategori));
    }

    const tombolAktif = document.querySelector(".tombol-filter.aktif");

    if (tombolAktif) {
      tombolAktif.classList.remove("aktif");
    }

    tombol.classList.add("aktif");
  });
}

if (daftarProyek && jumlahProyek) {
  tampilkanProyek(proyek);
  pasangFilter("#filter-semua", "Semua");
  pasangFilter("#filter-html", "HTML");
  pasangFilter("#filter-css", "CSS");
  pasangFilter("#filter-javascript", "JavaScript");
}
const username = "rendrakopling-source";
const alamatRepo = https//api.github.com/users/${username}/repos;
const pilihan = "?sort=updated&per_page=6";

const daftarRepo = document.querySelector("#daftar-repo");
const statusRepo = document.querySelector("#status-repo");

async function ambilRepo() {
    statusRepo.textContent = "Memuat...";

    try {
        const response = await fetch(alamatRepo + pilihan);

        if (!response.ok) {
            throw new Error(Status );
        }

        const repos = await response.json();

        repos.forEach((repo) => {
            const item = document.createElement("li");
            const tautan = document.createElement("a");

            tautan.href = repo.html_url;
            tautan.target = "_blank";
            tautan.textContent = repo.name;

            item.appendChild(tautan);
            daftarRepo.appendChild(item);
        });

        statusRepo.textContent =
            $repos.length}   
     catch (error) {
        statusRepo.textContent =
            "Maaf, daftar repositori gagal dimuat. Periksa username atau coba lagi nanti.";

        console.error(error);
    }
}

if (daftarRepo) {
    ambilRepo();
}
// tombol ke atas
const tombolatas = document.querySelector("#tombol-atas");
if (tombolatas)
  tombolatas.addEventListener("click", function () {
 window.scrollTo({

  top: 0,
  behavior: "smooth"
});
});