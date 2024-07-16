var Chart = require("./chart.js");
var Menu = require("./section-menu.js");

Menu.renderMenu();
var sortChart = Chart.renderChart();

window.addEventListener("hashchange", function() {
    Menu.renderMenu();
    Chart.updateChart(sortChart);
});