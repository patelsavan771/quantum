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

