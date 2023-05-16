
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharPizza);

function desenharPizza() {

    var data = google.visualization.arrayToDataTable(
        [
            ['Avaliações', 'Quantidade'],
            ['Boas avaliações', Math.random() * 100],
            ['Más avaliações', Math.random() * 100],
        ]
    );

    var options = {
        title: 'Avaliações',
        legend: { position: 'bottom' },
        slices: {
            0: { color: '#0d9598' },
            1: { color: '#012222' }
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('pizza'));

    chart.draw(data, options);
}

// ===================================================

google.charts.load('current', { 'packages': ['line'] });
google.charts.setOnLoadCallback(desenharLinha);

function desenharLinha() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Day');
    data.addColumn('number', 'Guardians of the Galaxy');

    data.addRows(
        [
            [1, Math.random() * 100],
            [2, Math.random() * 100],
            [3, Math.random() * 100],
            [4, Math.random() * 100],
            [5, Math.random() * 100],
            [6, Math.random() * 100],
            [7, Math.random() * 100],
            [8, Math.random() * 100],
            [9, Math.random() * 100],
            [10, Math.random() * 100]
        ]
    );

    var options = {
        legend: { position: 'none' },
        chart: {
            title: 'Agendamentos por dia'
        },
        colors: ['#0d9598']
    };

    var chart = new google.charts.Line(document.getElementById('linha'));

    chart.draw(data, google.charts.Line.convertOptions(options));
}

// ===============================================================================================================================

google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(desenharColuna);

function desenharColuna() {
    var data = new google.visualization.arrayToDataTable(
        [
        ['Serviços', 'Porcentagem', { role: "style" } ],
        ["Banho", Math.random().toFixed(2)*100, "#012222"],
        ["Tosa", Math.random().toFixed(2)*100, "#012222"],
        ["Veterinário", Math.random().toFixed(2)*100, "#012222"],  
        ]
    );

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2]);

    var options = {
        title: "Serviços",
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("coluna-1"));
    chart.draw(view, options);
}

// ============================================================================================================================

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Pitbull',     3],
    ['Shitzu',      9],
    ['Vira Lata',  18],
    ['Bordder Collie', 3],
    ['Pastor Alemao',    6]
  ]);

  var options = {
    title: 'Raças de cachorros que já atendemos:',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('rosca'));
  chart.draw(data, options);
}