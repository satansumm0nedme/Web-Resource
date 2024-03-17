window.onscroll = function() {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

gsap.registerPlugin(ScrollTrigger);

gsap.from(".carrie", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".carrie",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".salem", {
  y: 100,
  opacity: 0,
  duration: 2,
  delay: 0.5, 
  scrollTrigger: {
    trigger: ".salem",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".shining", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".shining",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".rage", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".rage",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".stand", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".stand",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".walk", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".walk",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".dead", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".dead",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".firestarter", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".firestarter",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".roadwork", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".roadwork",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".cujo", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".cujo",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".running", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".running",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".tower", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".tower",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".christine", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".christine",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".pet", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".pet",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".werewolf", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".werewolf",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".talisman", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".talisman",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".dragon", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".dragon",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".thinner", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".thinner",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".it", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".it",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".tower2", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".tower2",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".misery", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".misery",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});

gsap.from(".tommyknockers", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".tommyknockers",
    start: "top bottom",
    end: "bottom center",
  },
  stagger: 0.3
});