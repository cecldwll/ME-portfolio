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
        'This roof rack mounting system was designed to fit on a 2000 Jeep Cherokee in order to easily attach various tools and off-roading gear to the roof. I wanted it to be simple yet effective, so I made it modular, allowing the user to switch out the top piece depending on the tool they were going to mount. There is a middle and bottom piece that wrap around the roof rack crossbars, as well as an interchangeable top piece depending on the gear that needs to be mounted. The stack is secured with a bolt on either side and a Nylock nut to prevent it from coming apart due to vibration while driving.',
        'In order to make it fit the roof rack properly, I first modeled the crossbar in Fusion 360 and then modeled the bracket pieces around it. With limited resources, I needed to go through some trial and error to get the proper fit, printing prototypes and adjusting them bit by bit to achieve the correct profile. I 3D printed the final pieces out of ABS and lined the inner surface with neoprene to protect the crossbar and compensate for any imperfections in the profile. To attach the shovel to the bracket, I used adjustable hose clamps that fit into a slot on the mounting piece.'
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
        'The center caps were designed to fit the wheels of family cars and protect the wheel hubs from unnecessary dirt and moisture. The tolerances were critical because the design needed to be thin enough not to disrupt the fit of the wheel. A certain amount of compression in the plastic also needed to be taken into consideration. Before use, the mating edge must be compressed past the point of plastic deformation to ensure it does not change thickness while in service. Without this step, the plastic could compress and become thinner, leaving the lug nuts below the correct torque and creating a serious safety risk.',
        'The wheels were measured for size and fit, then prototypes were designed in Fusion 360 and 3D printed to test the proper balance between tolerance and durability. The caps needed to fit correctly while remaining durable enough not to fall apart when the tires were changed or rotated.'
      ],
      requirements:['Match the wheel hub opening and visible wheel style.','Stay secure during normal driving conditions.','Print cleanly with enough durability for daily use.'],
      skills:['Fusion 360','3D Printing','CAD','Calipers','Tolerance Design']
    },
    'misc-car-parts':{
      title:'Misc. Car Parts',
      category:'Plastics',
      subtitle:'Small printed supports, clips, and battery terminal covers for hard-to-replace car parts.',
      images:['images/optimized/projects/plastics/misc-car-parts-01.webp','images/optimized/projects/plastics/misc-car-parts-02.webp'],
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
        'The planetary gear project was a school assignment meant to teach students how gears are designed and how different sizes affect rotational speed and direction. We were tasked with designing a set of gears and a case using the provided materials and a self-made list of hardware.',
        'The design work was completed in SolidWorks, along with the programming for the CNC mill used to cut the gears from a thick sheet of ABS. The case was laser cut from acrylic and assembled with acetone.'
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
        'Most winch plates for off-roading are built into the bumper, but we needed one that could be removed and transferred from vehicle to vehicle. I designed a winch plate that mounts to a hitch receiver and used only remnant metal found around the property. It needed to be strong enough to support the winch and withstand the forces produced while pulling a vehicle out of a difficult situation.',
        'I used an oxy-acetylene torch and a plasma cutter to cut the parts, then stick welded the assembly together. A drill press was used to make the holes that mount the face plate to the front.'
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
        'This C-clamp was fully machined from scratch aside from the ball bearing used for the swivel pad. It was a school final project meant to demonstrate what we had learned about machining in class.',
        'The screw was machined on a lathe, and the steel frame was made using a bandsaw and a mill. We were required to demonstrate our ability to cut working threads on the lathe and understand the different milling techniques needed to achieve the desired results.'
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
        'My family bought a tire changer from Harbor Freight so we could change our cars\' tires ourselves, but it was too weak for our large truck and off-roading tires. The base was warping because it could not handle the stress, so it needed an upgraded base and an extended arm to better fit the larger wheels and tires we use.',
        'All of the metal came from the remnants section of a local metal shop and was cut to size and shape with a plasma cutter. The welds were completed using MIG welding. The plates used to secure each wheel to the tire changer were made by laying out the lug nut pattern for the different wheels, then using a drill press and boring bar to create the holes.'
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
        'The die is an aluminum school project meant to teach us the basics of milling. We learned machine control along with several cutting tools and techniques.',
        'The stand for the die was a separate project in which we learned how to sand cast aluminum. I cast it using a 3D printed model to make the mold, then sandblasted the finished stand.'
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
        'The lathe tool was my first experience with toolmaking. It was a school project in which we were expected to make a usable tool for our lathe projects from a high-speed steel blank using a bench grinder.',
        'The tool needed sharp cutting edges as well as appropriate relief and rake angles. The goal was to use it on future projects in our machining class.'
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
        'The Chicken Coop project was a wood build for a small group of backyard chickens. The coop received a basic model in Fusion 360 to establish the general dimensions and was built using reclaimed wood and spare hardware. The biggest challenge was designing the structure around dimensions that would use only the available material with minimal waste. The only materials purchased for the project were wood glue and chicken wire. Joinery techniques used in the build included lap joints and biscuit joints.',
        'The chickens needed a strong, safe structure to enter at night for protection from a wide range of predators. They also needed a small outdoor area where they could eat and scratch while remaining protected.'
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
