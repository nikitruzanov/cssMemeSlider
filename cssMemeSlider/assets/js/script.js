const data = {
    "slides": [
        {
            "image": "assets/img/one.jpg",
            "caption": "Это про моего друга"
        },
        {
            "image": "assets/img/two.jpg",
            "caption": "Типичная работа без документации"
        },
        {
            "image": "assets/img/three.jpg",
            "caption": "Мое любимое"
        },
        {
            "image": "assets/img/four.jpg",
            "caption": "Каждый раз попадаюсь на это"
        },
        {
            "image": "assets/img/five.jpg",
            "caption": "Это сюда попало случайно"
        }
    ]
};

const imagesContainer = document.querySelector('.images');
const textContainer = document.querySelector('.text');
const paginationContainer = document.querySelector('.pagination');

data.slides.forEach((slide, index) => {
    const img = document.createElement('img');
    img.src = slide.image;
    img.alt = `Meme ${index + 1}`;
    if (index === 0) img.classList.add('active');
    imagesContainer.appendChild(img);

    const caption = document.createElement('p');
    caption.classList.add('caption');
    caption.textContent = slide.caption;
    if (index === 0) caption.classList.add('active');
    textContainer.appendChild(caption);

    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    paginationContainer.appendChild(dot);

    dot.addEventListener('click', () => {
        document.querySelectorAll('.images img').forEach((img) => img.classList.remove('active'));
        document.querySelectorAll('.text p').forEach((p) => p.classList.remove('active'));
        document.querySelectorAll('.dot').forEach((d) => d.classList.remove('active'));

        img.classList.add('active');
        caption.classList.add('active');
        dot.classList.add('active');
    });
});
