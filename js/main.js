// import your packages here
import Person from "./modules/DataModule.js";

(()=> {
    // stub * just a place for non-component-specific stuff
    console.log('loaded');

    console.log(Person);

    debugger;

    // select our user elements and load the content
    let userSection = document.querySelector(".user-section").children;

    userSection[1].textContent = Team["Justin"].name;
    userSection[2].textContent = Team["Justin"].role;
    userSection[3].textContent = Team["Justin"].nickname;
})();