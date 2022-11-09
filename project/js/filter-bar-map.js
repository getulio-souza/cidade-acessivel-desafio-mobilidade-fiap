//get section and buttons 
const pointBtn = document.querySelector(".point-btn");
const filterBarContainer = document.querySelector(".filter-bar-container");
 
pointBtn.addEventListener('click', () => {
    if (filterBarContainer.classList.contains(".hide-filter-bar")) {
        pointBtn.classList.remove(".hide-filter-bar");
        pointBtn.classList.add(".show-filter-bar");
    } else {
        pointBtn.classList.remove(".show-filter-bar");
        pointBtn.classList.add(".hide-filter-bar");
    }
})
