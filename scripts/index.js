import { courses } from "./courseData.js";
import { generateCard } from "./utils.js";
const courseContainer = document.querySelector('.course-container');

for(let course of courses) {
    const card = document.createElement("div");
    card.classList.add('course-card');
    card.innerHTML = generateCard(course);
    courseContainer.appendChild(card);
}

