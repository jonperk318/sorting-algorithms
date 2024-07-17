var Chart = require("./sorting-chart");
var Menu = require("./section-menu");

Menu.renderMenu();
var sortingChart = Chart.renderChart();

window.addEventListener("hashchange", function() {
    Menu.renderMenu();
    Chart.updateChart(sortingChart);
});