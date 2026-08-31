/* UI integrity layer — one source of truth for navigation assets. */
(()=>{
  const $=id=>document.getElementById(id);
  const views=['go','rust','postgres'];
  const src=id=>`./${id}.svg?v=25`;
  const label=id=>id==='postgres'?'PostgreSQL':id[0].toUpperCase()+id.slice(1);

  function normalizeNav(){
    document.querySelectorAll('.nav-item,.side-link').forEach(button=>{
      const id=button.dataset.view;
      if(!views.includes(id)) return;

      /* Remove every legacy/generated brand node first. */
      button.querySelectorAll('img.brand-icon,.brand-icon-inline,svg').forEach(el=>el.remove());

      const img=document.createElement('img');
      img.className='brand-icon';
      img.src=src(id);
      img.alt=label(id);
      img.width=34; img.height=34;
      img.style.cssText='width:34px;height:34px;display:block;object-fit:contain;flex:0 0 34px;filter:none!important;opacity:1!important';
      button.insertBefore(img,button.firstChild);
    });

    /* Progress must have exactly one icon node. */
    document.querySelectorAll('.nav-item[data-view="progresso"],.side-link[data-view="progresso"]').forEach(button=>{
      const icons=[...button.querySelectorAll('.progress-icon')];
      icons.slice(1).forEach(el=>el.remove());
      if(!icons.length){
        const icon=document.createElement('span');
        icon.className='progress-icon';
        icon.setAttribute('aria-hidden','true');
        button.insertBefore(icon,button.firstChild);
      }
    });
  }

  function normalizeClock(){
    const box=$('studyClock'); if(!box) return;
    const d=new Date();
    box.innerHTML=`<strong class="clock-time">${d.toLocaleTimeString('pt-BR')}</strong><b class="clock-date">${d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric'})}</b>`;
    box.removeAttribute('aria-label');
  }

  function normalizeInstall(){
    const footer=document.querySelector('.site-footer');
    if(!footer) return;
    const nodes=[...document.querySelectorAll('.footer-install')];
    if(!nodes.length) return;
    const keep=nodes[0];
    nodes.slice(1).forEach(el=>el.remove());
    if(keep.parentElement!==footer) footer.appendChild(keep);
  }

  function normalize(){normalizeNav();normalizeClock();normalizeInstall();}
  normalize();
  window.addEventListener('load',normalize);
  setTimeout(normalize,0);setTimeout(normalize,250);setTimeout(normalize,1000);
  setInterval(normalizeClock,1000);

  /* Other legacy UI scripts may mutate the nav after load. Keep one canonical state. */
  const observer=new MutationObserver(()=>{
    observer.disconnect();
    normalize();
    observer.observe(document.body,{childList:true,subtree:true});
  });
  if(document.body) observer.observe(document.body,{childList:true,subtree:true});
})();