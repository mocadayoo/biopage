document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        document.title = "寂しい..."
    } else {
        document.title = "もかだお！"
    }
});

let rotation = 0;
const friction = 0.025;
let speed = 0;
const iconel = document.getElementById('icon');
iconel.addEventListener('click', () => {
    speed += 1;
})

function rotate() {
    rotation += speed;
    
    if (speed > 0) {
        speed -= friction;
    }
    
    iconel.style.transform = `rotate(${rotation}deg) scale(${1+(speed*0.05)})`;
    requestAnimationFrame(rotate);
}

rotate();