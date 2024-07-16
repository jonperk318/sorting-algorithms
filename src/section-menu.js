var SelectedSection = require("./selected-section.js");

/**
 * Render section menu.
 */
function renderMenu() {
    var menuElement = document.getElementById("sectionMenu");
    menuElement.innerHTML = "";

    var selectedSectionIndex = SelectedSection.getSelectedSectionIndex();

    for(var i = 0; i < window.results.length; i++) {
        var sectionName = window.results[i].name;

        var li = document.createElement("li");
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