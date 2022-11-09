const filter = [
    {
        id: 1,
        inputName: 'nome da rua',
    },
    {
        id: 2,
        inputName: 'numero',
    },
    {
        id: 3,
        name: 'regiao',
    },
    {
        id: 4,
        inputName: 'bairro',
    },
    {
        id: 5,
        inputNameSelect: 'problema',
    },
]

//get section and buttons 
const filterBarContainer = document.querySelector(".filter-bar-container");
const filterBtns = document.querySelectorAll(".map-btn");
console.log(filterBtns);

filterBtns.addEventListener("click", function () {
    filterBtns.classList.toggle("ativado");
    if (filterBtns.textContent == "desativado") {
        console.log("1")
        filterBtns.textContent == "ativado" 
    }
    else {
        console.log("2")
        filterBtns.textContent == "desativado"
    }
  })

//load filter 
// window.addEventListener("DOMContentLoaded", () => {
//     displayFilterItems(filter);
// });

// //filter categories
// filterBtns.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         const category = e.currentTarget.dataset.id;
//         const newCategory = menu.filter(function (filterItem) {
//             if (filterItem.category === category) {
//                 return filterItem;
//             }
//         });
//         if (category === "point-place") {
//             displayFilterItems(filter);
//         }
//     });
// });

// // display filter
// function displayFilterItems(filterItems) {
//     let displayFilter = filterItems.map(function (item) {
//         return `<section class="filter-bar-container">
//         <div class="default-input-field">
//         <input type="text" placeholder=${item.inputName}
//         </div>
//         <div class="default-input-field">
//         <select inputName=${item.inputName} id="regiao">
//         <option>${item.inputNameSelect}</option>
//         </div>
//         </section>`
//     });
//     displayFilter = displayFilter.join("");

//     filterBarContainer.innerHTML = displayFilter;
// }

// //display buttons
// function displayButtons() {
//     const buttons = filter.reduce(
//         function (values, item) {
//             if (!values.includes(item.inputName)) {
//                 values.push(item.inputName)
//             }
//             return values;
//         },
//         ["point-place"]
//     );
//     const btnsFilter = category.map(function (category) {
//         return `<button type="button" class="map-btn" data-id=${category}>
//         </button>`;
//     })
//         .join("");
// }