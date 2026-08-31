(()=>{
  const local={go:'./go.svg?v=28',rust:'./rust.svg?v=28',postgres:'./postgres.svg?v=28'};
  const labels={go:'Go',rust:'Rust',postgres:'PostgreSQL'};

  function normalizeAssets(){
    document.querySelectorAll('.nav-item,.side-link').forEach(button=>{
      const id=button.dataset.view;
      if(!local[id]) return;
      const images=button.querySelectorAll('img.brand-icon');
      images.forEach((img,index)=>{
        if(index>0) img.remove();
        else { img.src=local[id]; img.alt=labels[id]; img.removeAttribute('style'); }
      });
    });
    document.querySelectorAll('.course-mark img').forEach(img=>{
      const card=img.closest('.course-progress-card');
      const id=['go','rust','postgres'].find(key=>card?.classList.contains(key));
      if(id){img.src=local[id];img.alt=labels[id];}
    });
  }

  function installVisuals(){
    normalizeAssets();
    const pv=document.getElementById('progressView');
    if(pv&&!document.getElementById('studyTimeline')){
      const section=document.createElement('section');
      section.id='studyTimeline';
      section.className='timeline-card';
      section.innerHTML='<div class="timeline-head"><div><p class="eyebrow">LINHA DO TEMPO</p><h2>Histórico da jornada</h2><span>Registro acumulativo para acompanhar sua evolução ao longo dos anos.</span></div><b id="timelineTotal">0 marcos</b></div><div id="timelineTrack" class="timeline-track"></div>';
      pv.append(section);
    }
  }

  window.installVisuals=installVisuals;
  installVisuals();

  const observer=new MutationObserver(()=>normalizeAssets());
  observer.observe(document.body,{childList:true,subtree:true});
})();