/*
 * See https://stackoverflow.com/questions/45656949/how-to-return-the-row-and-column-index-of-a-table-cell-by-clicking
 * which includes a Jquery solution too.
 */
window.onload = function() {
    const table = document.querySelector('table');
    const rows = document.querySelectorAll('tr');
    const rowsArray = Array.from(rows);

    table.addEventListener('click', (event) => {
        const rowIndex = rowsArray.findIndex(row => row.contains(event.target));
        const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'));
        const columnIndex = columns.findIndex(column => column == event.target);
        console.log(rowIndex, columnIndex)
        switch_elems(rowIndex, columnIndex);
    })
};

function switch_elems(i, j) {
    const table = document.querySelector('table');
    const val1 = table.rows[i].cells[j].innerHTML;

    let k = j + 1;
    let numRows = table.rows.length; // not used, but this gets num rows
    if (k > table.rows[i].cells.length - 1) {
        k = 0;
    }
    const val2 = table.rows[i].cells[k].innerHTML;

    table.rows[i].cells[j].innerHTML = val2.toString();
    table.rows[i].cells[k].innerHTML = val1.toString();
}

/*
 * See https://stackoverflow.com/questions/21033368/javascript-onclick-event-html-table
 */
// window.onload = function() {
//     var table = document.getElementById("tableID");
//     if (table != null) {
//         for (var i = 0; i < table.rows.length; i++) {
//             for (var j = 0; j < table.rows[i].cells.length; j++) {
//                 table.rows[i].cells[j].onclick = function () {
//                     const ii=i;
//                     const jj=j;
//                     tableText(this, ii, jj);
//                 };
//             }
//         }
//     }
// }
//
// function tableText(tableCell, i, j) {
//     alert(tableCell.innerHTML + " " + i + " " + j);
// }