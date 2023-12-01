// Function to manage dropdown menu behavior
function app() {
  // Selecting necessary elements from the DOM
  const menuTrigger = document.querySelector("#profile-menu"); // Element that triggers the dropdown menu
  const menu = document.querySelector("#profile-menu-content"); // Dropdown menu container
  const menuItems = menu.querySelectorAll('[role="menuitem"]'); // All items inside the dropdown menu

  // Function to handle Escape key press to close the menu
  function handleMenuEscapeKeypress(e) {
    if (e.key === "Escape") {
      toggleMenu();
    }
  }

  // Function to handle arrow key press for menu item navigation
  function handleMenuItemArrowKeyPress(e, idx) {
    // Creating helpful variables to determine if it's the first or last menu item
    const isLastMenuItem = idx === menuItems.length - 1;
    const isFirstMenuItem = idx === 0;

    // Variables for the next and previous menu items
    const nextMenuItem = menuItems.item(idx + 1);
    const previousMenuItem = menuItems.item(idx - 1);

    // Handling arrow right or arrow down key press
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      if (isLastMenuItem) {
        // If the user is on the last item, focus on the first menu item
        menuItems.item(0).focus();
        return;
      }
      // Focus on the next menu item
      nextMenuItem.focus();
    }

    // Handling arrow up or arrow left key press
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      if (isFirstMenuItem) {
        // If the user is on the first item, focus on the last menu item
        menuItems.item(menuItems.length - 1).focus();
        return;
      }
      // Focus on the previous menu item
      previousMenuItem.focus();
    }
  }

  // Function to open the menu
  function openMenu() {
    menuTrigger.setAttribute("aria-expanded", "true");
    menuItems.item(0).focus(); // Focus on the first menu item

    // Adding keyup event listener to handle Escape key press for menu closing
    menu.addEventListener("keyup", handleMenuEscapeKeypress);

    // Adding keyup event listeners for each menu item for navigation
    menuItems.forEach(function (item, itemIndex) {
      item.addEventListener("keyup", (e) => {
        handleMenuItemArrowKeyPress(e, itemIndex);
      });
    });
  }

  // Function to close the menu
  function closeMenu() {
    menuTrigger.setAttribute("aria-expanded", "false");
    menuTrigger.focus(); // Focus back on the menu trigger
  }

  // Function to toggle the menu's visibility
  function toggleMenu() {
    const isExpanded = menuTrigger.attributes["aria-expanded"].value === "true";
    menu.classList.toggle("menu-active");

    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Adding click event listener to the menu trigger to toggle the menu
  menuTrigger.addEventListener("click", toggleMenu);
}

// Calling the app function to initialize the dropdown menu behavior
app();

/**
 * when i click the menu trigger,
 * the menu appears
 */

// function app() {
//   const menuTrigger = document.querySelector("#profile-menu");
//   const menu = document.querySelector("#profile-menu-content");
//   const menuItems = menu.querySelectorAll('[role="menuitem"]');

//   function handleMenuEscapeKeypress(e) {
//     if (e.key === "Escape") {
//       toggleMenu();
//     }
//   }

//   function handleMenuItemArrowKeyPress(e, idx) {
//     // create some helpful variables : isLastMenuItem, isFirstMenuItem
//     const isLastMenuItem = idx === menuItems.length - 1;
//     const isFirstMenuItem = idx === 0;

//     const nextMenuItem = menuItems.item(idx + 1);
//     const previousMenuItem = menuItems.item(idx - 1);

//     // if the user pressed arrow right or arrow down
//     if (e.key === "ArrowRight" || e.key === "ArrowDown") {
//       // if user is on last item, focus on first menuitem
//       if (isLastMenuItem) {
//         menuItems.item(0).focus();

//         return;
//       }
//       // then focus on next menu item
//       nextMenuItem.focus();
//     }

//     if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
//       if (isFirstMenuItem) {
//         menuItems.item(menuItems.length - 1).focus();
//         return;
//       }

//       previousMenuItem.focus();
//     }
//   }

//   function opeMenu() {
//     menuTrigger.ariaExpanded = "true";
//     menuItems.item(0).focus();

//     menu.addEventListener("keyup", handleMenuEscapeKeypress);

//     menuItems.forEach(function (item, itemIndex) {
//       item.addEventListener("keyup", (e) => {
//         handleMenuItemArrowKeyPress(e, itemIndex);
//       });
//     });
//   }

//   function closeMenu() {
//     menuTrigger.ariaExpanded = "false";
//     menuTrigger.focus();
//   }

//   function toggleMenu() {
//     const isExpanded = menuTrigger.attributes["aria-expanded"].value === "true";
//     menu.classList.toggle("menu-active");

//     if (isExpanded) {
//       closeMenu();
//     } else {
//       opeMenu();
//     }
//   }

