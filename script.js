const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let gameBoard = Array(9).fill(null);

const checkWinner = () => {
      const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
      ];
      for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                  return gameBoard[a];
            }
      }
      return gameBoard.includes(null) ? null : 'Draw';
};

cells.forEach((cell, index) => {
      cell.addEventListener('click', () => {
            if (!cell.textContent && !checkWinner()) {
                  cell.textContent = currentPlayer;
                  gameBoard[index] = currentPlayer;
                  const winner = checkWinner();
                  if (winner) {
                        alert(winner === 'Draw' ? "It's a Draw!" : `${winner} Wins!`);
                        gameBoard.fill(null);
                        cells.forEach(cell => (cell.textContent = ''));
                  }
                  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
      });
});

resetButton.addEventListener('click', () => {
      gameBoard.fill(null);
      cells.forEach(cell => (cell.textContent = ''));
      currentPlayer = 'X';
});
