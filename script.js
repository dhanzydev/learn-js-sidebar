const btn_toggle = document.querySelector(".btn-toggle");
const sidebar = document.querySelector(".sidebar");
const logo_h3 = document.querySelector(".logo h3");
const logo_i = document.querySelector(".logo i");
const sidebar_ul = document.querySelector(".sidebar ul");

btn_toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");

    if(sidebar.classList.contains("close")){
        logo_h3.setAttribute("style", "display:none");
        logo_i.setAttribute("style", "display:none");
        sidebar_ul.setAttribute("style", "display:none");
        return
    }
        logo_h3.setAttribute("style", "display:block");
        logo_i.setAttribute("style", "display:block");
        sidebar_ul.setAttribute("style", "display:block");
})