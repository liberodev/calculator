// ESP :: Cargamos el elemento donde queremos devolver el texto de cálculo y el texto de resultado.
// ENG :: We target element where we want to return calculation text and result text.
const result = document.getElementById("resultText");
const calculation = document.getElementById("calculationText");

function insert(num) {
    calculation.textContent += num;
    console.log(num);
}

/* Botón 'C'/Button 'C' */
document.getElementById("clear").addEventListener("click", function () {
    calculation.textContent = "";
    result.textContent = 0;
});

/* Botón '<-'/Button '<-' */
document.getElementById("back").addEventListener("click", function () {
    var exp = calculation.textContent;
    calculation.textContent = exp.substring(0, exp.length - 1);
});

/* Botón '='/Button '=' */
document.getElementById("equal").addEventListener("click", function () {
    var exp = calculation.textContent;
    result.textContent = eval(exp);
    calculation.textContent = result.textContent;
});

