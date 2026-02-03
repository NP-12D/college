
const inputs = document.querySelectorAll("input");
const p = document.querySelector("p");

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    const a = Number(inputs[0].value);
    const b = Number(inputs[1].value);

    let result;
    if (button.dataset.index === "+") {
      result = a + b;
    } else {
      result = a - b;
    }

    p.textContent = `${a} ${button.dataset.index} ${b} = ${result} `;

    
    inputs[0].value = "";
    inputs[1].value = "";
  });
});