//   menuTrigger.addEventListener("click", toggleMenu);
// }
// app();
/**
 * when i click the dropDown triger,
 * the menu appears
 
 * When the drop is active and i press the arrow down or arrow right keys,
 * focus is moved to the next drop down item item.
 * if i am on the last menu item,
 * focus moves back to the first menu item
 */

/**
 * when the menu is active and i press the arrow up or arrow left keys,
 * focus is moved to the previous menu item.
 * if i am on the first menu item,
 * focus moves to the last menu item.
 */

// function app() {
//   const menuTrigger = document.querySelector("#profile-menu");
//   const menu = document.querySelector("#profile-menu-content");
//   const menuItems = [...menu.querySelectorAll('[role="menuitem"]')];

//   function handleKeyPress(e, idx) {
//     const isLast = idx === menuItems.length - 1;
//     const isFirst = idx === 0;

//     const next = menuItems[(idx + 1) % menuItems.length];
//     const prev = menuItems[(idx - 1 + menuItems.length) % menuItems.length];

//     const focusMenuItem = (item) => item.focus();

//     switch (e.key) {
//       case "Escape":
//         toggleMenu();
//         break;
//       case "ArrowRight":
//       case "ArrowDown":
//         isLast ? focusMenuItem(menuItems[0]) : focusMenuItem(next);
//         break;
//       case "ArrowUp":
//       case "ArrowLeft":
//         isFirst ? focusMenuItem(menuItems[menuItems.length - 1]) : focusMenuItem(prev);
//         break;
//     }
//   }

//   function handleMenuActions(e, idx) {
//     e.preventDefault();
//     handleKeyPress(e, idx);
//   }

//   function opeMenu() {
//     menuTrigger.setAttribute("aria-expanded", "true");
//     menuItems[0].focus();

//     menu.addEventListener("keyup", handleMenuActions);

//     menuItems.forEach((item, itemIndex) => {
//       item.addEventListener("keyup", (e) => handleKeyPress(e, itemIndex));
//     });
//   }

//   function closeMenu() {
//     menuTrigger.setAttribute("aria-expanded", "false");
//     menuTrigger.focus();
//   }

//   function toggleMenu() {
//     const isExpanded = menuTrigger.getAttribute("aria-expanded") === "true";
//     menu.classList.toggle("menu-active");

//     isExpanded ? closeMenu() : opeMenu();
//   }

//   menuTrigger.addEventListener("click", toggleMenu);
// }
// app();

// class MenuApp {
//   constructor() {
//     this.menuTrigger = document.querySelector("#profile-menu");
//     this.menu = document.querySelector("#profile-menu-content");
//     this.menuItems = [...this.menu.querySelectorAll('[role="menuitem"]')];

//     this.handleKeyPress = this.handleKeyPress.bind(this);
//     this.handleMenuActions = this.handleMenuActions.bind(this);
//     this.toggleMenu = this.toggleMenu.bind(this);
//   }

//   handleKeyPress(e, idx) {
//     const isLast = idx === this.menuItems.length - 1;
//     const isFirst = idx === 0;

//     const next = this.menuItems[(idx + 1) % this.menuItems.length];
//     const prev = this.menuItems[(idx - 1 + this.menuItems.length) % this.menuItems.length];

//     const focusMenuItem = (item) => item.focus();

//     switch (e.key) {
//       case "Escape":
//         this.toggleMenu();
//         break;
//       case "ArrowRight":
//       case "ArrowDown":
//         isLast ? focusMenuItem(this.menuItems[0]) : focusMenuItem(next);
//         break;
//       case "ArrowUp":
//       case "ArrowLeft":
//         isFirst ? focusMenuItem(this.menuItems[this.menuItems.length - 1]) : focusMenuItem(prev);
//         break;
//     }
//   }

//   handleMenuActions(e, idx) {
//     e.preventDefault();
//     this.handleKeyPress(e, idx);
//   }

//   openMenu() {
//     this.menuTrigger.setAttribute("aria-expanded", "true");
//     this.menuItems[0].focus();

//     this.menu.addEventListener("keyup", this.handleMenuActions);

//     this.menuItems.forEach((item, itemIndex) => {
//       item.addEventListener("keyup", (e) => this.handleKeyPress(e, itemIndex));
//     });
//   }

//   closeMenu() {
//     this.menuTrigger.setAttribute("aria-expanded", "false");
//     this.menuTrigger.focus();
//   }

//   toggleMenu() {
//     const isExpanded = this.menuTrigger.getAttribute("aria-expanded") === "true";
//     this.menu.classList.toggle("menu-active");

//     isExpanded ? this.closeMenu() : this.openMenu();
//   }

//   init() {
//     this.menuTrigger.addEventListener("click", this.toggleMenu);
//   }
// }

// const menuApp = new MenuApp();
// menuApp.init();
