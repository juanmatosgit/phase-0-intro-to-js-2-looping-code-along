// Code your solutions in this file
function writeCards(name, occasion) {
    let cards = []
    for (let i = 0; i < name.length; i++) {
    cards.push(`Thank you, ${name[i]}, for the wonderful ${occasion} gift!`);
  }

  return cards;
}

function countDown(i){
    while(i>=0){
        console.log(i);
        i--;
    }
    return i;
}