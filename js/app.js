function demoLogin(e){
  e.preventDefault();
  const btn = document.querySelector('#loginBtn');
  btn.textContent = 'Memuat dashboard...';
  btn.disabled = true;
  setTimeout(()=> location.href='dashboard.html', 700);
}

function setActiveNav(){
  const file = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a,.mobile-links a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === file) a.classList.add('active');
  });
}

function appendLog(targetId, text){
  const box = document.getElementById(targetId);
  if(!box) return;
  const d = document.createElement('div');
  d.className = 'log-line';
  d.textContent = text;
  box.appendChild(d);
  box.scrollTop = box.scrollHeight;
}

function runWhatsappDemo(){
  const btn = document.getElementById('waBtn');
  const prog = document.querySelector('#waProgress span');
  const state = document.getElementById('waState');
  const log = document.getElementById('waLog');
  if(!btn || !prog || !state || !log) return;

  log.innerHTML='';
  btn.disabled=true;
  btn.textContent='Menjalankan simulasi...';
  state.textContent='Simulasi berjalan';
  state.className='status warn';

  const steps = [
    [12,'Mempersiapkan sesi demo lokal...'],
    [28,'Memvalidasi format input...'],
    [46,'Membuat perangkat contoh...'],
    [67,'Memuat histori aktivitas dummy...'],
    [84,'Menyusun ringkasan simulasi...'],
    [100,'Selesai. Tidak ada data WhatsApp yang diakses.']
  ];

  steps.forEach((s,i)=>setTimeout(()=>{
    prog.style.width=s[0]+'%';
    appendLog('waLog',s[1]);
    if(s[0]===100){
      btn.disabled=false;
      btn.textContent='Jalankan Simulasi Lagi';
      state.textContent='Demo selesai';
      state.className='status ok';
    }
  }, 420*i));
}

function runLocationDemo(){
  const btn = document.getElementById('locBtn');
  const state = document.getElementById('locState');
  const coords = document.getElementById('coords');
  if(!btn || !state || !coords) return;
  btn.disabled=true;
  btn.textContent='Mencari titik demo...';
  state.textContent='Memproses';
  state.className='status warn';
  setTimeout(()=>{
    coords.textContent='3.5897, 98.6738 (contoh)';
    state.textContent='Titik demo siap';
    state.className='status ok';
    btn.disabled=false;
    btn.textContent='Ulangi Simulasi';
  },900);
}

function runRecoveryDemo(){
  const btn=document.getElementById('recBtn');
  const state=document.getElementById('recState');
  const result=document.getElementById('recResult');
  if(!btn || !state || !result) return;
  btn.disabled=true;
  btn.textContent='Memeriksa alur...';
  state.textContent='Simulasi';
  state.className='status warn';
  result.innerHTML='';
  setTimeout(()=>{
    result.innerHTML=`
      <div class="step"><div class="step-num">1</div><div><h4>Verifikasi kepemilikan</h4><p>Gunakan kanal pemulihan resmi dari platform. Demo ini tidak meminta OTP, PIN, password, atau kode sesi.</p></div></div>
      <div class="step"><div class="step-num">2</div><div><h4>Amankan akun</h4><p>Keluar dari perangkat yang tidak dikenal dan aktifkan verifikasi dua langkah melalui pengaturan resmi.</p></div></div>
      <div class="step"><div class="step-num">3</div><div><h4>Dokumentasikan laporan</h4><p>Simpan waktu kejadian, nomor tiket bantuan, dan bukti yang memang Anda miliki.</p></div></div>`;
    state.textContent='Checklist siap';
    state.className='status ok';
    btn.disabled=false;
    btn.textContent='Buat Checklist Lagi';
  },900);
}

document.addEventListener('DOMContentLoaded',setActiveNav);