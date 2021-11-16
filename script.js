'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(element => element[0])
      .join('');
  });
};

createUserName(accounts);
console.log(accounts);

const calcPrintBalance = function (movements) {
  const balanceTotal = movements.reduce((prev, curr) => prev + curr, 0);
  labelBalance.textContent = `${balanceTotal} EURO`;
  console.log(balanceTotal);
};

calcPrintBalance(account1.movements);

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">
      ${index + 1} ${type}
    </div>

    <div class="movements__value">${movement}</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterBegin', html);
  });
};
displayMovements(account1.movements);
//////////////////////////////////////////////
///////////////////////////////////////////////
//LECTURES;

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const withdrawals = movements.filter(move => move < 0);
console.log(withdrawals);

const balanceTotal = movements.reduce((prev, curr) => prev + curr, 0);
console.log(balanceTotal);

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(
      `Movement ${index + 1}: You've deposited ${movement} and ${array}`
    );
  } else {
    console.log(
      `Movement ${index + 1}: You've withdrawn ${Math.abs(movement)}`
    );
  }
});
//--------------------------------------------------
//Total Deposit Calculation
const totalDeposit = movements
  .filter(movement => movement > 0)
  .reduce((curr, prev) => curr + prev, 0);
console.log(totalDeposit);
labelSumIn.textContent = totalDeposit;
//--------------------------------------------------
//Total Withdrawal Calculation
const totalWithdraw = movements
  .filter(movement => movement < 0)
  .reduce((curr, prev) => curr + prev, 0);
console.log(totalWithdraw);
labelSumOut.textContent = Math.abs(totalWithdraw);
//--------------------------------------------------
//Total Interest Calculation
const interestRate = 1.2;
const totalInterest =
  (movements
    .filter(movement => movement > 0)
    .reduce((curr, prev) => curr + prev, 0) *
    interestRate) /
  100;
console.log(totalInterest);
labelSumInterest.textContent = totalInterest;
//--------------------------------------------------
/////////////////////////////////////////////////
