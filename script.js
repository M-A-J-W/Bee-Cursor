window.addEventListener("load", () => {
    const board = document.getElementById("board");
    const bee = document.getElementById("bee");
    const offsetY = 1; // small vertical offset for positioning

    // Move the bee element according to the mouse position
    const moveBee = (event) => {
        const { pageX, pageY } = event;

        bee.style.left = `${pageX}px`;
        bee.style.top = `${pageY + offsetY}px`;
    };

    board.addEventListener("mousemove", moveBee);
});
