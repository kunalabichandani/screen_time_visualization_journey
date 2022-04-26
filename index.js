let hours = 0; 
let mins = 0;
let totalMins = 0;
let notifs = 0; 


const showFirst = () => {
    console.log("hello");
    let percentPhone = Math.round((totalMins/1440) * 100);
    pop("phone", percentPhone);
    pop("sun", 100 - percentPhone);
    document.getElementById("displayText").textContent = `You spend ~${percentPhone}% of your day on your phone.`
}

const showSecond = () => {
    console.log("hello2");
    let percentPhone = Math.round((totalMins/1440) * 100);
    let daysPerYear = Math.round(365 * percentPhone/100);
    pop("phone", daysPerYear);
    document.getElementById("displayText").textContent = `You spend ~${daysPerYear} days of the year on your phone.`
}

const showThird = () => {
    console.log("hello3");
    let notificationsMultiple = Math.round(notifs/12);
    pop("like", notificationsMultiple * 12);
    pop("human", 12);
    document.getElementById("displayText").textContent = `Compared to the average number of daily IRL interactions per person, you have ~${notificationsMultiple}x more interactions through digital notifications.`
}

const showFourth = () => {
    console.log("hello4");
    let notificationsMultiple = Math.round(notifs/12);
    let notifsPerYear = notificationsMultiple * 365;
    pop("like", notifsPerYear);
    document.getElementById("displayText").textContent = `You receive ~${notifsPerYear} digital notifications every year.`
}

const showFifth = () => {
    document.getElementById("displayText").textContent = `Let's try to be more intentional about how we use our devices.`
}

// utility function for returning a promise that resolves after a delay
function delay(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t);
    });
}

Promise.delay = function (fn, t) {
    // fn is an optional argument
    if (!t) {
        t = fn;
        fn = function () {};
    }
    return delay(t).then(fn);
}

Promise.prototype.delay = function (fn, t) {
    // return chained promise
    return this.then(function () {
        return Promise.delay(fn, t);
    });

}



const begin = () => {
   setVars();
   clearForm();
   setTimeout(function(){showFirst()}, 0);
    setTimeout(function(){showSecond()}, 15000);
    setTimeout(function(){showThird()}, 30000); 
    setTimeout(function(){showFourth()}, 45000);
    setTimeout(function(){showFifth()}, 60000);
//    Promise.delay(showFirst, 0).delay(showSecond, 10000).delay(showThird, 10000).delay(showFourth, 10000);
}

const setVars = () => {
    let temp = (document.getElementById("hoursminInput").value).split("."); 
    hours = parseInt(temp[0]);
    mins = parseInt(temp[1]);
    totalMins = (hours * 60) + mins;
    notifs = parseInt(document.getElementById("notificationsInput").value); 
}

const clearForm = () => {
    document.getElementById("hoursminInput").style.display = 'none';
    document.getElementById("notificationsInput").style.display = 'none';
    document.getElementById("supportText").style.display = 'none';
    document.getElementById("beginButton").style.display = 'none';
}

// The pop() function is called on every click
function pop(emoji, number) { 
    // Loop to generate 30 particles at once
    for (let i = 0; i < number; i++) {
      // We pass the mouse coordinates to the createParticle() function
      createParticle(emoji);
    }
  }
  function createParticle(emoji) {
    // Create a custom particle element
    const particle = document.createElement('particle');
    // Append the element into the body
    document.body.appendChild(particle);

    const size = Math.floor(75);
  // Apply the size on each particle
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.fontSize = `${size}px`;
  // Generate a random color in a blue/purple palette
//   particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;

if (emoji == 'sun') {
    particle.innerHTML = '&#127774';
} else if (emoji == 'phone') {
    particle.innerHTML = '&#128241';
} else if (emoji == 'heart') {
    particle.innerHTML = '❤';
} else if (emoji == 'like') {
    particle.innerHTML = '&#128077';
} else if (emoji == 'human') {
    particle.innerHTML = '🗣️';
}
  

  // Generate a random x & y destination within a distance of 75px from the mouse
  const destinationX = window.innerWidth / 2;
  const destinationY = 0;

  // Store the animation in a variable because we will need it later
  const animation = particle.animate([
    {
      // Set the origin position of the particle
      // We offset the particle with half its size to center it around the mouse
      transform: `translate(${(window.innerWidth / 2 - 500) + Math.random() * 1000}px, ${window.innerHeight}px)`,
      opacity: 1
    },
    {
      // We define the final coordinates as the second keyframe
      transform: `translate(${(destinationX - 500) + Math.random() * 1000}px, ${destinationY}px)`,
      opacity: 0
    }
  ], {
    // Set a random duration from 500 to 1500ms
    duration: 9000,
    // duration: 9000 + Math.random() * 1000,
    easing: 'cubic-bezier(0.17, .67, .83, .67)',
    // Delay every particle with a random value from 0ms to 200ms
    delay: Math.random() * 10000
  });

      // When the animation is finished, remove the element from the DOM
      animation.onfinish = () => {
        particle.remove();
      };
  }





function log(args) {
    var str = "";
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "object") {
            str += JSON.stringify(arguments[i]);
        } else {
            str += arguments[i];
        }
    }
    var div = document.createElement("div");
    div.innerHTML = str;
    var target = log.id ? document.getElementById(log.id) : document.body;
    target.appendChild(div);
}

function log1() {
    log("Message 1");
}

function log2() {
    log("Message 2");
}

function log3() {
    log("Message 3");
}

const first = () => {

}




// Promise.delay(showFirst, 1000).delay(log2, 700).delay(log3, 6000);
  
