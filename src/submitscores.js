const submitFunc = () => {
  const getName = document.querySelector('.name');
  const getScore = document.querySelector('.score');
  const submitBtn = document.querySelector('.submit');
  // blank array to create array of objects with name and score properties
  const scores = [];
  class NameAndScore {
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }
  }

  // add event listener on button submit
  submitBtn.addEventListener('click', () => {
    const mynameandscore = new NameAndScore(getName.value, getScore.value);
    scores.push(mynameandscore);
  });
};
export default submitFunc;
