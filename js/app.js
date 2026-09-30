const modal=document.getElementById('demoModal');
const bar=document.querySelector('#demoBar span');
const consoleBox=document.getElementById('demoConsole');
const statusText=document.getElementById('demoStatus');

function openDemo(){
  modal.classList.add('show');
  bar.style.width='0%';
  consoleBox.innerHTML='';
  statusText.textContent='Menjalankan pemeriksaan UI...';
  const steps=[
    [14,'Memvalidasi format nomor...'],
    [32,'Membuat sesi demo lokal...'],
    [51,'Memuat profil perangkat dummy...'],
    [70,'Menyusun aktivitas contoh...'],
    [88,'Menyiapkan dashboard preview...'],
    [100,'Selesai — tidak ada akun WhatsApp atau lokasi yang diakses.']
  ];
  steps.forEach((s,i)=>setTimeout(()=>{
    bar.style.width=s[0]+'%';
    const line=document.createElement('div');
    line.textContent='› '+s[1];
    consoleBox.appendChild(line);
    if(s[0]===100) statusText.textContent='Demo selesai';
  },i*420));
}
function closeDemo(){modal.classList.remove('show')}
document.getElementById('launchBtn')?.addEventListener('click',e=>{e.preventDefault();openDemo()});
modal?.addEventListener('click',e=>{if(e.target===modal)closeDemo()});
