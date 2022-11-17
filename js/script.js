function setSlide(img) {
    const oldImg = document.querySelector('img');
    oldImg.classList.remove('loading')
    oldImg.classList.toggle('rotate');
    oldImg.addEventListener('transitionend', () => {
        try {
            // there seems to be an error here but it still works
            // i will just put a try-catch here
            // and hope someone creates a pr and fix it for me
            document.querySelector('.wrapper').replaceChild(img, oldImg);
            oldImg.classList.toggle('rotate');
        } catch (error) {
            console.warn(error);
        }
    });
}

function onImagesLoad(arr, event) {
    var loaded = arr.length;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].complete) loaded--;
        else {
            arr[i].addEventListener('load', function () {
                loaded--;
                if (loaded == 0) {
                    event();
                }
            });
        }
        if (loaded == 0) event();
    }
}

const imgs = new Array(16);
for (let i = 0; i < imgs.length; i++) {
    const img = document.createElement('img');
    img.src = `asset/${i + 1}.jpg`;
    imgs[i] = img;
}
onImagesLoad(imgs, () => {
    let iImg = 0;
    setInterval(() => {
        setSlide(imgs[iImg]);
        iImg = (iImg + 1) % 16;
    }, 1000);
});

let heart = 0;
const heartInterval = setInterval(() => {
    const div = document.createElement('div');
    div.style.left = `${Math.floor(Math.random() * 100)}vw`;
    div.classList.add('heart');
    document.body.appendChild(div);
    heart++;
    if (heart > 50) clearInterval(heartInterval);
}, 500);
