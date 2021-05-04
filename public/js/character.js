alert('hello');

const { Chart } = require("chart.js");

let myChart = document.getElementById('myChart').getContext('2d');

let dataChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: ['Strength', 'Defense', 'Stamina'],
        datasets: [{
            label: "Values",
            data: [
                10,
                20,
                15
            ]
        }]
    },
    options: {}
});


