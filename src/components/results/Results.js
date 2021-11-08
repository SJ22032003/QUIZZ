const userAns = JSON.parse(localStorage.getItem("answerArr"));
console.log(userAns);
const questionData = JSON.parse(localStorage.getItem("qData"));
console.log(questionData);

let totalQuestions=Object.keys(questionData).length;
let score = 0;

for (let i in userAns) {
  if (userAns[i] == questionData[i].answer) {
   // console.log("you gat it son");
    console.log(questionData[i]);
    score++;
  }

}
//console.log('you got ' +score);

const marks = document.getElementById('marks');
marks.innerHTML = score;
const totalMarks =document.getElementById('totalMarks')
totalMarks.innerHTML=totalQuestions

const resbtn = document.getElementById('resbtn');
resbtn.addEventListener('click', ()=>restart());

function restart(){
  localStorage.clear();
  window.location.href = '../../../index.html';
}
//----------------
const quesRes = document.getElementById('quesRes');

for (let i = 0 ; i< totalQuestions; i++){
  let ansRes = document.createElement('div');
  ansRes.classList.add('ansRes');
  ansRes.innerHTML = `Question ${i+1} ${questionData[i].question}`;
  let opAns = document.createElement('div');
    for(var j=0;j<questionData[i].options.length;j++){
      console.log("a");
      let opt= document.createElement("div");
      opt.innerHTML=questionData[i].options[j];
      opt.style.border=j==userAns[i]? "3px solid black":"unset";
      opt.style.backgroundColor=j==userAns[i]? "rgba(4, 16, 5, 0.45)":"unset";
      opt.style.border=j==questionData[i].answer && "3px solid green"
      opt.style.backgroundColor=j==questionData[i].answer && "rgba(67, 208, 81, 0.69)"
      opt.style.margin = '2px'
      opt.classList.add('opt')
      opAns.append(opt);
    }
   ansRes.append(opAns)
  quesRes.append(ansRes);

} 



