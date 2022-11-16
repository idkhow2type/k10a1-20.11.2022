function setImage(name) {
    const img = document.querySelector('#slide');
    img.classList.toggle('rotate');
    const event = (e) => {
        img.removeEventListener('transitionend', event);
        img.style.backgroundImage = `url(asset/${name})`;
        img.classList.toggle('rotate');
    };
    img.addEventListener('transitionend', event);
}

let img = 1;
const imgInterval = setInterval(() => {
    img = (img % 16) + 1;
    setImage(`${img}.jpg`);
}, 1000);

let heart = 0;
const heartInterval = setInterval(() => {
    const div = document.createElement('div');
    div.style.left = `${Math.floor(Math.random() * 100)}vw`;
    div.classList.add('heart');
    document.body.appendChild(div);
    heart++;
    if (heart > 50) clearInterval(heartInterval);
}, 500);
