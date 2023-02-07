import { generateCard } from "./utils.js";
const courseContainer = document.querySelector('.course-container');
const courseCount = document.querySelector('#course-count');


fetch('/scripts/courses.json')
    .then(response => response.json())
    .then(data => {
        //update course-count in nav-toggle
        courseCount.innerHTML = data.length;
        
        data.map(course => {
            const card = document.createElement("div");
            card.classList.add('course-card');
            card.innerHTML = generateCard(course);
            courseContainer.appendChild(card);
        });
    });

