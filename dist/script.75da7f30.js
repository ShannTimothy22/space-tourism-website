// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.js":[function(require,module,exports) {
//home
var nav = document.querySelector(".primary-navigation");
var navtoggle = document.querySelector(".mobile-nav-toggle");
navtoggle.addEventListener("click", function () {
  var visibility = nav.getAttribute("data-visible");

  if (visibility === "false") {
    navtoggle.setAttribute("aria-expanded", true);
    nav.setAttribute("data-visible", true);
  } else {
    nav.setAttribute("data-visible", false);
    navtoggle.setAttribute("aria-expanded", false);
  }
}); //destination

var destination = [{
  "name": "Moon",
  "images": {
    "png": "./assets/destination/image-moon.png",
    "webp": "./assets/destination/image-moon.webp"
  },
  "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  "distance": "384,400 km",
  "travel": "3 days"
}, {
  "name": "Mars",
  "images": {
    "png": "./assets/destination/image-mars.png",
    "webp": "./assets/destination/image-mars.webp"
  },
  "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
  "distance": "225 mil. km",
  "travel": "9 months"
}, {
  "name": "Europa",
  "images": {
    "png": "./assets/destination/image-europa.png",
    "webp": "./assets/destination/image-europa.webp"
  },
  "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
  "distance": "628 mil. km",
  "travel": "3 years"
}, {
  "name": "Titan",
  "images": {
    "png": "./assets/destination/image-titan.png",
    "webp": "./assets/destination/image-titan.webp"
  },
  "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
  "distance": "1.6 bil. km",
  "travel": "7 years"
}];
var destinationInfo = document.querySelector(".destination-info");
var planetList = document.querySelector(".planet-list");
window.addEventListener("DOMContentLoaded", function () {
  displayPlanetInfo(destination);
  displayPlanetName();
});
var flag = 0;
var test = 0;

function displayPlanetInfo(destinationItems) {
  var displayPlanet = destinationItems.map(function (item) {
    //console.log(item);
    return "<article id=\"destination-info\" class=\"destination-info flow\">\n      <h2 id=\"planet-name\" class=\"ff-serif fs-800 uppercase\">".concat(item.name, "</h2>\n  \n      <p id=\"planet-desc\">").concat(item.description, "</p>                  \n      \n      <div class=\"flex destination-meta\">\n        <div>\n          <h3 class=\"text-accent fs-200 uppercase\">Avg.Distance</h3>\n          <p id=\"planet-distance\" class=\"ff-serif uppercase\">").concat(item.distance, "</p>\n        </div>\n        <div>\n          <h3 class=\"text-accent fs-200 uppercase\">Est. travel time</h3>\n          <p id=\"planet-travel\" class=\"ff-serif uppercase\">").concat(item.travel, "</p>\n        </div>\n      </div>    \n    </article>");
  }); // ${item.images.png}

  displayPlanet = displayPlanet.join(""); //console.log(displayPlanet);  
  // document.getElementById("planet-img").src = planetImage;

  if (flag === 0) {
    destinationInfo.innerHTML = " <h2 id=\"planet-name\" class=\"ff-serif fs-800 uppercase\">Moon</h2>\n\n    <p id=\"planet-desc\">See our planet as you\u2019ve never seen it before. A perfect relaxing trip away to help\n    regain perspective and come back refreshed. While you\u2019re there, take in some history\n    by visiting the Luna 2 and Apollo 11 landing sites.</p>                  \n    \n    <div class=\"flex destination-meta\">\n      <div>\n        <h3 class=\"text-accent fs-200 uppercase\">Avg.Distance</h3>\n        <p id=\"planet-distance\" class=\"ff-serif uppercase\">384,400 km</p>\n      </div>\n      <div>\n        <h3 class=\"text-accent fs-200 uppercase\">Est. travel time</h3>\n        <p id=\"planet-travel\" class=\"ff-serif uppercase\">3 days</p>\n      </div>\n    </div>   ";
  } else {
    destinationInfo.innerHTML = displayPlanet;
  }
}

function displayPlanetName() {
  var planetName = destination.reduce(function (values, item) {
    if (!values.includes(item.name)) {
      values.push(item.name);
    }

    return values;
  }, []); // planetFilter.forEach(function(btn){
  //   btn.addEventListener("click", function(e){
  //     test++;    
  //     console.log(planetFilter);
  //   });
  // })

  var planetBtns = planetName.map(function (name) {
    return "<button data-id=\"".concat(name, "\" aria-selected=\"false\" class=\"text-accent uppercase letter-spacing-2 planet\">").concat(name, "</button>");
  }).join("");
  planetList.innerHTML = planetBtns;
  var planetFilter = planetList.querySelectorAll(".planet"); // console.log(planetFilter);

  planetFilter.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      flag++; //console.log(e.currentTarget.dataset);        

      var name = e.currentTarget.dataset.id;
      var activeStates = e.currentTarget.getAttribute("aria-selected"); //console.log(planetFilter.length);

      planetFilter.forEach(function (f) {
        return f.classList.remove("active");
      });
      e.target.classList.toggle("active");
      var planetName = destination.filter(function (planetItem) {
        //console.log(planetItem.name);
        if (planetItem.name === name) {
          return planetItem;
        }
      });
      var planetImage = destination.filter(function (planetItem) {
        if (planetItem.name === name) {
          document.getElementById("planet-img").src = planetItem.images.png;
          console.log(document.getElementById("planet-img").src);
        }
      });
      displayPlanetInfo(planetName);
    });
  });
} // fetch('./data.json').then(response => {
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
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57461" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map