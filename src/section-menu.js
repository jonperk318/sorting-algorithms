const SelectedSection = require("./selected-section.js");

/**
 * Render section menu.
 */
function renderMenu() {
    const menuElement = document.getElementById("sectionMenu");
    menuElement.innerHTML = "";

    const selectedSectionIndex = SelectedSection.getSelectedSectionIndex();

    for(let i = 0; i < window.results.length; i++) {
        const sectionName = window.results[i].name;

        const li = document.createElement("li");
        li.innerHTML = sectionName;

        if(i === selectedSectionIndex) {
            li.className = "selected";
        }

        (function(sectionName, index) {
            li.onclick = function () {
                window.location.hash = index + "/" + sectionName.replace(/ /g, "-")
            };
        })(sectionName, i);

        menuElement.appendChild(li);
    }

}

module.exports.renderMenu = renderMenu;