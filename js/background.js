function onetoten() {
    const number = Math.floor(Math.random() * images.length);
    return number;
}

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']

const chosenImage = images[onetoten()];

const image = document.createElement('img');

image.src = `img/${chosenImage}`;

document.body.appendChild(image);