// https://calculator.swiftutors.com/return-on-equity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const returnonEquityRadio = document.getElementById('returnonEquityRadio');
const netIncomeafterTaxRadio = document.getElementById('netIncomeafterTaxRadio');
const averageShareholdersEquityRadio = document.getElementById('averageShareholdersEquityRadio');

let returnonEquity;
let netIncomeafterTax = v1;
let averageShareholdersEquity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

returnonEquityRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Income after Tax';
  variable2.textContent = 'Average Shareholder\'s Equity';
  netIncomeafterTax = v1;
  averageShareholdersEquity = v2;
  result.textContent = '';
});

netIncomeafterTaxRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Equity (ROE)';
  variable2.textContent = 'Average Shareholder\'s Equity';
  returnonEquity = v1;
  averageShareholdersEquity = v2;
  result.textContent = '';
});

averageShareholdersEquityRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Equity (ROE)';
  variable2.textContent = 'Net Income after Tax';
  returnonEquity = v1;
  netIncomeafterTax = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(returnonEquityRadio.checked)
    result.textContent = `Return on Equity = ${computeReturnonEquity().toFixed(2)} %`;

  else if(netIncomeafterTaxRadio.checked)
    result.textContent = `Net Income after Tax = ${computeNetIncomeafterTax().toFixed(2)}`;

  else if(averageShareholdersEquityRadio.checked)
    result.textContent = `Average Shareholder's Equity = ${computeAverageShareholdersEquity().toFixed(2)}`;
})

// calculation

function computeReturnonEquity() {
  return (Number(netIncomeafterTax.value) / Number(averageShareholdersEquity.value)) * 100;
}

function computeNetIncomeafterTax() {
  return (Number(returnonEquity.value) / 100) * Number(averageShareholdersEquity.value);
}

function computeAverageShareholdersEquity() {
  return Number(netIncomeafterTax.value) / (Number(returnonEquity.value) / 100);
}