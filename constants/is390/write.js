const fs = require('fs');
const {
  getMarvelRacialDiversity,
  getDcRacialDiversity,
} = require('./racialDiversity');

const marvelData = getMarvelRacialDiversity();
const dcData = getDcRacialDiversity();
const data = [marvelData, dcData];

fs.writeFile('./racialDiversity.json', JSON.stringify(data), (error) =>
  console.error(error)
);
