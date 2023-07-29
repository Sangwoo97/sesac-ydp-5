const num1 = document.getElementById("value1");
const num2 = document.getElementById("value2");
const sign = document.getElementById("sign");
const cal = document.getElementById("cal");
const reset = document.getElementById("reset");

const calculate = (a, b, op) => {
    let result;
    switch (op.trim()) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            result = "ERROR";
    }

    return result.toString();
};
cal.addEventListener("click", () => {
    document.getElementById("res").value = calculate(
        Number(num1.value),
        Number(num2.value),
        sign.value
    );
});

reset.addEventListener("click", () => {
    num1.value = "";
    num2.value = "";
    sign.value = "";
    document.getElementById("res").value = "";
});
