/* UI integrity layer — local vector brand assets only. */
(()=>{
  const $=id=>document.getElementById(id);
  function applyBrandIcons(){
    document.querySelectorAll('.nav-item,.side-link').forEach(button=>{
      const id=button.dataset.view;
      if(!['go','rust','postgres'].includes(id)) return;
      const src=id==='go'?'./go.svg?v=25':id==='rust'?'./rust.svg?v=25':'./postgres.svg?v=25';
      button.querySelectorAll('.brand-icon-inline').forEach(el=>el.remove());
      let img=button.querySelector('img.brand-icon');
      if(!img){img=document.createElement('img');img.className='brand-icon';button.insertBefore(img,button.firstChild)}
      img.src=src;img.alt=id==='postgres'?'PostgreSQL':id[0].toUpperCase()+id.slice(1);img.width=34;img.height=34;
      img.style.cssText='width:34px;height:34px;display:block;object-fit:contain;flex:0 0 34px;filter:none';
    });
  }
  function normalizeClock(){
    const box=$('studyClock');if(!box)return;
    const d=new Date();
    box.innerHTML='<strong class="clock-time">'+d.toLocaleTimeString('pt-BR')+'</strong><b class="clock-date">'+d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric'})+'</b>';
    box.removeAttribute('aria-label');
  }
  function normalize(){applyBrandIcons();normalizeClock()}
  normalize();window.addEventListener('load',normalize);setTimeout(normalize,0);setTimeout(normalize,250);setTimeout(normalize,1000);setInterval(normalizeClock,1000);
})();