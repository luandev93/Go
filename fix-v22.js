/* v1.0.0 structural correction layer. Keeps the runtime model intact while preventing legacy UI helpers from replacing approved assets. */
(()=>{
  const $=id=>document.getElementById(id);
  const localIcons={go:'./go.svg?v=22',rust:'./rust-white.svg?v=22',postgres:'./postgres.svg?v=22'};
  const labels={go:'Go',rust:'Rust',postgres:'PostgreSQL'};
  function applyBrandIcons(){
    document.querySelectorAll('.nav-item,.side-link').forEach(button=>{
      const id=button.dataset.view;
      if(!localIcons[id]) return;
      let img=button.querySelector('.brand-icon');
      if(!img){img=document.createElement('img');img.className='brand-icon';button.insertBefore(img,button.firstChild)}
      img.src=localIcons[id];img.alt=labels[id];img.removeAttribute('style');
      if(id==='rust')img.classList.add('rust-brand-icon');
    });
    document.querySelectorAll('.course-mark.rust img').forEach(img=>{img.style.filter='brightness(0) invert(1)';img.src=localIcons.rust});
    document.querySelectorAll('.course-mark.go img').forEach(img=>{img.src=localIcons.go;img.style.filter='none'});
    document.querySelectorAll('.course-mark.postgres img').forEach(img=>{img.src=localIcons.postgres;img.style.filter='none'});
  }
  function applyFooter(){
    let foot=document.querySelector('.site-footer');
    if(!foot){foot=document.createElement('footer');foot.className='site-footer';document.body.appendChild(foot)}
    foot.innerHTML='<div><img src="./icon.svg?v=22" alt="Aprenda Go Rust PostgreSQL"><div><b>Aprenda Go + Rust + PostgreSQL</b><small>Controle de estudos para desenvolvedores</small></div></div><div class="footer-meta"><span>v1.0</span><span>© 2026</span></div>';
  }
  function ensureTimeline(){
    const pv=$('progressView');
    if(!pv||$('studyTimeline'))return;
    const s=document.createElement('section');s.id='studyTimeline';s.className='timeline-card';
    s.innerHTML='<div class="timeline-head"><div><p class="eyebrow">LINHA DO TEMPO</p><h2>Histórico da jornada</h2><span>Registro acumulativo para acompanhar sua evolução ao longo dos anos.</span></div><b id="timelineTotal">0 marcos</b></div><div id="timelineTrack" class="timeline-track"></div>';
    pv.append(s);
  }
  function installVisuals(){applyBrandIcons();applyFooter();ensureTimeline()}
  window.installVisuals=installVisuals;
  function clockSafe(){
    const box=$('studyClock');if(!box)return;
    const d=new Date();
    const date=d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric'});
    const time=d.toLocaleTimeString('pt-BR');
    box.innerHTML='<span class="clock-label">REGISTRO DE ESTUDO</span><strong class="clock-time">'+time+'</strong><b class="clock-date">'+date+'</b>';
  }
  function normalize(){applyBrandIcons();applyFooter();ensureTimeline();clockSafe();}
  normalize();
  window.addEventListener('load',normalize);
  setTimeout(normalize,0);setTimeout(normalize,250);setTimeout(normalize,1000);
})();
