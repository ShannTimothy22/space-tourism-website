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


  // ${item.images.png}


  displayPlanet = displayPlanet.join("");
  //console.log(displayPlanet);  
  
  // document.getElementById("planet-img").src = planetImage;
  
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
  
  // planetFilter.forEach(function(btn){
  //   btn.addEventListener("click", function(e){
  //     test++;    
  //     console.log(planetFilter);
  //   });
  // })
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



// fetch('./data.json').then(response => {
//     console.log(response);
//     return response.json();
//   }).then(data => {
//     // Work with JSON data here
//     console.log(data);
//   }).catch(err => {
//     // Do something for an error here
//     console.log("Error Reading data " + err);
//   });

// const planetName = document.getElementById("planet-name");
// const container = document.getElementById("container");
// const planet = container.querySelectorAll(".planet");
// const moon = document.getElementById("Moon");
// const mars = document.getElementById("Mars");

// for(var i = 0; i < planet.length; i++)
// {
//     planet[i].addEventListener("click", () => {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";        
//     })
// }