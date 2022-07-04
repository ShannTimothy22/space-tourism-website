//home

const nav = document.querySelector(".primary-navigation");
const navtoggle = document.querySelector(".mobile-nav-toggle");

navtoggle.addEventListener("click", ()=>{
    const visibility = nav.getAttribute("data-visible");
    if(visibility === "false"){
        navtoggle.setAttribute("aria-expanded", true);
        nav.setAttribute("data-visible", true);        
    }else{        
        nav.setAttribute("data-visible", false);
        navtoggle.setAttribute("aria-expanded", false);   
    }    
})

//destination

const destination = [
  {
    "name": "Moon",
    "images": {
      "png": "./assets/destination/image-moon.png",
      "webp": "./assets/destination/image-moon.webp"
    },
    "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    "distance": "384,400 km",
    "travel": "3 days"
  },
  {
    "name": "Mars",
    "images": {
      "png": "./assets/destination/image-mars.png",
      "webp": "./assets/destination/image-mars.webp"
    },
    "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    "distance": "225 mil. km",
    "travel": "9 months"
  },
  {
    "name": "Europa",
    "images": {
      "png": "./assets/destination/image-europa.png",
      "webp": "./assets/destination/image-europa.webp"
    },
    "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    "distance": "628 mil. km",
    "travel": "3 years"
  },
  {
    "name": "Titan",
    "images": {
      "png": "./assets/destination/image-titan.png",
      "webp": "./assets/destination/image-titan.webp"
    },
    "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    "distance": "1.6 bil. km",
    "travel": "7 years"
  }
]

const destinationInfo = document.querySelector(".destination-info");
const planetList = document.querySelector(".planet-list");

window.addEventListener("DOMContentLoaded", function () {
  displayPlanetInfo(destination);
  displayPlanetName();  
});

let flag = 0;    
let test = 0;

function displayPlanetInfo(destinationItems){

    let displayPlanet = destinationItems.map(function(item){
      //console.log(item);
      return `<article id="destination-info" class="destination-info flow">
      <h2 id="planet-name" class="ff-serif fs-800 uppercase">${item.name}</h2>
  
      <p id="planet-desc">${item.description}</p>                  
      
      <div class="flex destination-meta">
        <div>
          <h3 class="text-accent fs-200 uppercase">Avg.Distance</h3>
          <p id="planet-distance" class="ff-serif uppercase">${item.distance}</p>
        </div>
        <div>
          <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
          <p id="planet-travel" class="ff-serif uppercase">${item.travel}</p>
        </div>
      </div>    
    </article>`
    })

  displayPlanet = displayPlanet.join("");
  
  if(flag === 0){
    destinationInfo.innerHTML = ` <h2 id="planet-name" class="ff-serif fs-800 uppercase">Moon</h2>

    <p id="planet-desc">See our planet as you’ve never seen it before. A perfect relaxing trip away to help
    regain perspective and come back refreshed. While you’re there, take in some history
    by visiting the Luna 2 and Apollo 11 landing sites.</p>                  
    
    <div class="flex destination-meta">
      <div>
        <h3 class="text-accent fs-200 uppercase">Avg.Distance</h3>
        <p id="planet-distance" class="ff-serif uppercase">384,400 km</p>
      </div>
      <div>
        <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
        <p id="planet-travel" class="ff-serif uppercase">3 days</p>
      </div>
    </div>   `

  }else{
    destinationInfo.innerHTML = displayPlanet;
  }
  
}


function displayPlanetName(){
  const planetName = destination.reduce(
    function (values, item){
      if(!values.includes(item.name)){
        values.push(item.name);
      }
      return values;
    },
    []
  );
  const planetBtns = planetName
    .map(function(name){
      return `<button data-id="${name}" aria-selected="false" class="text-accent uppercase letter-spacing-2 planet">${name}</button>`
    })
    .join("");
      
      planetList.innerHTML = planetBtns;
    
      const planetFilter = planetList.querySelectorAll(".planet");      
    // console.log(planetFilter);

    planetFilter.forEach(function(btn){
      btn.addEventListener("click", function(e){
        flag++;        
        //console.log(e.currentTarget.dataset);        
        const name = e.currentTarget.dataset.id;
        const activeStates = e.currentTarget.getAttribute("aria-selected");     
        //console.log(planetFilter.length);
        planetFilter.forEach(f => f.classList.remove("active"));
        e.target.classList.toggle("active");
        const planetName = destination.filter(function(planetItem){
          //console.log(planetItem.name);
          if(planetItem.name === name){
            return planetItem;                    
          }
        })  
        const planetImage = destination.filter(function(planetItem){
          if(planetItem.name === name){
            document.getElementById("planet-img").src = planetItem.images.png;
            console.log(document.getElementById("planet-img").src);
          }
        })      
          displayPlanetInfo(planetName);                                  
      });            
    })
}

// Crew

