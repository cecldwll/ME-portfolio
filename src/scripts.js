document.addEventListener('DOMContentLoaded',()=>{
  const motionAllowed=!window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const projectDetails={
    'modular-roof-rack-system':{
      title:'Modular Roof Rack System',
      category:'Plastics',
      subtitle:'Custom 3D printed pieces designed in Fusion 360 for mounting gear to a 2000 Jeep Cherokee roof rack.',
      images:['images/optimized/projects/plastics/roof-rack-01.webp','images/optimized/projects/plastics/roof-rack-02.webp'],
      alt:'3D printed modular roof rack part',
      overview:[
        'The Modular Roof Rack System is a set of custom 3D printed components made to attach gear to the roof rack of a 2000 Jeep Cherokee. This placeholder overview will eventually describe the specific parts, how they mount, and how the printed pieces support real use on the vehicle.',
        'The objective was to create a practical, adaptable mounting solution while practicing CAD design, fit checking, and iterative fabrication. The final writeup can expand on the design process, material selection, print orientation, manufacturing choices, challenges with fit and strength, and how those decisions shaped the finished system.'
      ],
      requirements:['Fit the existing 2000 Jeep Cherokee roof rack geometry.','Support outdoor use and repeated installation or removal.','Keep the printed parts simple enough to revise and reprint.'],
      skills:['Fusion 360','3D Printing','CAD','Measurement','Prototype Testing']
    },
    'wheel-center-caps':{
      title:'Wheel Center Caps',
      category:'Plastics',
      subtitle:'3D printed center caps made to fit family cars and help protect the wheel hubs.',
      images:['images/optimized/projects/plastics/center-caps-01.webp','images/optimized/projects/plastics/center-caps-02.webp'],
      alt:'3D printed wheel center cap',
      overview:[
        'The Wheel Center Caps project focuses on printed replacement caps designed to fit the wheels on family cars and protect the wheel hubs. This placeholder overview can later include the vehicle fitment, dimensions, retention method, and the reason a custom part was useful.',
        'The objective was to solve a small real-world fit problem with a custom designed part. The final copy can describe measuring the wheel, modeling the cap, choosing a printable material, refining the snap or friction fit, solving tolerance issues, and producing a clean final part.'
      ],
      requirements:['Match the wheel hub opening and visible wheel style.','Stay secure during normal driving conditions.','Print cleanly with enough durability for daily use.'],
      skills:['Fusion 360','3D Printing','CAD','Calipers','Tolerance Design']
    },
    'misc-car-parts':{
      title:'Misc. Car Parts',
      category:'Plastics',
      subtitle:'Small printed supports, clips, and battery terminal covers for hard-to-replace car parts.',
      images:['images/optimized/projects/plastics/misc-car-parts-01.webp'],
      alt:'Small 3D printed automotive replacement parts',
      overview:[
        'Misc. Car Parts is a collection of small printed supports, clips, covers, and replacement pieces made for parts that are difficult to find or replace. This placeholder overview will eventually identify each part and explain the problem it solved on the car.',
        'The objective was to use quick digital fabrication for practical maintenance problems. The finished page can cover how each part was measured, modeled, printed, tested, and adjusted, along with any challenges around heat, clearance, brittleness, or matching original part geometry.'
      ],
      requirements:['Replace or support parts that are hard to source.','Fit existing vehicle geometry without interfering with nearby components.','Use printable forms that can be adjusted quickly after test fitting.'],
      skills:['Fusion 360','3D Printing','CAD','Automotive Repair','Problem Solving']
    },
    'planetary-gears':{
      title:'Planetary Gears',
      category:'Plastics',
      subtitle:'School project with CNC machined gears and a laser cut acrylic case.',
      images:['images/optimized/projects/plastics/planetary-gears-01.webp'],
      alt:'Planetary gear assembly in an acrylic case',
      overview:[
        'The Planetary Gears project is a school build involving designed gears, CNC machining, and a laser cut acrylic case. This placeholder overview can later explain the gear arrangement, how the mechanism works, and what requirements were assigned for the project.',
        'The objective was to combine mechanical design with manufacturing processes and a finished enclosure. The final writeup can describe gear design, CAD preparation, CNC setup, laser cutting, assembly challenges, tolerance fixes, and the final working outcome.'
      ],
      requirements:['Create a functioning planetary gear mechanism.','Machine gears accurately enough to mesh smoothly.','Build a clear case that supports and displays the assembly.'],
      skills:['CAD','CNC Milling','Laser Cutting','Mechanical Design','Assembly']
    },
    'removable-winch-plate':{
      title:'Removable Winch Plate',
      category:'Metal',
      subtitle:'Designed, cut, and welded hitch receiver mount for carrying a winch during off-road self recovery.',
      images:['images/optimized/projects/metal/winch-plate-01.webp','images/optimized/projects/metal/winch-plate-02.webp','images/optimized/projects/metal/winch-plate-03.webp'],
      alt:'Welded removable winch plate mount',
      overview:[
        'The Removable Winch Plate is a hitch receiver mount designed to carry a winch for off-road self recovery. This placeholder overview will eventually explain the vehicle use case, the major metal components, and how the mount connects to the receiver.',
        'The objective was to create a strong removable solution that could be fabricated with shop tools. The final page can cover layout, cutting, welding, material choice, load path thinking, alignment challenges, fit-up problems, and how the final welded assembly performed.'
      ],
      requirements:['Fit a standard hitch receiver securely.','Carry winch loads with a conservative welded structure.','Remain removable for storage and flexible vehicle use.'],
      skills:['Welding','Metal Fabrication','Cutting','Fit-Up','Mechanical Design']
    },
    'c-clamp':{
      title:'C-Clamp',
      category:'Metal',
      subtitle:'School project using lathe-made screw and pad components with a bandsaw and mill-shaped frame.',
      images:['images/optimized/projects/metal/c-clamp-01.webp'],
      alt:'Machined metal C-clamp',
      overview:[
        'The C-Clamp is a school machining project assembled from a lathe-made screw and pad with a frame shaped using a bandsaw and mill. This placeholder overview can later document dimensions, assigned requirements, and how each part of the clamp was made.',
        'The objective was to practice core machining processes while producing a functional clamping tool. The final copy can describe turning operations, milling the frame, controlling thread and pad fit, deburring, assembly challenges, and the finished clamp.'
      ],
      requirements:['Produce a functional clamp with smooth screw motion.','Machine the frame, screw, and pad to the assigned dimensions.','Use clean edges, flat surfaces, and reliable part alignment.'],
      skills:['Lathe','Milling','Bandsaw','Machining','Assembly']
    },
    'tire-changer-upgrades':{
      title:'Tire Changer Upgrades',
      category:'Metal',
      subtitle:'Reinforced and improved a Harbor Freight tire changer for more practical use.',
      images:['images/optimized/projects/metal/tire-changer-01.webp','images/optimized/projects/metal/tire-changer-02.webp','images/optimized/projects/metal/tire-changer-03.webp','images/optimized/projects/metal/tire-changer-04.webp','images/optimized/projects/metal/tire-changer-05.webp','images/optimized/projects/metal/tire-changer-06.webp'],
      alt:'Modified tire changer parts',
      overview:[
        'The Tire Changer Upgrades project improves and reinforces a Harbor Freight tire changer so it is more practical to use. This placeholder overview can later explain what parts were weak, what was changed, and how the upgrades improved the tool.',
        'The objective was to turn a basic shop tool into something sturdier and easier to work with. The final page can cover diagnosing the problem, planning reinforcements, cutting and welding parts, solving clearance or stability issues, and testing the upgraded changer.'
      ],
      requirements:['Increase rigidity and usability of the original tire changer.','Keep modifications compatible with the existing tool.','Use accessible shop materials and fabrication methods.'],
      skills:['Welding','Metal Fabrication','Tool Modification','Problem Solving','Shop Testing']
    },
    'metal-die-and-stand':{
      title:'Metal Die and Stand',
      category:'Metal',
      subtitle:'Aluminum die milled into shape with a sand cast display stand.',
      images:['images/optimized/projects/metal/metal-die-01.webp'],
      alt:'Milled aluminum die with a cast stand',
      overview:[
        'The Metal Die and Stand project includes an aluminum block milled into the shape of a die and a sand cast display stand. This placeholder overview can later explain the assignment, the machining setup, and the casting process used for the stand.',
        'The objective was to practice shaping metal with different manufacturing methods in one finished object. The final copy can describe milling the die faces, preparing the casting, cleaning up the stand, handling surface finish challenges, and completing the display piece.'
      ],
      requirements:['Machine the aluminum die with clear, consistent faces.','Create a cast stand that supports the finished piece.','Finish both components cleanly enough for display.'],
      skills:['Milling','Sand Casting','Metal Finishing','Layout','Manufacturing']
    },
    'lathe-tool':{
      title:'Lathe Tool',
      category:'Metal',
      subtitle:'Tool steel blank shaped with a grinding wheel into a functional lathe tool.',
      images:['images/optimized/projects/metal/lathe-tool-01.webp'],
      alt:'Ground tool steel lathe tool',
      overview:[
        'The Lathe Tool project uses a grinding wheel to shape a small blank of tool steel into a functional lathe cutting tool. This placeholder overview can later describe the required tool geometry, angles, and how the tool was intended to cut.',
        'The objective was to learn how tool shape affects machining performance. The final page can cover grinding setup, maintaining angles, controlling heat, sharpening challenges, test cuts, and the final usable lathe tool.'
      ],
      requirements:['Grind the tool blank to a usable cutting geometry.','Maintain clean cutting edges and appropriate relief angles.','Avoid overheating or damaging the tool steel during shaping.'],
      skills:['Grinding','Lathe Tooling','Machining','Shop Safety','Inspection']
    },
    'chicken-coop':{
      title:'Chicken Coop',
      category:'Wood',
      subtitle:'Designed and built a chicken coop from spare wood in the family yard.',
      images:['images/optimized/projects/wood/chicken-coop-01.webp','images/optimized/projects/wood/chicken-coop-02.webp','images/optimized/projects/wood/chicken-coop-03.webp','images/optimized/projects/wood/chicken-coop-04.webp','images/optimized/projects/wood/chicken-coop-05.webp','images/optimized/projects/wood/chicken-coop-06.webp','images/optimized/projects/wood/chicken-coop-07.webp','images/optimized/projects/wood/chicken-coop-08.webp','images/optimized/projects/wood/chicken-coop-09.webp','images/optimized/projects/wood/chicken-coop-10.webp','images/optimized/projects/wood/chicken-coop-11.webp'],
      alt:'Wood chicken coop build',
      overview:[
        'The Chicken Coop is a wood build designed and assembled from spare wood in the family yard. This placeholder overview can later describe the coop layout, size, nesting area, access doors, and how the structure fits the yard.',
        'The objective was to make a useful structure from available materials while solving for animal comfort, weather exposure, access, and buildability. The finished page can describe sketching the design, choosing materials, cutting and assembling the frame, solving alignment or enclosure challenges, and the final working coop.'
      ],
      requirements:['Use available spare wood efficiently.','Provide shelter, access, and enough usable space for chickens.','Build a sturdy structure that can handle outdoor conditions.'],
      skills:['Woodworking','Layout','Sawing','Assembly','Practical Design']
    }
  };

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

  const detailPage=document.querySelector('.project-detail-page');
  if(detailPage){
    const params=new URLSearchParams(window.location.search);
    const slug=params.get('project') || 'modular-roof-rack-system';
    const project=projectDetails[slug] || projectDetails['modular-roof-rack-system'];
    let activeImage=0;

    const title=document.querySelector('#project-title');
    const category=document.querySelector('#project-category');
    const subtitle=document.querySelector('#project-subtitle');
    const overview=document.querySelector('#project-overview');
    const requirements=document.querySelector('#project-requirements');
    const skills=document.querySelector('#project-skills');
    const galleryImage=document.querySelector('#project-gallery-image');
    const galleryStatus=document.querySelector('#project-gallery-status');
    const previousButton=document.querySelector('.gallery-button-prev');
    const nextButton=document.querySelector('.gallery-button-next');

    document.title=`${project.title} | Emily Caldwell`;
    title.textContent=project.title;
    category.textContent=project.category;
    subtitle.textContent=project.subtitle;

    overview.replaceChildren(...project.overview.map(copy=>{
      const paragraph=document.createElement('p');
      paragraph.textContent=copy;
      return paragraph;
    }));

    requirements.replaceChildren(...project.requirements.map(copy=>{
      const item=document.createElement('li');
      item.textContent=copy;
      return item;
    }));

    skills.replaceChildren(...project.skills.map(copy=>{
      const item=document.createElement('li');
      item.textContent=copy;
      return item;
    }));

    const renderGallery=()=>{
      galleryImage.src=project.images[activeImage];
      galleryImage.alt=`${project.alt}, photo ${activeImage + 1} of ${project.images.length}`;
      galleryStatus.textContent=`${activeImage + 1} / ${project.images.length}`;
      const hasMultipleImages=project.images.length > 1;
      previousButton.disabled=!hasMultipleImages;
      nextButton.disabled=!hasMultipleImages;
    };

    previousButton.addEventListener('click',()=>{
      activeImage=(activeImage - 1 + project.images.length) % project.images.length;
      renderGallery();
    });

    nextButton.addEventListener('click',()=>{
      activeImage=(activeImage + 1) % project.images.length;
      renderGallery();
    });

    renderGallery();
  }

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
