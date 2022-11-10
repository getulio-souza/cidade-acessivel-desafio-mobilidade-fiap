//get section and buttons 
const pointBtn = document.querySelector(".point-btn");
const filterBarContainer = document.querySelector(".filter-bar-container");

pointBtn.addEventListener('click', () => {
    if (filterBarContainer.classList.contains("hide-filter-bar")) {
        filterBarContainer.style.overflow = 'hidden';
        filterBarContainer.style.height = '0px';
        filterBarContainer.style.transition = '0.5s'
        filterBarContainer.classList.remove('hide-filter-bar')
        filterBarContainer.classList.remove('hide')
    } else {
        filterBarContainer.style.overflow = 'visible';
        filterBarContainer.style.height = '50px';
        filterBarContainer.classList.add('hide-filter-bar')
    }
})
