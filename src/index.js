import './styles.css';
import addScore from './submitscores.js';
// reference to markup elements
const refresh = document.getElementById('refresh');
const submitButton = document.getElementById('submit');
const recentList = document.getElementById('recent-list');
const yourName = document.getElementById('your-name');
const yourScore = document.getElementById('your-score');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/24c0c3c116974ac49488d4eb0267ade3/scores';
const showScore = async () => {
  recentList.innerHTML = '';

  await fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const scores = json.result;

      scores.forEach((item) => {
        const list = document.createElement('li');
        //list.style.backgroundColor = 'lightgrey';
        list.innerHTML = `
      ${item.user} :    ${item.score}`;
        recentList.appendChild(list);
      });
    });
};

refresh.addEventListener('click', () => {
  showScore();
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  addScore(url, yourName.value, yourScore.value);
  yourName.value = '';
  yourScore.value = '';
});

showScore();