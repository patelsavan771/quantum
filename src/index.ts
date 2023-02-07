import { Course } from './interfaces.js';
import { generateCard } from "./utils.js";
const courseContainer :HTMLElement = document.querySelector('.course-container')!;
const courseCount: HTMLElement = document.querySelector('#course-count')!;


fetch('/scripts/courses.json')
    .then((response: Response) => response.json())
    .then((data: Course[]): void => {
        //update course-count in nav-toggle
        courseCount.innerHTML = data.length.toString();
        
        data.map((course: Course) => {
            const card: HTMLElement = document.createElement("div");
            card.classList.add('course-card');
            card.innerHTML = generateCard(course);
            courseContainer.appendChild(card);
        });
    });
