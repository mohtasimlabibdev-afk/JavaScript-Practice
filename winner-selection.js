// winner selection
const participants = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];

function selectWinner(list) {
      const randomIndex = Math.floor(Math.random() * list.length);
      return list[randomIndex];
}
console.log('The winner is:', selectWinner(participants));