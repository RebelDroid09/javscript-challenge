// from data.js
var tableData = data;

function createNewColumn()
{
    let newColumn = document.createElement("td");

    return newColumn;
}

// YOUR CODE HERE!
for (var i = 0; i < tableData.length; i++)
{
    console.log(tableData[i])

    var newRow = document.createElement("tr");

    var dateColumn = createNewColumn();
    var cityColumn = createNewColumn();
    var stateColumn = createNewColumn();
    var countryColumn = createNewColumn();
    var shapeColumn = createNewColumn();
    var durationColumn = createNewColumn();
    var commentColumn = createNewColumn();

    newRow.appendChild(dateColumn);
    newRow.appendChild(cityColumn);
    newRow.appendChild(stateColumn);
    newRow.appendChild(countryColumn);
    newRow.appendChild(shapeColumn);
    newRow.appendChild(durationColumn);
    newRow.appendChild(commentColumn);

    dateColumn.innerText = tableData[i].datetime;
    cityColumn.innerText = tableData[i].city;
    stateColumn.innerText = tableData[i].state;
    countryColumn.innerText = tableData[i].country;
    shapeColumn.innerText = tableData[i].shape;
    durationColumn.innerText = tableData[i].durationMinutes;
    commentColumn.innerText = tableData[i].comments;

    //appending to tbody - code is from slack overflow https://stackoverflow.com/questions/18333427
    var tBodyRef = document.getElementById('ufo-table').getElementsByTagName('tbody')[0];

    tBodyRef.append(newRow);
}

function loadDataByDate()
{
    var filterDate = document.getElementById("datetime").value;

    console.log(filterDate);

    var sightingsByDate = tableData.filter(function (row) {
        return row.datetime == filterDate;
    })

    for (var i = 0; i < sightingsByDate.length; i++)
    {
        console.log(sightingsByDate[i])

        var newRow = document.createElement("tr");

        var dateColumn = createNewColumn();
        var cityColumn = createNewColumn();
        var stateColumn = createNewColumn();
        var countryColumn = createNewColumn();
        var shapeColumn = createNewColumn();
        var durationColumn = createNewColumn();
        var commentColumn = createNewColumn();

        newRow.appendChild(dateColumn);
        newRow.appendChild(cityColumn);
        newRow.appendChild(stateColumn);
        newRow.appendChild(countryColumn);
        newRow.appendChild(shapeColumn);
        newRow.appendChild(durationColumn);
        newRow.appendChild(commentColumn);

        dateColumn.innerText = sightingsByDate[i].datetime;
        cityColumn.innerText = sightingsByDate[i].city;
        stateColumn.innerText = sightingsByDate[i].state;
        countryColumn.innerText = sightingsByDate[i].country;
        shapeColumn.innerText = sightingsByDate[i].shape;
        durationColumn.innerText = sightingsByDate[i].durationMinutes;
        commentColumn.innerText = sightingsByDate[i].comments;

        //appending to tbody - code is from slack overflow https://stackoverflow.com/questions/18333427
        var tBodyRef = document.getElementById('ufo-table').getElementsByTagName('tbody')[0];

        tBodyRef.html("");

        tBodyRef.append(newRow);
    }
}

const dateTimeField = document.querySelector("#filter-btn");
dateTimeField.addEventListener('click', loadDataByDate);

