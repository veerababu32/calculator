let resultEl = document.getElementById("answer");
let history = "";

function display(num) {
    var value = num.innerHTML;
    if (value === "="){
        resultEl.innerHTML = eval(resultEl.innerHTML);
        val = " = " + eval(resultEl.innerHTML) + " ";
        addToHistory(val);
    } else if (value === "AC"){
        resultEl.innerHTML = "0";
    } else if (value === "e"){
        resultEl.innerHTML = resultEl.innerHTML * 2.7182818284;
        val = "e = " + resultEl.innerHTML + " ";
        addToHistory(val);
    }
    else if(value === "C"){
        resultEl.innerHTML=resultEl.innerHTML.slice(0, -1);
        if(resultEl.innerHTML === ""){
            resultEl.innerHTML = "0"
        }
    } else{
        if (resultEl.innerHTML === "0"){
            resultEl.innerHTML = value;
            val = resultEl.innerHTML;
            addToHistory(val)
        } else{
            resultEl.innerHTML += value;
            addToHistory(value);
        }
    }
}

function addToHistory(value) {
    history += value;
    let historyEl = document.getElementById('history');
    historyEl.innerHTML = history;
}