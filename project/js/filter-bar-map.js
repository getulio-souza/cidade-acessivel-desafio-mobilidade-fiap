const filter = [
    {
        id: 1,
        name: 'nome da rua',
        button: "apontar local"
    },
    {
        id: 2,
        name: 'numero',
        button: "apontar local"
    },
    {
        id: 3,
        name: 'regiao',
        button: "apontar local"
    },
    {
        id: 4,
        name: 'bairro',
        button: "apontar local"
    },
    {
        id: 5,
        name: 'problema',
        button: "apontar local"
    },
    
]

const filterBarContainer = document.querySelector(".filter-bar-container");

const filterBtns = document.querySelectorAll(".map-btn");

//load filter 
window.addEventListener("DOMContentLoaded", () => {
    displayFilterItems(filter);
});

//filter categories
filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e.currentTarget.dataset.id);
    })
})
