let output = document.getElementById("output");
const getBtnText = (e) => {
  const btnText = e.target.innerText;
  const clear = document.getElementById("boxClear");
  output.value += btnText;
};

const calculate = () => {
  output.value = eval(output.value);
};

const clearAll = () => {
  output.value = "";
};
