const sections = document.querySelectorAll("section")

for (const section of sections) {
    section.style.border = "2px solid steelblue";
    section.style.marginBottom = "5px";
    section.style.borderRadius = "10px";
    section.style.paddingLeft = "7px",
    section.style.backgroundColor = "lightgrey"
}

// const placesContainer = document.getElementById("places-container-1");
// placesContainer.style.backgroundColor = 'yellow'

// const placesContainer = document.getElementById("places-container-1");
// placesContainer.classList.add("yellow-bg");
// placesContainer.classList.add("large-text");
// placesContainer.classList.remove("large-text");


const placesContainer = document.getElementById("places-container-1")

// placesContainer.childNodes[0].childNodes[1].nextSibling