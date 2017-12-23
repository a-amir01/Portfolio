/**
 * Created by amirassad on 12/22/17.
 */

import React from 'react';

export default function Tutoring() {
    return (
        <div>
            <div style={{ color: "#1E90FF" }}>
                <h3>UCSD CSE Department, San Diego – Tutor</h3>
                <h4>January 2016 - August 2017</h4>
            </div>

            <ul style= {{ listStyleType: "disc" }}>
                <li>
                    Tutor for <b>Data-structures & O-O Programming, Intro to Java Programming, Unix Lab classes, and Software Engineering</b>
                </li>
                <li>
                    Assisted students in implementations of O-O concepts (polymorphism, inheritance, abstraction, concurrency), various data structures <b>(Trees, Linked Lists, Stacks, Queues, Hash Tables)</b>, as well as in using various software tools (Git, Vim, gdb, Valgrind)
                </li>
                <li>
                    Analyzed and debugged students’ code, and clarified concepts they are working on in <b>(Java, C, C++)</b>
                </li>
                <li>
                    Help administer midterm/final examination, validating programming assignments, and aided in preparing lab assignments
                </li>
            </ul>
        </div>
    );
}
