/*
=========
HACKATHON
=========

[INSTRUCTION]
Buatlah suatu aplikasi untuk membuat catatan ekonomi.

[EXAMPLE]
"bank account sudah disediakan"

input: [['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], ['Larry Page+2%', 'Larry Page-1%']]
process:
  bank account => deposit atas nama Jeff Bezos ditambah 5%, menjadi 105000
  bank account => deposit atas nama Larry Page ditambah 10%, mejadi  104500
  bank account => deposit atas nama Jeff Bezos dikurangi 3%, mejadi 101850
  ...dst
output:
  [
    { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' }
  ]

[RULES]
- Dilarang menggunakan .indexOf(), .split(), .filter(), .map(), dan .slice()
*/

function getName(input) {
  let num = '0123456789'
  let name = ""
  for (let i = 0; i < input.length; i++) {
    let isNum = false;
    for (let j = 0; j < num.length; j++) {
      if (input[i] === num[j]) isNum = true;
    }

    if (!isNum && input[i] !== '+' && input[i] !== '-' && input[i] !== '%') name += input[i];
  }
  return name;
}

function getChange(input){
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "+" || input[i] === "-") return input[i];
  }
}

function getValue(input) {
  let num = '0123456789';
  let value = ""
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (input[i] === num[j]) {
       value += input[i];
      }
    }
  }
  return Number(value);
}


// console.log(getValue('Jeff Bezos+5%'))

function economyChangeSummary(tradeActivity) {
  var bankAccount = [
    { name: 'Jeff Bezos', deposit: 100000, owner: 'Amazon' },
    { name: 'Jack Ma', deposit: 90000, owner: 'Alibaba' },
    { name: 'Larry Page', deposit: 95000, owner: 'Google' }
  ];
  // YOUR CODE GOES HERE

  let arrOfObj = [];

  for (let i = 0; i < tradeActivity.length; i++) {
    for (let j = 0; j < tradeActivity[i].length; j++) {
      let name = getName(tradeActivity[i][j]);
      let change = getChange(tradeActivity[i][j]);
      let value = getValue(tradeActivity[i][j]);
      // let deposit = getDeposit(bankAccount, name);
      // let owner = getOwner(bankAccount, name);
      let obj = {}
      obj.name = name;

      for (let k = 0; k < bankAccount.length; k++) {
        if (name === bankAccount[k].name) {
          if (change === "+") {
            bankAccount[k].deposit += value / 100 * bankAccount[k].deposit;
            obj.deposit = bankAccount[k].deposit
          } else if (change === '-') {
            bankAccount[k].deposit -= value / 100 * bankAccount[k].deposit;
            obj.deposit = bankAccount[k].deposit;
          }

          obj.owner = bankAccount[k].owner
        }
      }

      // obj.owner = owner
      arrOfObj.push(obj);
    }
  }

  return arrOfObj;
};

console.log(economyChangeSummary([['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], ['Larry Page+2%', 'Larry Page-1%'], ['Jack Ma+4%'], ['Larry Page-8%', 'Jack Ma+20%', 'Jeff Bezos-3%', 'Jeff Bezos+8%']]));
/* 
  [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 104500, owner: 'Google' },
  { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 106590, owner: 'Google' },
  { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
  { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
  { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
  { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
  { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
  { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
*/

console.log(economyChangeSummary([['Jeff Bezos-10%']]))
/*
  [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
*/