import { logout } from "./data/users.js";
import { page } from "./lib.js";
import { getUserData, updateNav } from "./util.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHomeView } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
import * as api from './data/going.js';
window.api=api


updateNav();


page("/",showHomeView);
page("/catalog",showCatalog);
page("/login",showLogin);
page("/register",showRegister);
page("/create",showCreate);
page("/catalog/:id",showDetails);
page("/edit/:id",showEdit);




page.start();

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout(); // Call the logout function
    updateNav();
    page.redirect('/');
  });
