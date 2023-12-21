const menuItems = {
    home: document.getElementsByClassName("menu_home")[0],
    blog: document.getElementsByClassName("menu_blog")[0],
    about_us: document.getElementsByClassName("menu_about_us")[0],
    contact: document.getElementsByClassName("menu_contact")[0],
  };
  
  const sections = {
    home: document.getElementsByClassName("home")[0],
    blog: document.getElementsByClassName("blog")[0],
    about_us: document.getElementsByClassName("about_us")[0],
    contact: document.getElementsByClassName("contact")[0],
  };
  
  Object.keys(menuItems).forEach(item => {
    menuItems[item].addEventListener("click", () => showSection(item));
  });

  showSection("home");
  
  function showSection(section) {
    Object.keys(sections).forEach(s => {
      const element = sections[s];
      if (s === section) {
        if (element.classList.contains("hidden")) {
          element.classList.replace("hidden", s);
        }
      } else {
        if (!element.classList.contains("hidden")) {
          element.classList.replace(s, "hidden");
        }
      }
    });
  }
  