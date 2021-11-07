const userAns = JSON.parse(localStorage.getItem("answerArr"));
console.log(userAns);
const questionData = JSON.parse(localStorage.getItem("qData"));
console.log(questionData);


let score = 0;
for (let i in userAns) {
  if (userAns[i] == questionData[i].answer) {
    console.log("you gat i son");
    score++;
  }
}
console.log('you got ' +score);