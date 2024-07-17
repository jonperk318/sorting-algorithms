var Chart = require("chart.js");
var Color = require("./colormap");
var SelectedSuite = require("./selected-section");

Chart.defaults.global.defaultFontColor = "#bcbcbc";
Chart.defaults.global.borderColor = "#83828b";
Chart.defaults.global.defaultFontFamily = "Verdana, sans-serif";

/**
 * Map suite results to Chart.js data format
 *
 * @returns {labels, datasets}
 */
function suiteResultsToData() {
    var suite = window.results[SelectedSuite.getSelectedSuiteIndex()];

    return {
        labels: suite.results.map(function(result) {
            return result.array;
        }),
        datasets: mapSuiteMethodsToDataSet(suite.results).sort(function(dataset1, dataset2) {
            return dataset1.totalTime > dataset2.totalTime;
        })
    }
}

/**
 * Map every suite method result to Chart.js dataset format
 *
 * @param suiteResults suite results
 * @returns {Array} datasets
 */
function mapSuiteMethodsToDataSet(suiteResults) {
    var methodTimes = suiteResults.reduce(function(methods, result) {
        for(var methodName in result.methods) {
            methods[methodName] = methods[methodName] || [];
            methods[methodName].push(result.methods[methodName]);
        }
        return methods;
    }, {});

    var dataSets = [];
    for(var methodName in methodTimes) {
        var color = Color.getColor(methodName);

        dataSets.push({
            label: methodName,
            fill: false,
            data: methodTimes[methodName],
            totalTime: methodTimes[methodName].reduce(function(total, time) {
                return total + time;
            }, 0),
            borderColor: color,
            backgroundColor: color,
        });
    }

    return dataSets;
}

/**
 * Render chart to display suite results
 */
function renderChart() {
    var ctx = document.getElementById("sortChart").getContext('2d');

    return new Chart(ctx, {
        type: 'line',
        data: suiteResultsToData(),
        options: {
            responsive: true,
            maintainAspectRatio: false,
            hoverMode: 'index',
            tooltips: {
                mode: 'index',
                intersect: false,
                itemSort: function(a, b) {
                    return a.yLabel > b.yLabel;
                },
                callbacks: {
                    label: function(tooltipItem, data) {
                        return tooltipItem.yLabel.toFixed(7);
                    }
                }
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontSize: 12
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Time (seconds)',
                        fontSize: 30
                    },
                    type: 'logarithmic',
                    gridLines: {
                        display: true,
                        color: "#4a495a"
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 12
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Array Size (number of elements)',
                        fontSize: 30
                    },
                    gridLines: {
                        display: true,
                        color: "#4a495a"
                    }
                }]
            },
            layout: {
                padding: 5
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    padding: 35,
                    usePointStyle: true,
                    pointStyle: 'circle',
                    pointStyleWidth: 20,
                    fontSize: 15
                }
            }
        }
    });
}

function updateChart(chart) {
    chart.data = suiteResultsToData();
    chart.update();
}

module.exports.renderChart = renderChart;
module.exports.updateChart = updateChart;
