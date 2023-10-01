const labelDom = document.querySelectorAll("label"),
  inputDom = document.querySelectorAll("input"),
  resultDom = document.querySelectorAll("h1.flex");

inputDom[0].onkeyup = (e) => {
  if (Number(inputDom[0].value) > 31 || Number(inputDom[0].value) < 0) {
    input.classList.add("err-input");
    console.log(inputDom[0]);
  }
};
let data = {
  value: "value",
  type: "day",
};
validate(data);
function validate(data) {
  if (data.type == "day") {
    let today = new Date().getDate(),
      month = new Date().getMonth() + 1;

    console.log(today, month);
  }
  if (data.type == "month") {
  }
  if (data.type == "year") {
  }
}
