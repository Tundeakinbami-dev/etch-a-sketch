const container = document.querySelector('#container');
const resetBtn = document.querySelector('#reset-btn');

function createGrid(size) {
    container.innerHTML = '';
    const squareSize = 960 / size;
    const totalSquares = size * size;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Extra credit tracking variables per square
        let opacity = 0;
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        square.addEventListener('mouseenter', () => {
            if (opacity < 1) {
                opacity += 0.1;
            }
            square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        });

        container.appendChild(square);
    }
}

// Initial 16x16 grid setup
createGrid(16);

// Reset button handler
resetBtn.addEventListener('click', () => {
    let userInput = prompt("Enter the number of squares per side (Max: 100):");
    if (userInput === null) return;
    
    let newSize = parseInt(userInput);

    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    createGrid(newSize);
});