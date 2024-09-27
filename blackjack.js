// blackjack.js
let cardOne = 7;
let cardTwo = 5;
let Psum = cardOne + cardTwo;
let cardOnedeler = 7;
let cardTwodeler = 5;
let cardThreedeler = 6;
let cardFourdeler = 4;
let cardThree = 7;
Psum += cardThree;

let delerSum = cardOnedeler + cardTwodeler + cardThreedeler + cardFourdeler;

while (delerSum < 17) {
    let newCard = 2; 
    delerSum += newCard;
}

console.log(`플레이어의 점수: ${Psum}`);
console.log(`딜러의 점수: ${delerSum}`);

if (Psum === 21) {
    console.log('플레이어가 블랙잭으로 승리했습니다!');
} else if (delerSum === 21) {
    console.log('딜러가 블랙잭으로 승리했습니다!');
} else if (Psum > 21 && delerSum > 21) {
    console.log('비겼습니다: 둘 다 버스트!');
} else if (Psum > 21) {
    console.log('딜러가 승리합니다: 플레이어가 버스트!');
} else if (delerSum > 21) {
    console.log('플레이어가 승리합니다: 딜러가 버스트!');
} else if (Psum > delerSum) {
    console.log('플레이어가 승리합니다!');
} else if (delerSum > Psum) {
    console.log('딜러가 승리합니다!');
} else {
    console.log('비겼습니다: 점수가 같습니다!');
}