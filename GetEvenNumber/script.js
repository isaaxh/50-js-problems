const output = document.querySelector(".output");
const btnEvenNum = document.querySelector(".btn-even-num");

let evenArray = [];

const printEvenNumbers = () => {
  evenArray = [];
  for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
      evenArray.push(i);
    }
  }

  output.innerText = evenArray;
};

btnEvenNum.addEventListener("click", printEvenNumbers);
