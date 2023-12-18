const menu_home = document.getElementsByClassName("menu_home")[0];
const menu_blog = document.getElementsByClassName("menu_blog")[0];
const menu_about_us = document.getElementsByClassName("menu_about_us")[0];
const menu_contact = document.getElementsByClassName("menu_contact")[0];
const home = document.getElementsByClassName("home")[0];
const blog = document.getElementsByClassName("blog")[0];
const about_us = document.getElementsByClassName("about_us")[0];
const contact = document.getElementsByClassName("contact")[0];


menu_home.addEventListener("click", function_home);
menu_blog.addEventListener("click", function_blog);
menu_about_us.addEventListener("click", function_about_us);
menu_contact.addEventListener("click", function_contact);


if(blog.classList.contains("blog") || about_us.classList.contains("about_us") || contact.classList.contains("contact")){
    blog.classList.replace("blog", "hidden");
    about_us.classList.replace("about_us", "hidden");
    contact.classList.replace("contact", "hidden");
} 

function function_home() {
    if(home.classList.contains("hidden")){
        home.classList.replace("hidden", "home");
    }
    if(blog.classList.contains("blog") || about_us.classList.contains("about_us") || contact.classList.contains("contact")){
        blog.classList.replace("blog", "hidden");
        about_us.classList.replace("about_us", "hidden");
        contact.classList.replace("contact", "hidden");
    } 
}

function function_blog() {
    if(blog.classList.contains("hidden")){
        blog.classList.replace("hidden", "blog");
    }
    if(home.classList.contains("home") || about_us.classList.contains("about_us") || contact.classList.contains("contact")){
        home.classList.replace("home", "hidden");
        about_us.classList.replace("about_us", "hidden");
        contact.classList.replace("contact", "hidden");
    } 
}

function function_about_us() {
    if(about_us.classList.contains("hidden")){
        about_us.classList.replace("hidden", "about_us");
    }
    if(home.classList.contains("home") || blog.classList.contains("blog") || contact.classList.contains("contact")){
        home.classList.replace("home", "hidden");
        blog.classList.replace("blog", "hidden");
        contact.classList.replace("contact", "hidden");
    } 
}

function function_contact() {
    if(contact.classList.contains("hidden")){
        contact.classList.replace("hidden", "contact");
    }
    if(home.classList.contains("home") || blog.classList.contains("blog") || about_us.classList.contains("about_us")){
        home.classList.replace("home", "hidden");
        blog.classList.replace("blog", "hidden");
        about_us.classList.replace("about_us", "hidden");
    } 
}

// const menuItems = {
//     home: document.getElementsByClassName("menu_home")[0],
//     blog: document.getElementsByClassName("menu_blog")[0],
//     about_us: document.getElementsByClassName("menu_about_us")[0],
//     contact: document.getElementsByClassName("menu_contact")[0],
//   };
  
//   const sections = {
//     home: document.getElementsByClassName("home")[0],
//     blog: document.getElementsByClassName("blog")[0],
//     about_us: document.getElementsByClassName("about_us")[0],
//     contact: document.getElementsByClassName("contact")[0],
//   };
  
//   Object.keys(menuItems).forEach(item => {
//     menuItems[item].addEventListener("click", () => showSection(item));
//   });
  
//   function showSection(section) {
//     Object.keys(sections).forEach(s => {
//       const element = sections[s];
//       if (s === section) {
//         if (element.classList.contains("hidden")) {
//           element.classList.replace("hidden", s);
//         }
//       } else {
//         if (!element.classList.contains("hidden")) {
//           element.classList.replace(s, "hidden");
//         }
//       }
//     });
//   }
  