function slideshow() {
  let images = [
    "images/puppy_eyes.jpg",
    "images/snuggling.jpg",
    "images/uptown_apt.jpg",
    "images/uptown_apt2.jpg",
    "images/stretched_paws.jpg",
    "images/being_coy.jpg",
    "images/lambo_teddy.jpg",
  ];

  let slideshow = document.querySelector(".slideshow");

  let image = document.createElement("img");

  image.src = images[0];

  slideshow.appendChild(image);

  let current = 0;

  function changeImage() {
    current++;

    if (current >= images.length) {
      current = 0;
    }

    image.src = images[current];
  }

  setInterval(changeImage, 3000);
}

document.addEventListener('DOMContentLoaded', slideshow);