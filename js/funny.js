!function () {
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
            document.title = "寂しい...";
        } else {
            document.title = "もかだお！";
        }
    });

    let pedrobuttonshown = false;
    let rotation = 0;
    const friction = 0.025;
    let speed = 0;
    let minspeed = 0; // pedroがオンのときは8(曲とちょうどいい)
    const pedroButtonel = document.getElementById("pedro_all");
    const pedroButton = document.getElementById("switch_pedro");
    const pedroaudio = document.getElementById("pedro_audio");
    const iconel = document.getElementById("icon");
    iconel.addEventListener("click", () => {
        speed += 1;
    });

    async function watchPedro() {
        let istoggled = false;
        pedroButton.addEventListener("click", () => {
            if (!istoggled) {
                istoggled = true;
                minspeed = 8;
                pedroaudio.volume = 0.2;
                pedroaudio.play();
            } else {
                istoggled = false;
                minspeed = 0;
                pedroaudio.pause();
                pedroaudio.currentTime = 0;
            }
        });
    }
    const currentMonth = new Date().getMonth();
    if (currentMonth == 12 - 1) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 150,
                    "density": { "enable": true, "value_area": 800 },
                },
                "color": { "value": ["#eaeff3", "#99ccff", "#cccccc"] },
                "shape": { "type": "circle" },
                "opacity": {
                    "value": 0.8,
                    "random": true,
                    "anim": { "enable": false },
                },
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": { "enable": false },
                },
                "line_linked": { "enable": false },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                },
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": false } },
            },
            "retina_detect": true,
        });
    }

    function rotate() {
        rotation += speed;

        if (speed > minspeed) {
            speed -= friction;
        }

        if (!pedrobuttonshown && speed > 10) {
            pedrobuttonshown = true;
            pedroButtonel.style.display = "block";
            watchPedro();
        }

        rotation %= 360;

        iconel.style.transform = `rotate(${rotation}deg) scale(${
            1 + ((isFinite(speed) ? speed : 1e15) * 0.05)
        })`;
        requestAnimationFrame(rotate);
    }

    rotate();
}();
