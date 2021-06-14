async function main() {
    let map = new Map();
    map.load("http://localhost/jeux/map.json");
    map.decorate("map", 0);

    let link = new Link();
    link.decorate("link");

    document.onkeydown = function(event) {
        if (event.key === "ArrowDown") {
            link.moveDown();
        }
        if (event.key === "ArrowLeft") {
            link.moveLeft();
        }
        if (event.key === "ArrowRight") {
            link.moveRight();
        }
        if (event.key === "ArrowUp") {
            link.moveUp();
        }
    }
}

main();