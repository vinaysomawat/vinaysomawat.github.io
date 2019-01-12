/* ---- particles.js config ---- */
s =3;
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": "#32CD32"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 200,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "top",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 3,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
var scene1 = document.getElementById('scene1');
var parallax = new Parallax(scene1);
var scene2 = document.getElementById('scene2');
var parallax = new Parallax(scene2);
var scene2 = document.getElementById('scene3');
var parallax = new Parallax(scene2);
//audi vis
//
// sliderValue=8;
// pJS.particles.array.forEach(function(p) {
//     p.radius = p.radius * sliderValue; // change by a factor
//     p.radius = sliderValue; // change to a single size
// });
//
//
//
// window.onload = function () {
//      audioCtx = new AudioContext();
//      analyser = audioCtx.createAnalyser();
//      source = audioCtx.createMediaElementSource(audio);
//      source.connect(analyser);
//      analyser.connect(audioCtx.destination);
//      analyser.fftSize = 32;
//      var a=0;
//      var frequencyData = new Uint8Array(analyser.frequencyBinCount);
//
//      function renderFrame() {
//          analyser.getByteFrequencyData(frequencyData);
//          var min= frequencyData[0];
//          P10.style.height = ((frequencyData[0] * 100) / 256) + "%";
//          P20.style.height = ((frequencyData[1] * 100) / 256) + "%";
//          P30.style.height = ((frequencyData[2] * 100) / 256) + "%";
//          P40.style.height = ((frequencyData[3] * 100) / 256) + "%";
//          P50.style.height = ((frequencyData[4] * 100) / 256) + "%";
//          P60.style.height = ((frequencyData[5] * 100) / 256) + "%";
//          P70.style.height = ((frequencyData[6] * 100) / 256) + "%";
//          P80.style.height = ((frequencyData[7] * 100) / 256) + "%";
//          P90.style.height = ((frequencyData[8] * 100) / 256) + "%";
//          if(min >= a)
//           {
//             console.log("high");
//             s=10;
//
//           }
//           else{
//             console.log("low");
//          s=0;
//             }
//
//           a = min;
//          console.log(frequencyData)
//          requestAnimationFrame(renderFrame);
//      }
//      audio.pause();
//      audio.play();
//      renderFrame();
//  };
