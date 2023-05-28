/////////////   #1   /////////////
// const processTable = (tableNode, color) => {
//   console.log("tableNode", tableNode);
//   tableNode.style.background = color;

//   const rows = tableNode.querySelectorAll("tr");
//   // console.log(rows);
// };

// const tables = document.querySelectorAll("table");

// processTable(tables[0], "#eee");
// processTable(tables[1], "pink");

///////////////   #2 /////////////
const processTable = (tableNode, color) => {
  // console.log("tableNode", tableNode);
  tableNode.style.background = color;

  // выбрали ряды из таблицы
  const rows = tableNode.querySelectorAll("tr");
  console.log(rows);

  const forEachFunc = (row) => {
    console.log(row);
  };

  // перевели псевдомассив в масив
  Array.from(rows).forEach(forEachFunc);
  console.log(rows);

  forEachFunc();
  console.log();

  // отселектировать td
  // const cells = tableNode.querySelectorAll("td");
  // console.log(cells);
};

// записали таблицу в переменную
const tables = document.querySelectorAll("table");

processTable(tables[0], "#eee");
// processTable(tables[1], "pink");

// отсортировать массив пузырьковым способом, вставок и квик сорт
// хан академия
// 20 задач на кодваре
