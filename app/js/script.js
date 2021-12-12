$(function () {
    const lineChart = document.getElementById('myChart');
    const json_url1 = "/app/json/data1.json";
    const json_url2 = "/app/json/data2.json";
    const json_url3 = "/app/json/data3.json";


    const myline = new Chart(lineChart, {
        type: 'line',
        data: {
            labels: [
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
                '21',
                '22',
            ],
            datasets: [{
                backgroundColor: 'white',
                borderWidth: 2,
                borderColor: 'rgb(0, 206, 81)',
                data: [18, 20, 10, 2, 12, 40, 50, 35, 19, 25, 45],
            }]
        },
        options: {
            scales: {
                xAxes: {
                    grid: {
                        display: false
                    },

                },
                yAxes: {
                    ticks: {
                        display: false,
                        beginAtZero: true

                    },
                    grid: {
                        display: false
                        /*  drawBorder: false,
                          lineWidth: 28,
                          tickWidth: 28,
                           color: function(context) {
                               if (context.tick.value % 10 == 0 && context.tick.value > 18 ) {
                                   return '#eaedf1';

                               }
                               return '';
                           },*/
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                }
            },
        },
    });

   const btn1Click = document.getElementById("chartClick1");
   const btn2Click = document.getElementById("chartClick2");
   const btn3Click = document.getElementById("chartClick3");

    btn1Click.onclick = function() {
        ajax_chart(myline, json_url1);
    }
    btn2Click.onclick = function() {
        ajax_chart(myline, json_url2);
    }
    btn3Click.onclick = function() {
        ajax_chart(myline, json_url3);
    }


    function ajax_chart(chart, url) {
        $.ajax({
            url: url,
            method: 'GET',
            dataType: 'json',
            success: function (d) {
                chart.data.labels = d.labels;
                chart.data.datasets[0].data = d.values;
                chart.update();
            }
        });
    }
});

