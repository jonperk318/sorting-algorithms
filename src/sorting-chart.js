var Chart = require("chart.js");
var Color = require("./colormap.js");
var SelectedSection = require("./selected-section.js");

/**
 * Map section results to Chart.js data format
 *
 * @returns {labels, datasets}
 */
function sectionResultsToData() {
    var section = window.results[SelectedSection.getSelectedSectionIndex()];

    return {
        labels: section.results.map(function(result) {
            return result.array;
        }),
        datasets: mapSectionMethodsToDataSet(section.results).sort(function(dataset1, dataset2) {
            return dataset1.totalTime > dataset2.totalTime;
        })
    }
}

/**
 * Map every section method result to Chart.js dataset format
 *
 * @param sectionResults section results
 * @returns {Array} datasets
 */
function mapSectionMethodsToDataSet(sectionResults) {
    var methodTimes = sectionResults.reduce(function(methods, result) {
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
            backgroundColor: color
        });
    }

    return dataSets;
}

/**
 * Render chart to display section results
 */
function renderChart() {
    var ctx = document.getElementById("sortChart").getContext('2d');

    return new Chart(ctx, {
        type: 'line',
        data: sectionResultsToData(),
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
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Time (sec)'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Array Size (elements)'
                    }
                }]
            },
            layout: {
                padding: 10
            }
        }
    });
}

function updateChart(chart) {
    chart.data = sectionResultsToData();
    chart.update();
}

module.exports.renderChart = renderChart;
module.exports.updateChart = updateChart;