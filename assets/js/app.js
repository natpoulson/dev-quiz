// Import questions from dataset
const questions = require('./questions.json');

// Binding elements for updates
const counters = {
    points: document.getElementById('counter-points'),
    question: document.getElementById('counter-question'),
    timer: document.getElementById('counter-timer')
};

const cards = {
    start: document.getElementById('card-start'),
    question: document.getElementById('card-question'),
    end: document.getElementById('card-end')
};

const question = {
    title: document.getElementById('question-title'),
    body: document.getElementById('question-text'),
    a1: document.getElementById('a1'),
    a2: document.getElementById('a2'),
    a3: document.getElementById('a3'),
    a4: document.getElementById('a4')
};