// var heading = document.createElement("h2");
// heading.appendChild(document.createTextNode("Hello World"));

// document.body.appendChild(heading);

// Array to <ul>

// var movies = ["Pulp Fiction", "His Girl Friday", "Annie Hall", "The Kid", "The Wild Bunch", "Rear Window"];

// var ul = document.createElement("ul");

// for(var movie in movies) {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode( movies[movie] ));
//     ul.appendChild(li);
// }

// document.body.appendChild(ul);

var complicatedMovies = [
    {
        name: "Pulp Fiction",
        year: 1994,
        genre: "Crime, Thriller"
    },
    {
        name: "The Big Lebowski",
        year: 1998,
        genre: "Comedy, Drama"
    },
    {
        name: "The Wild Bunch",
        year: 1969,
        genre: "Action, Western"
    },
    {
        name: "His Girl Friday",
        year: 1940,
        genre: "Comedy"
    },
]

function TableCreator(data) {
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    var headers = Object.keys(data[0]);

    for(var i = 0; i < headers.length; i++) {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode( headers[i] ));
        thead.appendChild(th);
    };

    for(var i = 0; i < data.length; i++) {
        var tr = document.createElement("tr");
        console.log(data[i]);

        for(var j = 0; j < headers.length; j++) {
            console.log(headers[j]);
            var td = document.createElement("td");
            td.appendChild(document.createTextNode( data[i][headers[j]] ));


            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }

    // Appending Table Head (Where we keep the keys) to the table
    table.appendChild(thead);
    table.appendChild(tbody);
    // Appending all data to the TABLE
    document.body.appendChild(table);
}

TableCreator(complicatedMovies);

// Homework

// Креирајте мини to-do апликација, каде во низа има to-do items. Пример (Да јадам, да го прошетам кучето, да се сликам за пасош)

// Над низата ќе има input поле (и копче до него) во кое ќе може да внесете нов to-do item. На клик на копчето item-от се префрла во низата.

// Секој to-do item до него има и remove копче. На клик на remove копчето, to-do item-от се брише од низата.