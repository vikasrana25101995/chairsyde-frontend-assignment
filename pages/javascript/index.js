document.addEventListener("DOMContentLoaded", function (event) {
  addMultipleCards();
  toggleSortByDropdown();
  toogleCardDropdown();
});

function addMultipleCards() {
  let card = document.querySelector(".Card__Section");
  for (let index = 0; index < 8; index++) {
    let cloneCard = card.cloneNode(true);
    document.querySelector(".Cards__Section").appendChild(cloneCard);
  }
}
function toggleSortByDropdown() {
  let headerSection = document.querySelector(".Header__SortBySection");
  headerSection.addEventListener("click", () => {
  toogleDropdown(headerSection, '.Header__SortByDropdown');
  })
}

function toogleCardDropdown() {
  let cardHeaderSections = document.querySelectorAll(".Card__Heading__DropdownOuterSection");
  cardHeaderSections.forEach(function(element) {
    element.addEventListener("click", () => {
      toogleDropdown(element,'.Card__Heading__DropdownSection');
    });
  });

}

function toogleDropdown(clickElement, elementClass) {
    let dropdownElement = clickElement.querySelector(elementClass);
    if (dropdownElement.classList.contains("Hide")) {
      dropdownElement.classList.remove("Hide");
    } else {
      dropdownElement.classList.add("Hide");
    }
}
