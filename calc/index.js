

function calc(operator) {
  let ans
  let num1 = document.getElementById('num-1').value;
  let num2 = document.getElementById('num-2').value;

  ans = eval(num1 + operator + num2);
  document.getElementById('ans').innerHTML = ans;

}

function sqrt() {
  let ans
  let num1 = document.getElementById('num-1').value;
  ans = Math.sqrt(num1);
  console.log(ans);
  document.getElementById('ans').innerHTML = ans;
}

function natLog() {
  let ans
  let num1 = document.getElementById('num-1').value;
  ans = Math.log(num1);
  document.getElementById('ans').innerHTML = ans;
}