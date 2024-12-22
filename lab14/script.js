class Sudoku {
    constructor() {
        this.grid = Array(9).fill(null).map(() => Array(9).fill(0));
    }

    isValid(num, row, col) {
        // Check row
        if (this.grid[row].includes(num)) return false;

        // Check column
        if (this.grid.some(r => r[col] === num)) return false;

        // Check 3x3 subgrid
        const subgridRow = Math.floor(row / 3) * 3;
        const subgridCol = Math.floor(col / 3) * 3;
        for (let r = subgridRow; r < subgridRow + 3; r++) {
            for (let c = subgridCol; c < subgridCol + 3; c++) {
                if (this.grid[r][c] === num) return false;
            }
        }
        return true;
    }

    solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (this.grid[row][col] === 0) {
                    for (let num = 1; num <= 9; num++) {
                        if (this.isValid(num, row, col)) {
                            this.grid[row][col] = num;
                            if (this.solve()) return true;
                            this.grid[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    generatePuzzle() {
        this.clearGrid();
        let attempts = 0;
        while (attempts < 20) {
            const row = Math.floor(Math.random() * 9);
            const col = Math.floor(Math.random() * 9);
            const num = Math.floor(Math.random() * 9) + 1;
            if (this.isValid(num, row, col) && this.grid[row][col] === 0) {
                this.grid[row][col] = num;
                attempts++;
            }
        }
    }

    clearGrid() {
        this.grid = Array(9).fill(null).map(() => Array(9).fill(0));
    }
}

const sudoku = new Sudoku();

function renderGrid() {
    const container = document.getElementById('sudoku-container');
    container.innerHTML = '';
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.min = 1;
            input.max = 9;
            input.className = 'cell';
            if ((col + 1) % 3 === 0 && col !== 8) input.classList.add('subgrid-border-right');
            if ((row + 1) % 3 === 0 && row !== 8) input.classList.add('subgrid-border-bottom');

            input.value = sudoku.grid[row][col] || '';
            input.addEventListener('input', () => {
                const value = parseInt(input.value, 10);
                if (value >= 1 && value <= 9) {
                    sudoku.grid[row][col] = value;
                } else {
                    sudoku.grid[row][col] = 0;
                    input.value = '';
                }
            });

            container.appendChild(input);
        }
    }
}

document.getElementById('generatePuzzle').addEventListener('click', () => {
    sudoku.generatePuzzle();
    renderGrid();
    document.getElementById('statusMessage').innerText = 'New puzzle generated.';
});

document.getElementById('checkErrors').addEventListener('click', () => {
    const inputs = document.querySelectorAll('.cell');
    let hasError = false;

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = inputs[row * 9 + col];
            const num = sudoku.grid[row][col];
            if (num && !sudoku.isValid(num, row, col)) {
                cell.classList.add('error');
                hasError = true;
            } else {
                cell.classList.remove('error');
            }
        }
    }

    if (!hasError) {
        document.getElementById('sudoku-container').classList.add('correct');
        document.getElementById('statusMessage').innerText = 'Sudoku solved correctly!';
    } else {
        document.getElementById('statusMessage').innerText = 'There are errors in the Sudoku.';
    }
});

document.getElementById('generateSolution').addEventListener('click', () => {
    if (sudoku.solve()) {
        renderGrid();
        document.getElementById('statusMessage').innerText = 'Solution generated!';
    } else {
        document.getElementById('statusMessage').innerText = 'No solution possible!';
    }
});

renderGrid();
