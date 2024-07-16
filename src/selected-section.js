/**
 * Parse window.location.hash to get the current section index
 *
 * @returns {Number}
 */
function getSelectedSectionIndex() {

    let selectedSectionIndex = parseInt(window.location.hash.substring(1).split("/")[0]);

    if(!selectedSectionIndex) {
        selectedSectionIndex = 0;
    }

    return selectedSectionIndex;
}

module.exports.getSelectedSectionIndex = getSelectedSectionIndex;