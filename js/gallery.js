function test() {
    window.location = "#personal";
}

function opensnakemodal() {
    let modalSnk = document.getElementById("snakeModal");
    modalSnk.style.display = "block";
}

var snakemod = document.getElementsByClassName("closeSnk")[0];
snakemod.onclick = function() {
    let modalSnk = document.getElementById("snakeModal");
    modalSnk.style.display = "none";
    gameOver();
}

function openmemodal() {
    let modalMeno = document.getElementById("memoModal");
    modalMeno.style.display = "block";
}

var memod = document.getElementsByClassName("closeMemo")[0];
memod.onclick = function() {
    let modalMemo = document.getElementById("memoModal");
    modalMemo.style.display = "none";
    restartMemory();
}