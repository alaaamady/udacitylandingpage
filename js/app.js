//global variables
var sections = document.querySelectorAll('section');
const navbar = document.querySelector('#navbar__list');
//main function that dynamically adds nav links with updated sections
function buildNavbarMenu(){
//helper function that creates the nav links
  function createListItem(x){
    let li = document.createElement('li');
    let anchor = document.createElement('a');
    anchor.href = '#' + sections[x].id;
    li.appendChild(anchor);
    anchor.textContent = sections[x].dataset.nav;
    return li;
  }
  for(let i = 0;i<sections.length;i++){
    navbar.appendChild(createListItem(i));
  }
}
buildNavbarMenu();

//scrolling function
function scrollToSection(e){
  event.preventDefault();
  e = event;
  let destination =e.path[0].hash;
  let destinationElement = document.querySelector(`${destination}`);
  destinationElement.scrollIntoView({behavior: "smooth", block: "center"});

}

var navLinks = document.getElementsByTagName('li');
for(let j = 0; j<navLinks.length;j++){
  navLinks[j].addEventListener('click',scrollToSection);
}
