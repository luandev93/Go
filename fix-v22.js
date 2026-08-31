/* v1.0.0 — final UI normalization. No image generation; uses the approved existing visual assets. */
(()=>{
  const rustFilter='brightness(0) saturate(100%) invert(48%) sepia(97%) saturate(1826%) hue-rotate(2deg) brightness(103%) contrast(103%)';
  function normalize(){
    document.querySelectorAll('.nav-item[data-view="rust"] .brand-icon,.side-link[data-view="rust"] .brand-icon,.course-mark.rust img').forEach(el=>{el.style.filter=rustFilter;el.style.opacity='1'});
    document.querySelectorAll('.study-clock .clock-label').forEach(el=>el.remove());
    const clock=document.getElementById('studyClock');
    if(clock){
      const d=new Date();
      let time=clock.querySelector('.clock-time'),date=clock.querySelector('.clock-date');
      if(!time){time=document.createElement('strong');time.className='clock-time';clock.append(time)}
      if(!date){date=document.createElement('b');date.className='clock-date';clock.append(date)}
      time.textContent=d.toLocaleTimeString('pt-BR');
      date.textContent=d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric'});
    }
    document.querySelectorAll('.nav-item[data-view="progresso"] .progress-icon').forEach(el=>el.textContent='');
  }
  normalize();
  window.addEventListener('load',normalize);
  setInterval(normalize,1000);
})();
