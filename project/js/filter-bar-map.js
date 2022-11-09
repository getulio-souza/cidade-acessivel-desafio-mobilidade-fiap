//get section and buttons 
const pointBtn = document.querySelector(".point-btn");
const filterBarContainer = document.querySelector(".fitter-bar-container");
 
pointBtn.addEventListener('click', () => {
    if (filterBarContainer.classList.contains(".hide-filter-bar")) {
        console.log("1")
        pointBtn.classList.remove(".hide-filter-bar");
        pointBtn.classList.add(".show-filter-bar");
    }
    else {
                console.log("2")
        pointBtn.classList.remove(".show-filter-bar");
        pointBtn.classList.add(".hide-filter-bar");
    }
})
