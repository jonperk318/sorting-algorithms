/**
 * Parse window.location.hash to get the current section index
 *
 * @returns {Number}
 */
function getSelectedChartIndex() {

    var selectedChartIndex = parseInt(window.location.hash.substring(1).split("/")[0]);
    
    if(!selectedChartIndex) {
        selectedChartIndex = 0;
    }

    return selectedChartIndex;
}

module.exports = getSelectedChartIndex;