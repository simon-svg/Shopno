let section_services_cont_items_more = document.querySelectorAll(".section_services_cont_items_more");
let section_services_cont_items_color = document.querySelectorAll(".section_services_cont_items_color");
for(let i = 0; i < section_services_cont_items_more.length; i++){
    section_services_cont_items_more[i].addEventListener("click", () => {
        section_services_cont_items_color[i].style.transform = "translateX(0)";
    })
}




let section_services_cont_items_close = document.querySelectorAll(".section_services_cont_items_close");
for(let i = 0; i < section_services_cont_items_close.length; i++){
    section_services_cont_items_close[i].addEventListener("click", () => {
        section_services_cont_items_color[i].style.transform = "translateX(-100%)";
    })
}



let section_team_cont_items = document.querySelectorAll(".section_team_cont_items");
let section_team_cont_more = document.querySelectorAll(".section_team_cont_more");
for(let i = 0; i < section_team_cont_items.length; i++){
    section_team_cont_items[i].addEventListener("mousemove", (e) => {
        section_team_cont_more[i].style.display = "block";
    })
    section_team_cont_items[i].addEventListener("mouseout", (e) => {
        section_team_cont_more[i].style.display = "none";
    })
}