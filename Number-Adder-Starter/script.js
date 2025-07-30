const num3 = document.getElementById("addButton");
num3.addEventListener("click", function () {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const result = document.getElementById("result");
  let sum = parseFloat(num1) + parseFloat(num2);
  result.innerHTML = `<i class="fas fa-equals icon"></i> ${sum} `;
});
