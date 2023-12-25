import readlineSync from 'readline-sync';

// рандомное число
const randomNumber = (range = 100) => {
  const number = Math.floor(Math.random() * range + 1);
  return number;
};

// описание игры
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const check = (game, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // выводим описание игры
  console.log(description);

  // цикл раундов
  const countRounds = 3;

  for (let i = 0; i < countRounds; i += 1) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    // записываем ответ пользователя
    const userAnswer = readlineSync.question('Your answer: ');
    // проверяем правильный ли ответ
    if (correctAnswer.toString() === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

// проверка числа на четность
const isEven = (number) => number % 2 === 0;

const getAnswerAndQuestion = () => {
  const question = randomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

check(getAnswerAndQuestion, description);

export default getAnswerAndQuestion;
