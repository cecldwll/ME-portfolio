document.addEventListener('DOMContentLoaded',()=>{
  // smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({behavior:'smooth',block:'start'});
      }
    })
  })

  // project filters
  const filters=document.querySelectorAll('.filter');
  const projects=document.querySelectorAll('.project');
  filters.forEach(btn=>btn.addEventListener('click',()=>{
    filters.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    projects.forEach(p=>{
      const tags=p.dataset.tags.split(' ');
      p.style.display=(f==='all' || tags.includes(f))? 'block':'none';
    })
  }))

  // hero title animation
  const heroTitle=document.querySelector('.hero-title');
  if(heroTitle){
    const words=heroTitle.textContent.trim().split(' ');
    heroTitle.innerHTML=words.map((word,index)=>`<span class="hero-word" style="--delay:${index*0.08}s">${word}</span>`).join(' ');
    setTimeout(()=>heroTitle.classList.add('animate'),100);
  }

  // typed hero highlight
  const typedText=document.querySelector('.typed-text');
  if(typedText){
    const phrases=[
      '3D printed prototypes.',
      'fabricated assemblies.',
      'welded mechanical systems.',
      'real-world manufacturing solutions.'
    ];
    let phraseIndex=0;
    let charIndex=0;
    let deleting=false;

    const typeSpeed=80;
    const deleteSpeed=40;
    const delayBetween=1800;

    const typeLoop=()=>{
      const current=phrases[phraseIndex];
      if(!deleting){
        typedText.textContent=current.slice(0,charIndex+1);
        charIndex++;
        if(charIndex===current.length){
          deleting=true;
          setTimeout(typeLoop,delayBetween);
          return;
        }
      } else {
        typedText.textContent=current.slice(0,charIndex-1);
        charIndex--;
        if(charIndex===0){
          deleting=false;
          phraseIndex=(phraseIndex+1)%phrases.length;
        }
      }
      setTimeout(typeLoop, deleting ? deleteSpeed : typeSpeed);
    };
    typeLoop();
  }

  // floating hero parallax and pointer motion
  const hero=document.querySelector('.hero');
  const heroContent=document.querySelector('.hero-content');
  const heroShapes=document.querySelectorAll('.hero-shape');
  const imageFlowSection=document.querySelector('.image-flow-section');
  const imageFlowLarge=document.querySelector('.image-flow-large');
  const imageGrid=document.querySelector('.image-grid');
  const gridItems=document.querySelectorAll('.grid-item');
  const motionAllowed=!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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

  if(hero && heroContent && motionAllowed){
    window.addEventListener('scroll',()=>{
      const rect=hero.getBoundingClientRect();
      const progress=Math.min(1, Math.max(0, window.scrollY / rect.height));
      hero.style.transform=`translateY(${progress * 35}px)`;
      heroContent.style.transform=`translateY(${progress * 20}px)`;
    });

    hero.addEventListener('pointermove',(event)=>{
      const rect=hero.getBoundingClientRect();
      const x=(event.clientX - rect.left)/rect.width - 0.5;
      const y=(event.clientY - rect.top)/rect.height - 0.5;
      heroShapes.forEach((shape,index)=>{
        const speed=(index + 1) * 10;
        shape.style.transform=`translate3d(${x * speed}px, ${y * speed}px, 0)`;
      });
    });
    hero.addEventListener('pointerleave',()=>{
      heroShapes.forEach(shape=>{shape.style.transform='translate3d(0,0,0)'});
    });
  }

  if(imageFlowSection && imageFlowLarge && imageGrid && motionAllowed){
    const sectionTop = imageFlowSection.offsetTop;
    const effectHeight = window.innerHeight * 1.3;
    window.addEventListener('scroll',()=>{
      const progress=Math.min(1, Math.max(0, (window.scrollY - sectionTop + window.innerHeight * 0.35) / effectHeight));
      const scale=1 - progress * 0.66;
      const translateY=progress * 92;
      imageFlowLarge.style.transform=`translateY(${translateY}px) scale(${scale})`;
      imageGrid.style.opacity=String(Math.max(0, Math.min(1, progress * 1.9)));
      imageGrid.style.transform=`translate(-50%, ${Math.max(0, 90 - progress * 90)}px)`;
      gridItems.forEach((item, idx)=>{
        const revealAt=0.06 + idx * 0.01;
        item.classList.toggle('visible', progress > revealAt);
      });
    });
  }

  // reveal on scroll
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('visible');
    })
  },{threshold:0.08});
  document.querySelectorAll('.project, .skill, .hero-title, .lead, .hero-sub, .hero-highlight, .hero-cta, .feature-card, .visual-panel, .section-intro').forEach(el=>{
    el.classList.add('fade-in');io.observe(el);
  });
});
