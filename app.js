const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const image = document.getElementById("myImage");

function PageTransitions() {
  //clicking to activate active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += "active-btn";
    });
  }

  //section active
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      //e.target.classList.add('active')

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  //toggle light mode//
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
    changeImage();
  });
}

function changeImage() {
  if (image.src.includes("welcome-blue.svg")) {
    image.src = image.src.replace("welcome-blue", "welcome-green");
  } else {
    image.src = image.src.replace("welcome-green", "welcome-blue");
  }
}

PageTransitions();
