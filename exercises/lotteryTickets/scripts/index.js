"use strict";
let winningTickets = [
  { tixNum: "1001001", expires: "2022-09-05", prize: 100000 },
  { tixNum: "1298711", expires: "2022-10-10", prize: 250000 },
  { tixNum: "1309182", expires: "2022-12-30", prize: 500000 },
  { tixNum: "1456171", expires: "2023-01-20", prize: 1000000 },
  { tixNum: "3332871", expires: "2022-05-20", prize: 1000000 },
  { tixNum: "4651529", expires: "2022-12-15", prize: 100000 },
  { tixNum: "5019181", expires: "2023-01-31", prize: 250000 },
  { tixNum: "5168261", expires: "2023-03-01", prize: 1000000 },
  { tixNum: "6761529", expires: "2022-12-15", prize: 250000 },
  { tixNum: "7778172", expires: "2023-01-15", prize: 5000000 },
  { tixNum: "8751426", expires: "2020-09-15", prize: 100000 },
];

//get elements into variables
const winningTicketsTableBody = document.querySelector("#winningTicketsTableBody");
// create functions to handle events
function loadWinningTicketsTable() {
  //console.log(winningTickets);
  for (const winningTicket of winningTickets) {
    //console.log(winningTicket);
 buildTicketRow(winningTicket);
  }
}

function buildTicketRow(winningTicket) {
  let tableRow = winningTicketsTableBody.insertRow(-1);

  let tableData1 = tableRow.insertCell(0);
  tableData1.innerText = winningTicket.tixNum;

  let tableData2 = tableRow.insertCell(1);
  tableData2.innerText = winningTicket.prize.toLocaleString();
  
  let tableData3 = tableRow.insertCell(2);
  tableData3.innerText = winningTicket.expires;
}
// wire up functions to events
loadWinningTicketsTable();
