document.getElementById("checkButton").addEventListener("click", function () {
  const ageel = document.getElementById("ageInput").value; //string
  const vre = parseFloat(ageel);
  const parel = document.getElementById("result");
  parel.innerHTML = "";
  if (isNaN(vre) || vre < 0) {
    parel.innerHTML = "please enter valid number";
    return;
  }
  if (vre >= 16) {
    parel.innerHTML += "you are eligible to vote </br>";
  } else {
    parel.innerHTML += "you are not eligible to vote </br>";
  }
  if (vre >= 21) {
    parel.innerHTML += "you are eligible to drink </br>";
  } else {
    parel.innerHTML += "you are not eligible to drink </br>";
  }
  if (vre >= 18) {
    parel.innerHTML += "you are eligible to gamble </br>";
  } else {
    parel.innerHTML += "you are not eligible to gamble </br>";
  }
});
