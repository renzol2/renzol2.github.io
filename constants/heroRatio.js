const marvelData = require('./marvel.json');
const dcData = require('./dc.json');
const fs = require('fs');
const data = [...marvelData, ...dcData];
const y = 'YEAR';
let includesDate = data.filter((hero) => Boolean(hero[y]));

// Sort by date
includesDate.sort((a, b) => {
  return a[y] - b[y];
});

const d = {};
for (let hero of includesDate) {
  let year = hero[y];

  // Dictionary:
  // Key: year (int)
  // Value: { total (int), total good (int), asian (int), asian good (int) }

  if (d[year] === undefined) {
    d[year] = {
      total: 1,
      totalGood: hero['ALIGN'] === 'Good Characters' ? 1 : 0,
      asian: hero['is_asian'] === 'True' ? 1 : 0,
      asianGood:
        hero['ALIGN'] === 'Good Characters' && hero['is_asian'] === 'True'
          ? 1
          : 0,
    };
  } else {
    d[year].total++;
    d[year].totalGood += hero['ALIGN'] === 'Good Characters' ? 1 : 0;
    d[year].asian += hero['ALIGN'] === 'Good Characters' ? 1 : 0;
    d[year].asianGood +=
      hero['ALIGN'] === 'Good Characters' && hero['is_asian'] === 'True'
        ? 1
        : 0;
  }
}

const arr = [];
let totalHeroes = 0;
let totalGood = 0;
let totalAsian = 0;
let totalAsianGood = 0;
for (let key of Object.keys(d)) {
  const e = d[key];
  totalHeroes += e.total;
  totalGood += e.totalGood;
  totalAsian += e.asian;
  totalAsianGood += e.asianGood;

  const heroRatio = totalGood / totalHeroes;
  let asianHeroRatio = totalAsianGood / totalAsian;
  if (asianHeroRatio === NaN) asianHeroRatio = null;

  arr.push({
    year: key,
    heroRatio,
    asianHeroRatio,
  });
}

const totalData = [];
const asianData = [];
arr.forEach((e) => {
  totalData.push({
    x: parseInt(e.year),
    y: e.heroRatio,
  });
  asianData.push({
    x: parseInt(e.year),
    y: e.asianHeroRatio,
  });
});

const result = [
  {
    id: 'All Characters',
    data: totalData,
  },
  {
    id: 'Asian Characters',
    data: asianData,
  },
];

fs.writeFile('./heroRatio.json', JSON.stringify(result), (error) =>
  console.error(error)
);
