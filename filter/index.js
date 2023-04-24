

function count() {
  let strg = document.getElementById("strg").value;

let xyCount = 0;
strngArray = [...strg];

  for (let i = 1; i < strngArray.length; i++) {
    if (strngArray[i - 1] === "x" && strngArray[i] === "y") {
      xyCount++;
    }
  }
  document.getElementById("result").innerHTML = xyCount;
}
