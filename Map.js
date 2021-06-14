function httpRequest(address, reqType, asyncProc) {
    let req = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    if (asyncProc) {
        req.onreadystatechange = function() {
            if (this.readyState === 4) {
                asyncProc(this);
            }
        };
    }
    req.open(reqType, address, !(!asyncProc));
    req.send();
    return req;
}

class Map {
    constructor() {
        this.map = null;
        this.zones = null;
        this.tiles = null;
    }
    load(lien) {
        let req = httpRequest(lien, "GET");
        this.map = JSON.parse(req.response).map;
        this.zones = JSON.parse(req.response).zones;
        this.tiles = JSON.parse(req.response).tiles;
    }
    decorate(id, num) {
        let div = document.getElementById(id);
        this.zones[num]["carte"].forEach(element => {
            element.forEach(tile => {
                let imageToDisplay = this.tiles[tile]["name"]
                let img = document.createElement("img");
                img.setAttribute("src", "images/overworld/" + imageToDisplay)
                div.appendChild(img);
            })
        });
    }
}