let display = document.getElementById("display");
let errorMsg = document.getElementById("errorMsg");

function appendNum(val) {
    errorMsg.textContent = "";
    if (display.value === "0" && val !== ".") display.value = val;
    else display.value += val;
}

function appendOp(op) {
    errorMsg.textContent = "";
    const last = display.value.slice(-1);
    if ("+-*/.".includes(last)) {
        display.value = display.value.slice(0, -1) + op;
    } else {
        display.value += op;
    }
}

function calculate() {
    try {
        errorMsg.textContent = "";
        let result = eval(display.value);
        if (!isFinite(result)) {
            errorMsg.textContent = "Error: Division by zero";
            display.value = "0";
            return;
        }
        display.value = result;
    } catch {
        errorMsg.textContent = "Error: Invalid expression";
        display.value = "0";
    }
}

function clearAll() {
    display.value = "0";
    errorMsg.textContent = "";
}

document.addEventListener("keydown", function(e) {
    const key = e.key;
    if (key >= "0" && key <= "9") appendNum(key);
    else if ("+-*/".includes(key)) appendOp(key);
    else if (key === ".") appendNum(".");
    else if (key === "Enter" || key === "=") calculate();
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1) || "0";
    } else if (key === "Escape") clearAll();
});