function getMarvelRacialDiversity() {
  const data = require('./marvel.json');
  return getRacialDiversity(data, 'Marvel');
}

function getDcRacialDiversity() {
  const data = require('./dc.json');
  let result = getRacialDiversity(data, 'DC');
  return result;
}

function getRacialDiversity(data, company) {
  const y = company === 'Marvel' ? 'Year' : 'YEAR';
  let includesDate = data.filter((hero) => Boolean(hero[y]));

  // Sort by date
  includesDate.sort((a, b) => {
    return a[y] - b[y];
  });

  // Dictionary:
  // Key: year (int)
  // Value: { total (int), asian (int) }

  const d = {};
  for (let hero of includesDate) {
    let year = hero[y];
    if (d[year] === undefined) {
      d[year] = { total: 1, asian: hero['is_asian'] === 'True' ? 1 : 0 };
    } else {
      d[year].total++;
      d[year].asian += hero['is_asian'] === 'True' ? 1 : 0;
    }
  }

  const arr = [];
  let totalHeroes = 0;
  let totalAsian = 0;
  for (let key of Object.keys(d)) {
    const e = d[key];
    totalHeroes += e.total;
    totalAsian += e.asian;
    arr.push({
      year: key,
      total: totalHeroes,
      asian: totalAsian,
    });
  }

  const racialDiversityData = arr.map((e) => {
    const { year, total, asian } = e;
    const probNonAsian = (total - asian) / total;
    const probAsian = total - 1 > 0 ? asian / (total - 1) : 0;
    const prob = probNonAsian * probAsian;

    return {
      x: parseInt(year),
      y: prob === NaN ? 0 : prob,
    };
  });

  return {
    id: `${company} Racial Diversity Score`,
    color: company === 'Marvel' ? '#FF0000' : '#0000ff',
    data: racialDiversityData,
  };
}

module.exports = {
  getMarvelRacialDiversity,
  getDcRacialDiversity,
};
