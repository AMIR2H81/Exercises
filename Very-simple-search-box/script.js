const darkModeButton = document.querySelector(".dark-mode");
const bodyMode = document.querySelector("body");

const darkMode = ()=>{
    if(darkModeButton.innerHTML == `<i class="fa fa-star"></i>`){
        bodyMode.style.backgroundColor = "#232323";
        bodyMode.style.color = "#fff";
        darkModeButton.style.backgroundColor = "#fff";
        darkModeButton.style.color= "#232323";
        darkModeButton.innerHTML = `<i class="fa fa-certificate"></i>`;
    }else {
        bodyMode.style.backgroundColor = "#d9d6d6";
        bodyMode.style.color = "#232323";
        darkModeButton.style.backgroundColor = "#232323";
        darkModeButton.style.color= "#fff";
        darkModeButton.innerHTML = `<i class="fa fa-star"></i>`;
    };
};

darkModeButton.addEventListener("click", darkMode);
