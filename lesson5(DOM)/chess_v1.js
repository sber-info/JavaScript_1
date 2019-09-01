function paintCell() {
    //создаем объект ячейки - div
    var wraper = document.createElement("div");
    wraper.style.margin = "0 auto";
    wraper.style.backgroundColor = "red";
    wraper.style.width = "400px"
    wraper.style.height = "400px";
    wraper.style.display = "flex";
    wraper.style.justifyContent = "flex-start";
    wraper.style.flexWrap = "wrap";
    wraper.style.outline = "1px solid #000";
    document.body.appendChild(wraper);

    var j = 1;
    var f = false;
    for (let i = 1; i <= 64; i++) {
        var cell = document.createElement("div");
        cell.style.width = "50px";
        cell.style.height = "50px";
        cell.style.color = "#cc7114";
        cell.style.textAlign = "center";
        cell.style.lineHeight = "50px";
        cell.innerHTML = i;
        if ((i > 1) && ((i - 1) % 8 == 0)) {
            if (f == true) {
                f = false;
            }
            else {
                f = true;
            }
        }
        if (f == true) {
            cell.style.backgroundColor = "#000";
            f = false;
        }
        else {
            cell.style.backgroundColor = "#fff";
            f = true;
        }

        wraper.appendChild(cell);
    }
}



paintCell();
