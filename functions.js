// document.addEventListener("DOMContentLoaded", () => {
//   const childMenus = document.querySelectorAll(".child-menu");

//   const closeAllChildMenus = () => childMenus.forEach((menu) => menu.classList.remove("show"));

//   document.addEventListener("click", ({ target }) => {
//     if (![...document.querySelectorAll(".child-menu, .menu-link")].some((el) => el.contains(target))) {
//       closeAllChildMenus();
//     }
//   });

//   document.querySelectorAll(".menu-link").forEach((link) => {
//     link.addEventListener("click", (event) => {
//       event.preventDefault();

//       const childMenu = link.closest(".menu-item")?.querySelector(".child-menu");
//       closeAllChildMenus();
//       childMenu?.classList.add("show");
//     });
//   });

//   const searchButton = document.querySelector(".search-button");
//   const searchInput = document.querySelector(".search-input");
//   const searchIcon = document.querySelector(".fa-search");

//   searchButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     searchInput.classList.toggle("show");
//     searchButton.classList.toggle("toggled");
//     searchIcon.classList.toggle("fa-times fa-search");
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const menuItemHasChildren = document.querySelectorAll(".menu-item-has-children");
//   const toggleDropdowns = document.querySelectorAll(".toggle-dropdown");
//   const megaMenus = document.querySelectorAll(".mega-menu");

//   const closeAllMegaMenus = () => megaMenus.forEach((menu) => menu.classList.remove("show"));

//   document.addEventListener("click", ({ target }) => {
//     if (![...menuItemHasChildren, ...toggleDropdowns].some((el) => el.contains(target))) {
//       closeAllMegaMenus();
//     }
//   });

//   toggleDropdowns.forEach((link) => {
//     link.addEventListener("click", (event) => {
//       event.preventDefault();

//       const megaMenu = link.closest(".menu-item")?.querySelector(".mega-menu");
//       closeAllMegaMenus();
//       megaMenu?.classList.add("show");
//     });
//   });

//   const searchButton = document.querySelector(".search-button");
//   const searchInput = document.querySelector(".search-input");
//   const searchIcon = document.querySelector(".search-icon");

//   searchButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     searchInput.classList.toggle("show");
//     searchButton.classList.toggle("toggled");
//     searchIcon.classList.toggle("fa-times");
//     searchIcon.classList.toggle("fa-search");
//   });
// });

/* Show Header when scroll up */
/* ------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  var lastScrollTop = 0;
  var header = document.querySelector("header");
  var headerHeight = header.offsetHeight;

  window.addEventListener("scroll", function () {
    var windowTop = window.scrollY;

    if (windowTop >= headerHeight) {
      header.classList.add("header-sticky");
    } else {
      header.classList.remove("header-sticky");
      header.classList.remove("header-show");
    }

    if (header.classList.contains("header-sticky")) {
      if (windowTop < lastScrollTop) {
        header.classList.add("header-show");
      } else {
        header.classList.remove("header-show");
      }
    }
    lastScrollTop = windowTop;
  });

  /* Togtgle Sticky Menu */
  /* ------------------------------------------- */
  var body = document.body;
  var header = document.querySelector("header");
  var mainNav = document.querySelector(".main--nav");
  var menuItemsWithChildren = document.querySelectorAll(".menu-item-has-children");

  body.addEventListener("click", function (event) {
    if (event.target.classList.contains("toggle-menu")) {
      body.classList.toggle("menu-extended");
      header.classList.toggle("nav-open");
      mainNav.classList.toggle("sub-menu-open");

      menuItemsWithChildren.forEach(function (menuItem) {
        menuItem.classList.remove("open");
      });
    }
  });

  // Header Dropdown functions

  const childMenus = document.querySelectorAll(".child-menu");

  function closeAllChildMenus(exceptMenu) {
    childMenus.forEach((menu) => {
      if (menu !== exceptMenu) {
        menu.parentElement.classList.remove("show");
      }
    });
  }

  document.addEventListener("click", function (event) {
    const target = event.target;
    if (!target.closest(".child-menu") && !target.closest(".toggle-dropdown") && !target.classList.contains("toggle-dropdown")) {
      closeAllChildMenus();
    }
  });

  document.querySelectorAll(".toggle-dropdown").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const parentListItem = link.closest(".menu-item");
      const childMenu = parentListItem.querySelector(".child-menu");

      if (childMenu) {
        closeAllChildMenus(childMenu);
        parentListItem.classList.toggle("show");
      }
    });
  });

  const searchButton = document.querySelector(".search-button");
  const searchInput = document.querySelector(".search-input");
  const searchCrossIcon = document.querySelector(".search-cross-icon");

  searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    searchInput.classList.toggle("show");
    searchButton.classList.toggle("toggled");
    searchCrossIcon.parentElement.parentElement.classList.toggle("show-search-icon");
    searchCrossIcon.parentElement.parentElement.classList.toggle("show-cross-icon");
  });

  // Animation scroll
  const scrollers = document.querySelectorAll("[data-scroll]");
  function check(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(check);
  scrollers.forEach((scroller) => observer.observe(scroller));
});
