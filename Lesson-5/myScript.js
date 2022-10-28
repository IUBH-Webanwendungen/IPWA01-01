function showAlert() {
    alert(document.querySelector('input').value);
}

function showAlert_2() {
    let ergebnis = 2==3;
    let eingabe = document.querySelector('input').value;
    if (ergebnis) {
        alert(eingabe.toLocaleLowerCase());
    }
    else {
        alert(eingabe.toUpperCase());
    }
}