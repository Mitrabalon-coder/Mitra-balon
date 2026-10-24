// MITRA BALON - interaksi navigasi dan tombol WhatsApp
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const open = navigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.textContent = open ? "✕" : "☰";
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// GANTI 6281234567890 dengan nomor WhatsApp bisnis Anda.
// Gunakan kode negara 62 tanpa tanda +, spasi, atau angka 0 di awal.
const nomorWhatsApp = "628170184883";
const pesan =
  "Halo MITRA BALON, saya ingin bertanya tentang produk dan dekorasi balon.";
const whatsappLink = document.getElementById("whatsappLink");

if (whatsappLink) {
  whatsappLink.href = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
}

function bukaGaleri(id) {
  const galeri = document.getElementById(id);

  if (!galeri) return;

  galeri.hidden = false;
  galeri.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function tutupGaleri() {
  const galeri = document.getElementById("galeri-dekorasi");

  if (!galeri) return;

  galeri.hidden = true;
  document.querySelector(".product-card")?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}
