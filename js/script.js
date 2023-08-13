document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 


  let myCarousel = document.querySelectorAll('#featureContainer .carousel .carousel-item');
myCarousel.forEach((el) => {
  const minPerSlide = 1
  let next = el.nextElementSibling;
  
  for (var i=1; i<minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = myCarousel[0]
    }
    let cloneChild = next.cloneNode(true);
    
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})

// let mytestimonialCarousel = document.querySelectorAll('#testimonialContainer .carousel .carousel-item');

// mytestimonialCarousel.forEach((el) => {
//   const minPerSlide = 4
//   let next = el.nextElementSibling
//   for (var i=1; i<minPerSlide; i++) {
//       if (!next) {
//           // wrap carousel by using first child
//         next = items[0]
//       }
//       let cloneChild = next.cloneNode(true)
//       el.appendChild(cloneChild.children[0])
//       next = next.nextElementSibling
//   }
// })

document.addEventListener("DOMContentLoaded", function(){
  // make it as accordion for smaller screens
  if (window.innerWidth < 992) {
  
    // close all inner dropdowns when parent is closed
    document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
      everydropdown.addEventListener('hidden.bs.dropdown', function () {
        // after dropdown is hidden, then find all submenus
          this.querySelectorAll('.submenu').forEach(function(everysubmenu){
            // hide every submenu as well
            everysubmenu.style.display = 'none';
          });
      })
    });
  
    document.querySelectorAll('.dropdown-menu a').forEach(function(element){
      element.addEventListener('click', function (e) {
          let nextEl = this.nextElementSibling;
          if(nextEl && nextEl.classList.contains('submenu')) {	
            // prevent opening link if link needs to open dropdown
            e.preventDefault();
            if(nextEl.style.display == 'block'){
              nextEl.style.display = 'none';
            } else {
              nextEl.style.display = 'block';
            }
  
          }
      });
    })
  }
  // end if innerWidth
  }); 
  // DOMContentLoaded  end






  let items = document.querySelectorAll('#tryoutContainer .carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let project = document.querySelectorAll('#projectContainer .carousel .carousel-item')

project.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
