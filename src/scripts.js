document.addEventListener('DOMContentLoaded',()=>{
  const motionAllowed=!window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const filters=document.querySelectorAll('.filter');
  const projects=document.querySelectorAll('.project');
  const projectGroups=document.querySelectorAll('.project-group');
  const updateProjectGroups=()=>{
    projectGroups.forEach(group=>{
      const visibleProjects=group.querySelectorAll('.project:not([hidden])');
      group.hidden=visibleProjects.length===0;
    });
  };

  filters.forEach(btn=>btn.addEventListener('click',()=>{
    filters.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter=btn.dataset.filter;
    projects.forEach(project=>{
      const tags=(project.dataset.tags || '').split(' ');
      project.hidden=!(filter==='all' || tags.includes(filter));
    });
    updateProjectGroups();
  }));

  const aboutPlanes=document.querySelectorAll('.about-plane');
  const resetAboutPlanes=()=>{
    aboutPlanes.forEach(plane=>{
      plane.hidden=false;
      plane.classList.remove('is-flying-away');
      plane.style.animation='none';
      plane.offsetHeight;
      plane.style.animation='';
    });
  };

  aboutPlanes.forEach(plane=>{
    plane.addEventListener('click',()=>{
      if(motionAllowed){
        plane.classList.add('is-flying-away');
      } else {
        plane.hidden=true;
      }
    });
  });

  window.addEventListener('pageshow',event=>{
    if(event.persisted && aboutPlanes.length) resetAboutPlanes();
  });

  const playbookGallery=document.querySelector('.playbook-gallery');
  const playbookGrid=document.querySelector('.playbook-grid');
  const playbookScaler=document.querySelector('.playbook-scaler');
  const playbookLayers=document.querySelectorAll('.playbook-layer');

  if(playbookGallery && playbookGrid && playbookScaler && playbookLayers.length){
    const clamp=(value,min,max)=>Math.min(max,Math.max(min,value));
    const updatePlaybookGallery=()=>{
      const rect=playbookGallery.getBoundingClientRect();
      const distance=playbookGallery.offsetHeight - window.innerHeight;
      const rawProgress=distance > 0 ? clamp(-rect.top / distance,0,1) : 0;
      const progress=clamp(rawProgress / 0.78,0,1);
      const styles=getComputedStyle(playbookGrid);
      const gap=parseFloat(styles.columnGap) || 0;
      const columns=window.innerWidth < 760 ? 3 : 5;
      const rows=window.innerWidth < 760 ? 4 : 3;
      const cellWidth=(playbookGrid.clientWidth - gap * (columns - 1)) / columns;
      const cellHeight=(playbookGrid.clientHeight - gap * (rows - 1)) / rows;
      const widthStart=Math.min(window.innerWidth - 32,1160);
      const heightStart=Math.min(window.innerHeight * 0.82,720);
      const widthEnd=cellWidth;
      const heightEnd=cellHeight;
      const eased=1 - Math.pow(1 - progress,3);

      playbookScaler.style.setProperty('--scaler-width',`${widthStart + (widthEnd - widthStart) * eased}px`);
      playbookScaler.style.setProperty('--scaler-height',`${heightStart + (heightEnd - heightStart) * eased}px`);

      playbookLayers.forEach((layer,index)=>{
        const layerProgress=clamp((progress - index * 0.045) / 0.34,0,1);
        layer.style.setProperty('--layer-opacity',String(layerProgress));
        layer.style.setProperty('--layer-scale',String(0.45 + layerProgress * 0.55));
      });
    };

    updatePlaybookGallery();
    if(motionAllowed){
      window.addEventListener('scroll',updatePlaybookGallery,{passive:true});
      window.addEventListener('resize',updatePlaybookGallery);
    }
  }

  const io=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  },{threshold:0.08});

  updateProjectGroups();
  document.querySelectorAll('.project, .portfolio-skill').forEach(el=>{
    el.classList.add('fade-in');
    io.observe(el);
  });
});
