const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarActions = document.querySelector(".navbar-actions");
const mainSearchInput = document.querySelector(".navbar-menu .search-input");
const mobileSearchInput = document.querySelector(
  ".navbar-actions .search-input"
);
const contentElements = document.querySelectorAll(".recherchable");
const backupData = [];

contentElements.forEach(function (element) {
  backupData.push({
    node: element,
    original: element.innerHTML,
  });
});

function handleSearch(searchText) {
  let regex = null;

  if (searchText.length > 0) {
    regex = new RegExp(searchText, "gi"); //Global, Incensitif
  }

  backupData.forEach(function (data) {
    if (searchText.length === 0) {
      data.node.innerHTML = data.original;
    } else {
      const newContent = data.original.replace(regex, function (match) {
        return `<span class="highlight">${match}</span>`;
      });
      data.node.innerHTML = newContent;
    }
  });
}

mainSearchInput.addEventListener("input", function () {
  handleSearch(mainSearchInput.value);
});

mobileSearchInput.addEventListener("input", function () {
  handleSearch(mobileSearchInput.value);
});

navbarToggle.addEventListener("click", function () {
  navbarMenu.classList.toggle("active");
  navbarActions.classList.toggle("active");
  navbarToggle.classList.toggle("active");
});

const navbarLinks = document.querySelectorAll(".navbar-link");
navbarLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navbarMenu.classList.remove("active");
    navbarActions.classList.remove("active");
    navbarToggle.classList.remove("active");
  });
});
