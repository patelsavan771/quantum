let dropdownBtns = document.getElementsByClassName("dropdown-btn");

let i;
for (i = 0; i < dropdownBtns.length; i++) {
    let dropdownIcon = document.createElement('span');
    dropdownIcon.classList.add('material-icons');
    dropdownIcon.classList.add('dropdown-btn-icon');
    dropdownIcon.innerHTML = `&#xE5CF;`;
    dropdownBtns[i].appendChild(dropdownIcon);
    dropdownBtns[i].addEventListener("click", function () {
        let dropdownContent = this.nextElementSibling;
        // console.log(this.childNodes[1].innerHTML);

        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            this.childNodes[1].innerHTML = '&#xE5CF;';
        } else {
            dropdownContent.style.display = "block";
            this.childNodes[1].innerHTML = '&#xE5CE;';
        }
    });
}

import { generateCard } from "./utils.js";
const courseContainer = document.querySelector('.course-container');
const courseCount = document.querySelector('#course-count');
fetch('/scripts/courses.json')
    .then((response) => response.json())
    .then((data) => {
    courseCount.innerHTML = data.length.toString();
    data.map((course) => {
        const card = document.createElement("div");
        card.classList.add('course-card');
        card.innerHTML = generateCard(course);
        courseContainer.appendChild(card);
    });
});
