function paintCell() {
    //контейнер
    document.body.style="margin:0"
    var wraper = document.createElement("div");
    wraper.style.margin = "0 auto";
    wraper.style.width = "500px"
    wraper.style.height = "500px";
    wraper.style.display = "flex";
    wraper.style.justifyContent = "flex-start";
    wraper.style.flexWrap = "wrap";
    document.body.appendChild(wraper);

    //отрисовка ячеек
    var massLet=['','a','b','c','d','e','f','g','h',''];
    for (let i = 9; i >= 0; i--) {
        for (let j = 9; j >= 0; j--) {
            if ((j == 0) || (j == 9) || (i == 0) || (i == 9)) {
                var posId = document.createElement("span");
                posId.style.width = "50px";
                posId.style.height = "50px";
                posId.style.textAlign = "center";
                posId.style.lineHeight = "50px";
                posId.id = massLet[9-j]+i;
                posId.style.color = "#363636";
                switch (j) {
                    case 9: posId.innerHTML = i;
                        break;
                    case 0: posId.innerHTML = i;
                        posId.style.transform = "rotate(180deg)";
                        break;
                }
                switch (i) {
                    case 9: posId.innerHTML = massLet[9-j];
                        posId.style.transform = "rotate(180deg)";
                        break;
                    case 0: posId.innerHTML = massLet[9-j]; break;
                }
                wraper.appendChild(posId);
            }
            else {
                var cell = document.createElement("div");
                cell.style.width = "50px";
                cell.style.height = "50px";
                cell.style.textAlign = "center";
                cell.style.lineHeight = "50px";
                cell.id = massLet[9-j]+i;
                cell.style.fontSize="50px";
                cell.style.color = "#cc7114";
                // cell.innerHTML = massLet[9-j]+i;
                cell.style.outline = "1px solid #000";
                if ((j + i) % 2 == 0) {
                    cell.style.backgroundColor = "#fff";
                }
                else {
                    cell.style.backgroundColor = "#000";
                }
                wraper.appendChild(cell);
            }
        }
    }
    //расстановка фигур
    document.getElementById("a1").innerHTML="♖";
    document.getElementById("b1").innerHTML="♘";
    document.getElementById("c1").innerHTML="♗";
    document.getElementById("d1").innerHTML="♕";
    document.getElementById("e1").innerHTML="♔";
    document.getElementById("f1").innerHTML="♗";
    document.getElementById("g1").innerHTML="♘";
    document.getElementById("h1").innerHTML="♖";

    document.getElementById("a8").innerHTML="♜";
    document.getElementById("b8").innerHTML="♞";
    document.getElementById("c8").innerHTML="♝";
    document.getElementById("d8").innerHTML="♛";
    document.getElementById("e8").innerHTML="♚";
    document.getElementById("f8").innerHTML="♝";
    document.getElementById("g8").innerHTML="♞";
    document.getElementById("h8").innerHTML="♜";

    document.getElementById("a2").innerHTML="♙";
    document.getElementById("b2").innerHTML="♙";
    document.getElementById("c2").innerHTML="♙";
    document.getElementById("d2").innerHTML="♙";
    document.getElementById("e2").innerHTML="♙";
    document.getElementById("f2").innerHTML="♙";
    document.getElementById("g2").innerHTML="♙";
    document.getElementById("h2").innerHTML="♙";

    document.getElementById("a7").innerHTML="♟";
    document.getElementById("b7").innerHTML="♟";
    document.getElementById("c7").innerHTML="♟";
    document.getElementById("d7").innerHTML="♟";
    document.getElementById("e7").innerHTML="♟";
    document.getElementById("f7").innerHTML="♟";
    document.getElementById("g7").innerHTML="♟";
    document.getElementById("h7").innerHTML="♟";

}

paintCell();
