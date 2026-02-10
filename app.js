const holdings = [];

const els = {
  form: document.getElementById('holding-form'),
  name: document.getElementById('asset-name'),
  assetClass: document.getElementById('asset-class'),
  invested: document.getElementById('amount-invested'),
  current: document.getElementById('current-value'),
  holdingsBody: document.getElementById('holdings-body'),
  totalInvested: document.getElementById('total-invested'),
  totalCurrent: document.getElementById('total-current'),
  profitLoss: document.getElementById('profit-loss'),
  returnRate: document.getElementById('return-rate'),
  allocationChart: document.getElementById('allocation-chart'),
  allocationEmpty: document.getElementById('allocation-empty'),
  loadExample: document.getElementById('load-example'),
  clearPortfolio: document.getElementById('clear-portfolio')
};

const examplePortfolio = [
  { name: 'S&P 500 ETF', assetClass: 'Equities', invested: 15000, current: 18400 },
  { name: 'US Treasury Bond Fund', assetClass: 'Bonds', invested: 7000, current: 7100 },
  { name: 'REIT Index', assetClass: 'Real Estate', invested: 5000, current: 5450 },
  { name: 'Gold ETF', assetClass: 'Commodities', invested: 3000, current: 3320 }
];

const fmtCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2
});

const fmtPercent = (value) => `${value.toFixed(2)}%`;

function addHolding(holding) {
  holdings.push({ ...holding, id: crypto.randomUUID() });
  render();
}

function removeHolding(id) {
  const index = holdings.findIndex((h) => h.id === id);
  if (index >= 0) {
    holdings.splice(index, 1);
    render();
  }
}

function clearHoldings() {
  holdings.length = 0;
  render();
}

function renderSummary() {
  const totals = holdings.reduce(
    (acc, holding) => {
      acc.invested += holding.invested;
      acc.current += holding.current;
      return acc;
    },
    { invested: 0, current: 0 }
  );

  const profitLoss = totals.current - totals.invested;
  const returnRate = totals.invested === 0 ? 0 : (profitLoss / totals.invested) * 100;

  els.totalInvested.textContent = fmtCurrency.format(totals.invested);
  els.totalCurrent.textContent = fmtCurrency.format(totals.current);
  els.profitLoss.textContent = fmtCurrency.format(profitLoss);
  els.returnRate.textContent = fmtPercent(returnRate);

  setPerformanceClass(els.profitLoss, profitLoss);
  setPerformanceClass(els.returnRate, returnRate);
}

function setPerformanceClass(element, value) {
  element.classList.remove('positive', 'negative', 'neutral');
  if (value > 0) {
    element.classList.add('positive');
  } else if (value < 0) {
    element.classList.add('negative');
  } else {
    element.classList.add('neutral');
  }
}

function renderAllocation() {
  els.allocationChart.innerHTML = '';

  if (!holdings.length) {
    els.allocationEmpty.hidden = false;
    return;
  }

  const byClass = holdings.reduce((acc, holding) => {
    acc[holding.assetClass] = (acc[holding.assetClass] || 0) + holding.current;
    return acc;
  }, {});

  const total = Object.values(byClass).reduce((sum, value) => sum + value, 0);
  Object.entries(byClass)
    .sort(([, a], [, b]) => b - a)
    .forEach(([assetClass, value]) => {
      const share = total === 0 ? 0 : (value / total) * 100;
      const row = document.createElement('div');
      row.className = 'allocation-row';
      row.innerHTML = `
        <div class="allocation-head"><span>${assetClass}</span><span>${fmtPercent(share)} (${fmtCurrency.format(value)})</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${share}%"></div></div>
      `;
      els.allocationChart.append(row);
    });

  els.allocationEmpty.hidden = true;
}

function renderTable() {
  els.holdingsBody.innerHTML = '';

  if (!holdings.length) {
    els.holdingsBody.innerHTML = `
      <tr class="placeholder-row">
        <td colspan="7">No holdings yet.</td>
      </tr>
    `;
    return;
  }

  holdings.forEach((holding) => {
    const row = document.createElement('tr');
    const pnl = holding.current - holding.invested;
    const ret = holding.invested === 0 ? 0 : (pnl / holding.invested) * 100;

    row.innerHTML = `
      <td>${holding.name}</td>
      <td>${holding.assetClass}</td>
      <td>${fmtCurrency.format(holding.invested)}</td>
      <td>${fmtCurrency.format(holding.current)}</td>
      <td class="${pnl > 0 ? 'positive' : pnl < 0 ? 'negative' : 'neutral'}">${fmtCurrency.format(pnl)}</td>
      <td class="${ret > 0 ? 'positive' : ret < 0 ? 'negative' : 'neutral'}">${fmtPercent(ret)}</td>
      <td><button class="inline-button" data-delete="${holding.id}">Remove</button></td>
    `;

    els.holdingsBody.append(row);
  });
}

function render() {
  renderSummary();
  renderAllocation();
  renderTable();
}

els.form.addEventListener('submit', (event) => {
  event.preventDefault();

  const newHolding = {
    name: els.name.value.trim(),
    assetClass: els.assetClass.value,
    invested: Number(els.invested.value),
    current: Number(els.current.value)
  };

  if (!newHolding.name || Number.isNaN(newHolding.invested) || Number.isNaN(newHolding.current)) {
    return;
  }

  addHolding(newHolding);
  els.form.reset();
  els.name.focus();
});

els.holdingsBody.addEventListener('click', (event) => {
  const target = event.target;
  if (target instanceof HTMLButtonElement && target.dataset.delete) {
    removeHolding(target.dataset.delete);
  }
});

els.loadExample.addEventListener('click', () => {
  clearHoldings();
  examplePortfolio.forEach(addHolding);
});

els.clearPortfolio.addEventListener('click', clearHoldings);

render();
