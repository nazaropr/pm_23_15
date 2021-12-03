const labels = [
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
];
const data = {
    labels: labels,
    datasets: [{
        backgroundColor: 'rgb(0, 206, 81)',
        borderColor: 'rgb(0, 206, 81)',
        data: [18, 20, 10, 2, 12, 40, 50, 35, 19, 25, 45],
    }]
};
const options = {
    scales: {
        x: {
            grid: {

                display: false
            }
        },
        y: {
            ticks: {
                display: false
            },
            grid: {
                drawBorder: false,
                lineWidth: 3,
                tickWidth: 4,
               // color: function(context) {
                   // if (context.tick.value % 15 == 0 && context.tick.value > 15 ) {
                        //return '#eaedf1';

                   // }
                   // return '';
                //},
            },
        },
    },
    plugins: {
        legend: {
            display: false,
        }
    }
};
const config = {
    type: 'line',
    data: data,
    options
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
