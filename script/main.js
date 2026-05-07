// ===== CONFIG - EDIT DI SINI =====
const BIRTHDAY_DATE = new Date('2026-06-09T00:00:00');

const LETTER = `Happy Birthday to the most handsome soul who lights up my world! 🌹✨

Setiap momen bersamamu terasa seperti perayaan, tapi hari ini ekstra spesial karena semuanya tentang kamu. Aku sangat bersyukur atas cintamu, senyummu, dan kebahagiaan tanpa henti yang kamu bawa ke hidupku. Happy Level 20, Cel! 🗿✨

Jir, akhirnya ya resmi lepas juga dari kasta belasan tahun dan masuk ke kepala dua. Cepet banget sih, perasaan baru kemaren aku nganggep kamu bocil banget. Di umur baru ini, tolong ya, drama-drama lebaynya dikurangi 😾

Aku tau tahun ini kamu lagi fokus fokusnya ngejar cita citamu, Sekolah Kedinasan. Aku gamau nambahin beban atau bikin kamu stres, tapi aku cuma mau bilang: I've got your back. Apapun proses yang bakal kamu laluin nanti, capeknya kaya gimana, aku bakal dukung terus.

Kamu kejar cita cita itu buat diri kamu sendiri, biar kamu punya masa depan yang keren dan bisa berdiri di kaki sendiri. Inget juga Ayah sama Ibu kamu, mereka itu naruh harapan gede banget di pundak kamu. Jangan cuma jago nge-carry tim di ML, tapi buktiin kalau kamu juga bisa nge-carry kebanggaan orang tua kamu di dunia nyata ✨😽

Tunjukin kalau Marcel v2.0 ini bener-bener versi laki-laki yang bisa diandelin dan bikin Ayah Ibu bangga. Satu lagi... simak ya! Kurang kurangin itu makan pedesnya. Perut kamu bukan tempat pembuangan cabe, Cel! Dietnya jangan kendor, inget tes fisik kedinasan itu butuh badan yang fit dan sehat. Aku cerewet soal ini biar kamu beneran siap tempur nanti, bukan buat bikin kamu pusing 😾

Anggep aja rasa laper pas diet itu adalah effort buat dapet maniac di kehidupan nyata 🥰

Makasih ya udah jadi Marcel yang kukenal dan nemenin aku. Maaf aku sering malesin atau ngebacotin kamu. Semoga di umur 20 ini, semua doa kamu jadi answered prayers. Sukses buat tesnya, sukses buat dietnya, dan jangan lupa bahagia.

Happy 20th Birthday, Cel. Go get your dream! God bless you ❤️`;
// ===== END CONFIG =====


// ===== MUSIC POPUP =====
function startSite(playMusic) {
  const popup = document.getElementById('musicPopup');
  popup.style.opacity = '0';
  popup.style.transition = 'opacity 0.4s';
  setTimeout(() => popup.style.display = 'none', 400);

  if (playMusic) {
    const music = document.getElementById('bgMusic');
    music.volume = 0.6;
    music.play().catch(() => {});
  }

  initPage1();
}


// ===== FLOATING PAWS =====
function initPaws() {
  const pawBg = document.getElementById('pawBg');
  if (!pawBg) return;
  for (let i = 0; i < 18; i++) {
    const paw = document.createElement('div');
    paw.className = 'paw';
    paw.textContent = '🐾';
    paw.style.left = Math.random() * 100 + 'vw';
    paw.style.fontSize = (0.8 + Math.random() * 1.5) + 'rem';
    paw.style.animationDuration = (12 + Math.random() * 16) + 's';
    paw.style.animationDelay = (Math.random() * 18) + 's';
    pawBg.appendChild(paw);
  }
}


// ===== DATE ANIMATION =====
function animateDate() {
  const months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  const targetYear = 2026;
  const targetMonth = 5; // Juni = index 5
  const targetDay = 9;
  const birthYear = 2006;

  let currentYear = birthYear;
  let currentMonth = 0;
  let currentDay = 1;

  const dayEl = document.getElementById('animDay');
  const monthEl = document.getElementById('animMonth');
  const yearEl = document.getElementById('animYear');

  const interval = setInterval(() => {
    if (currentDay < targetDay) {
      currentDay++;
    } else if (currentMonth < targetMonth) {
      currentDay = targetDay;
      currentMonth++;
    } else if (currentYear < targetYear) {
      currentMonth = targetMonth;
      currentYear++;
    } else {
      clearInterval(interval);
      return;
    }
    dayEl.textContent = currentDay;
    monthEl.textContent = months[currentMonth];
    yearEl.textContent = currentYear;
  }, 100);
}


// ===== COUNTDOWN =====
function updateCountdown() {
  const now = new Date();
  const diff = BIRTHDAY_DATE - now;

  if (diff <= 0) {
    document.getElementById('cdDays').textContent = '00';
    document.getElementById('cdHours').textContent = '00';
    document.getElementById('cdMins').textContent = '00';
    document.getElementById('cdSecs').textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('cdDays').textContent = String(days).padStart(2, '0');
  document.getElementById('cdHours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cdMins').textContent = String(mins).padStart(2, '0');
  document.getElementById('cdSecs').textContent = String(secs).padStart(2, '0');
}


// ===== PAGE 1 INIT =====
function initPage1() {
  initPaws();
  setTimeout(animateDate, 300);
  updateCountdown();
  setInterval(updateCountdown, 1000);
}


// ===== PAGE NAVIGATION =====
let currentPage = 1;

function goToPage(num) {
  const current = document.getElementById('page' + currentPage);
  const next = document.getElementById('page' + num);

  current.classList.add('hidden');
  next.classList.remove('hidden');
  next.scrollTop = 0;
  currentPage = num;

  if (num === 2) initPage2();
  if (num === 3) initPage3();
  if (num === 4) initPage4();
}


// ===== PAGE 2: KATA KATA =====
function initPage2() {
  const lines = document.querySelectorAll('.word-line');
  lines.forEach(line => {
    line.classList.remove('visible');
  });

  lines.forEach(line => {
    const delay = parseInt(line.dataset.delay) || 0;
    setTimeout(() => {
      line.classList.add('visible');
    }, delay);
  });

  // Show next button after last line
  const lastDelay = parseInt(lines[lines.length - 1].dataset.delay) + 1200;
  setTimeout(() => {
    document.getElementById('nextBtn2').classList.remove('hidden');
  }, lastDelay);
}


// ===== PAGE 3: SURAT =====
let typingInterval;

function initPage3() {
  const textEl = document.getElementById('letterText');
  const cursor = document.getElementById('letterCursor');
  textEl.textContent = '';
  cursor.style.display = 'inline-block';

  let i = 0;
  clearInterval(typingInterval);

  typingInterval = setInterval(() => {
    if (i < LETTER.length) {
      textEl.textContent += LETTER[i];
      i++;
      // Auto scroll
      const page3 = document.getElementById('page3');
      page3.scrollTop = page3.scrollHeight;
    } else {
      clearInterval(typingInterval);
      cursor.style.display = 'none';
      document.getElementById('nextBtn3').classList.remove('hidden');
    }
  }, 22);
}


// ===== PAGE 4: GALLERY =====
function initPage4() {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    setTimeout(() => {
      item.style.transition = 'all 0.5s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, i * 150);
  });
}
