//get section and buttons 
const pointBtn = document.querySelector(".point-btn");
const filterBarContainer = document.querySelector(".fitter-bar-container");
 
pointBtn.addEventListener('click', () => {
    if (filterBarContainer.classlist.contains(".show-filter-bar")) {
        filterBarContainer.classlist.remove(".show-filter-bar")
    }
    else {
        filterBarContainer.classList.add("show-filter-bar");
    }
})
