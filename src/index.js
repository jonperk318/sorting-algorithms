const Chart = require("./sorting-chart.js");
const Menu = require("./section-menu.js");

Menu.renderMenu();
const sortingChart = Chart.renderChart();

window.addEventListener("hashchange", function() {
    Menu.renderMenu();
    Chart.updateChart(sortingChart);
});