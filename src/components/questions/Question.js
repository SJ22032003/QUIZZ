const qData = {
  //dynamic data
  0: {
    question: "full form of JS",
    options: ["JavaS", "JSava", "Tawa", "JavaScript"],
    answer: 3,
  },
  1: {
    question: "Short form of JavaScript",
    options: ["PS", "DS", "FT", "JS"],
    answer: 3,
  },
  2: {
    question: "HTM_?",
    options: ["S", "S", "L", "J"],
    answer: 2,
  },
};
localStorage.setItem('qData', JSON.stringify(qData));

const answerObj = {}
let currentAns = null; //flags
let currentquestion = 0; //flags

const updateform = () => {
  //render function

    if(!qData[currentquestion]){
        jumbo.innerHTML = "";      
        let resbtnDiv = document.createElement('div');
        resbtnDiv.innerHTML = "Thankyou"
        resbtnDiv.classList.add('btnDiv');
        let resbtn = document.createElement("button");
        resbtn.setAttribute("type", "button");
        resbtn.innerHTML = "Submit";
        resbtn.classList.add("btn-success");
        resbtn.classList.add("btn");
        resbtnDiv.append(resbtn);
        jumbo.append(resbtnDiv);

        resbtn.addEventListener('click', ()=>
        window.location.href ="../results/Results.html")

        return;
    }


  quesH1.innerHTML = `Question ${currentquestion + 1}`;
  ques.innerHTML = `${qData[currentquestion].question}`;
  form.innerHTML = "";
  for (let i in qData[currentquestion].options) {
    let inp = document.createElement("input");
    let optcontainer = document.createElement("div");
    optcontainer.classList.add("optcontainer");
    inp.setAttribute("type", "radio");
    inp.setAttribute("id", `opt${i}`);
    inp.setAttribute("name", "options");
    inp.setAttribute("value", i);

    inp.addEventListener("click", (e) => {
      currentAns = e.target.value;
    });

    let label = document.createElement("label");
    label.setAttribute("for", `opt${i}`);
    label.classList.add('labelclass')
    label.innerHTML = qData[currentquestion].options[i];

    optcontainer.append(inp);
    optcontainer.append(label);
    form.append(optcontainer);
  }
};

const root = document.getElementById("root");
const jumbo = document.createElement("div");
jumbo.classList.add("jumbotron");
jumbo.classList.add('animate__animated', 'animate__headShake');

let quesH1 = document.createElement("h1");
quesH1.classList.add("display-4");
jumbo.append(quesH1);

let ques = document.createElement("h3");
ques.classList.add("lead");
jumbo.append(ques);

let hr = document.createElement("hr");
hr.classList.add("my-4");
jumbo.append(hr);

let optDiv = document.createElement("div");


let btnDiv = document.createElement('div');
btnDiv.classList.add('btnDiv');
let submitbtn = document.createElement("button");
submitbtn.addEventListener("click", () => moveNext(currentAns));
submitbtn.setAttribute("type", "button");
submitbtn.innerHTML = "Submit";
submitbtn.classList.add("btn-success");
submitbtn.classList.add("btn");
btnDiv.append(submitbtn);
function moveNext() {
  // alert(currentAns == qData[currentquestion].answer);
   
  answerObj[currentquestion]=currentAns;
  localStorage.setItem("answerArr", JSON.stringify(answerObj));
  currentquestion += 1;
  updateform();
}

let form = document.createElement("form");
form.classList.add("optform");


optDiv.append(form);
optDiv.append(btnDiv);
jumbo.append(optDiv);
root.append(jumbo);


updateform();