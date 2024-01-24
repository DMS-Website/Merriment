document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.navbar'); // Corrected class name

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const carousel = document.querySelector(".carousel");
    const backgroundContainer = document.querySelector(".background-container");

    carousel.addEventListener("click", function (event) {
        // Check if the clicked element is an image
        if (event.target.tagName === "IMG") {
            const clickedImageUrl = event.target.src;
            backgroundContainer.style.backgroundImage = `url(${clickedImageUrl})`;
        }
    });
});

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

/*new carousel*/
document.addEventListener('DOMContentLoaded', function () {
    const carousel2 = document.querySelector(".carousel-2");
    const arrowIcons = document.querySelectorAll(".arrow-icon");

    let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

    const showHideIcons = () => {
        let scrollWidth = carousel2.scrollWidth - carousel2.clientWidth;
        arrowIcons[0].style.display = carousel2.scrollLeft == 0 ? "none" : "block";
        arrowIcons[1].style.display = carousel2.scrollLeft == scrollWidth ? "none" : "block";
    }

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            let firstImgWidth = carousel2.querySelector("img").clientWidth + 14;
            carousel2.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(() => showHideIcons(), 60);
        });
    });

    const autoSlide = () => {
        if (carousel2.scrollLeft - (carousel2.scrollWidth - carousel2.clientWidth) > -1 || carousel2.scrollLeft <= 0) return;

        positionDiff = Math.abs(positionDiff);
        let firstImgWidth = carousel2.querySelector("img").clientWidth + 14;
        let valDifference = firstImgWidth - positionDiff;

        if (carousel2.scrollLeft > prevScrollLeft) {
            return carousel2.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        }

        carousel2.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel2.scrollLeft;
    }

    const dragging = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        carousel2.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel2.scrollLeft = prevScrollLeft - positionDiff;
        showHideIcons();
    }

    const dragStop = () => {
        isDragStart = false;
        carousel2.classList.remove("dragging");

        if (!isDragging) return;
        isDragging = false;
        autoSlide();
    }

    carousel2.addEventListener("mousedown", dragStart);
    document.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);

    carousel2.addEventListener("touchstart", dragStart);
    carousel2.addEventListener("touchmove", dragging);
    carousel2.addEventListener("touchend", dragStop);

});

const testimonials = [
    {
      name: "Eva Sawyer",
      job: "CEO, Fashworks",
      image: "public/Assets/image5.jpg",
      testimonial:
        "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur",
    },
    {
      name: "Katey Topaz",
      job: "Developer, TechCrew",
      image: "public/Assets/image2.jpg",
      testimonial:
        "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
    },
    {
      name: "Jae Robin",
      job: "UI Designer, Affinity Agency",
      image: "public/Assets/image3.jpg",
      testimonial:
        "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
    },
    {
      name: "Nicola Blakely",
      job: "CEO,Zeal Wheels",
      image: "public/Assets/image4.jpg",
      testimonial:
        "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
    },
  ];
  
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
    `;
  };
  window.onload = displayTestimonial;