const crew =  [
  {
    "name": "Douglas Hurley",
    "id": "1",
    "images": {
      "png": "./assets/crew/image-douglas-hurley.png",
      "webp": "./assets/crew/image-douglas-hurley.webp"
    },
    "role": "Commander",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    "name": "Mark Shuttleworth",
    "id": "2",
    "images": {
      "png": "./assets/crew/image-mark-shuttleworth.png",
      "webp": "./assets/crew/image-mark-shuttleworth.webp"
    },
    "role": "Mission Specialist",
    "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    "name": "Victor Glover",
    "id": "3",
    "images": {
      "png": "./assets/crew/image-victor-glover.png",
      "webp": "./assets/crew/image-victor-glover.webp"
    },
    "role": "Pilot",
    "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    "name": "Anousheh Ansari",
    "id": "4",
    "images": {
      "png": "./assets/crew/image-anousheh-ansari.png",
      "webp": "./assets/crew/image-anousheh-ansari.webp"
    },
    "role": "Flight Engineer",
    "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
]

const crewInfo = document.querySelector(".crew-info");
const crewList = document.querySelector(".crew-list");

window.addEventListener("DOMContentLoaded", function () {
  displayCrewInfo(crew);
  displayCrewName();  
});

let flag2 = 0;

function displayCrewInfo(crewItems){

    let displayCrew = crewItems.map(function(item){
      //console.log(item);
      return `<header class="flow flow--space--small">
      <h2 class="ff-serif fs-600 uppercase">${item.role}</h2>
      <p class="ff-serif fs-700 text-white">${item.name}</p>
    </header>
    <p>${item.bio}</p>`
    })

    

  displayCrew = displayCrew.join("");
  
  if(flag2 === 0){
    crewInfo.innerHTML = ` <header class="flow flow--space--small">
    <h2 class="ff-serif fs-600 uppercase">Commander</h2>
    <p class="ff-serif fs-700 text-white">Douglas Hurley</p>
  </header>
  <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
      and former NASA astronaut. He launched into space for the third time as
      commander of Crew Dragon Demo-2.</p> `

  }else{
    crewInfo.innerHTML = displayCrew;
  }
  
}


function displayCrewName(){
  const crewName = crew.reduce(
    function (values, item){
      if(!values.includes(item.id)){
        values.push(item.id);
      }
      return values;
    },
    []
  );
  const crewBtns = crewName
    .map(function(id){
      return `<button data-id="${id}" class="crew" aria-selected="false"><span class="sr-only">slide</span></button>`
    })
    .join("");
      
      crewList.innerHTML = crewBtns;
    
      const crewFilter = crewList.querySelectorAll(".crew");      
      //console.log(crewFilter);

    crewFilter.forEach(function(btn){
      btn.addEventListener("click", function(e){
        flag2++;        
        //console.log(e.currentTarget.dataset.id);        
        const id = e.currentTarget.dataset.id;
        const activeStates = e.currentTarget.getAttribute("aria-selected");             
        crewFilter.forEach(f => f.classList.remove("active"));
        e.target.classList.toggle("active");
        const crewName = crew.filter(function(crewItem){
          //console.log(crewItem.id);
          if(crewItem.id === id){
            return crewItem;                   
          }
        })  
        const crewImage = crew.filter(function(crewItem){
          if(crewItem.id === id){
            document.getElementById("crew-pic").src = crewItem.images.png; 
            //console.log(document.getElementById("crew-pic").src);           
          }
        })      
          displayCrewInfo(crewName);                                  
      });            
    })
}

//technology

const technology =[
  {
    "name": "Launch vehicle",
    "id": "1",
    "images": {
      "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
      "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
    },
    "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  },
  {
    "name": "Spaceport",
    "id": "2",
    "images": {
      "portrait": "./assets/technology/image-spaceport-portrait.jpg",
      "landscape": "./assets/technology/image-spaceport-landscape.jpg"
    },
    "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  },
  {
    "name": "Space capsule",
    "id": "3",
    "images": {
      "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
      "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
    },
    "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
]

const technologyInfo = document.querySelector(".technology-info");
const technologyList = document.querySelector(".technology-list");

window.addEventListener("DOMContentLoaded", function () {
  displayTechnologyInfo(technology);
  displayTechnologyName();  
});

let flag3 = 0;

function displayTechnologyInfo(technologyItems){

    let displayTechnology = technologyItems.map(function(item){
      //console.log(item);
      return `<header class="flow flow--space--small">
    <h2 class="ff-serif fs-600 uppercase text-accent">The terminology...</h2>
    <p class="ff-serif fs-700 text-white uppercase">${item.name}</p>
    </header>
    <p>${item.description}</p>
    </div>`
    })

    

  displayTechnology = displayTechnology.join("");
  
  if(flag3 === 0){
    technologyInfo.innerHTML = `    <header class="flow flow--space--small">
    <h2 class="ff-serif fs-600 uppercase text-accent">The terminology...</h2>
    <p class="ff-serif fs-700 text-white uppercase">Launch vehicle</p>
  </header>
  <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
      payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
      WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
      it's quite an awe-inspiring sight on the launch pad!</p>
</div>         `

  }else{
    technologyInfo.innerHTML = displayTechnology;
  }
  
}


function displayTechnologyName(){
  const technologyName = technology.reduce(
    function (values, item){
      if(!values.includes(item.id)){
        values.push(item.id);
      }
      return values;
    },
    []
  );
  const technologyBtns = technologyName
    .map(function(id){
      return `<button data-id="${id}" class="technology" aria-selected="true">${id}</button>`
    })
    .join("");
      
      technologyList.innerHTML = technologyBtns;
    
      const technologyFilter = technologyList.querySelectorAll(".technology");      
      //console.log(crewFilter);

    technologyFilter.forEach(function(btn){
      btn.addEventListener("click", function(e){
        flag3++;        
        //console.log(e.currentTarget.dataset.id);        
        const id = e.currentTarget.dataset.id;        
        technologyFilter.forEach(f => f.classList.remove("active"));
        e.target.classList.toggle("active");
        const technologyName = technology.filter(function(technologyItem){
          //console.log(crewItem.id);
          if(technologyItem.id === id){
            return technologyItem;                   
          }
        })  
        const technologyImage = technology.filter(function(technologyItem){
          if(technologyItem.id === id){
            document.getElementById("technology-pic-1").src = technologyItem.images.landscape; 
            document.getElementById("technology-pic-2").src = technologyItem.images.portrait; 
            //console.log(document.getElementById("technology-pic-1").src);           
          }
        })      
          displayTechnologyInfo(technologyName);                                  
      });            
    })
}