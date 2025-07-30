document.getElementById("convertuBtton").addEventListener("click", function () {
  const tempel = parseFloat(document.getElementById("temperature").value);
  const temp2 = document.getElementById("Conversiontype").value;
  const resultel = document.getElementById("result");
  resultel.innerHTML = "";
  let converttemp;
  if (isNaN(tempel) || tempel < 0) {
    resultel.innerHTML = "please give a valid temp";
    return;
  } else if (temp2 === "toCelcius") {
    converttemp = ((tempel - 32) * 5) / 9;
    resultel.innerHTML += `${tempel} °F is equal to ${converttemp.toFixed(
      2
    )} °C`;
  } else if (temp2 === "toFarenheit") {
    converttemp = (tempel * 9) / 5 + 32;
    resultel.innerHTML += `${tempel} °C is equal to ${converttemp.toFixed(
      2
    )} °F`;
  }
});
