let dollar = document.querySelector("[name=usd]");
let egy = document.querySelector("[name= Egy]");
egy.value = 0;
dollar.value = 0;
let para = document.getElementsByTagName("p")[0];
dollar.onfocus = function () {
  dollar.value = "";
};
dollar.oninput = function () {
  let result = dollar.value * 19.1;
  let round = result.toFixed(2);
  egy.value = round;
  // para.textContent = `{${Number(dollar.value)}} USD Dollar = {${round}} Egyptian Pound`;
};
egy.onfocus = function () {
  egy.value = "";
};
egy.oninput = function () {
  let result = egy.value / 19.1;
  let round = result.toFixed(2);
  dollar.value = round;
  // para.textContent = `{${Number(egy.value)}} Egyptian Pound = {${round}} USD Dollar`;
};
