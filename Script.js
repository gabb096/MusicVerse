let DOM_Animation = document.getElementById(`Animation`);
const DOM_MenuBar = document.getElementById(`MenuBar`);

const ScreenWidth = window.innerWidth;
const MenuBarHeight = ScreenWidth * 0.07;

/* == Rimozione animazione e preparazione barra menu == */

setTimeout( ()=>{ DOM_MenuBar.style.top = "0px"; }, 3700);
setTimeout( ()=>{ DOM_Animation.remove(); }, 6000);

/* ========== barra menù ============================== */

const DOM_HomeDiv = document.getElementById(`Home`);
const DOM_StoryDiv = document.getElementById(`StoryDiv`);
const DOM_RoadmapDiv = document.getElementById(`RoadmapDiv`);
const DOM_CharactersDiv = document.getElementById(`CharactersDiv`);
const DOM_RarityDiv = document.getElementById(`RarityDiv`);
const DOM_TeamDiv = document.getElementById(`TeamDiv`);
const DOM_MenuItems = document.querySelectorAll(`.MenuItem`);

const MenuItemsName = [DOM_HomeDiv, DOM_StoryDiv, DOM_RoadmapDiv, DOM_HomeDiv, DOM_CharactersDiv, DOM_RarityDiv, DOM_TeamDiv];

window.addEventListener('mousewheel', (event)=> {

    let MenuBar_Top = Number(DOM_MenuBar.style.top.replace(`px`, ``));

    if (event.deltaY <= 0 && MenuBar_Top < 0 )  // Scroll up
    {
        MenuBar_Top+=5;
        DOM_MenuBar.style.top = `${MenuBar_Top}px`;
    }
    else if (event.deltaY > 0 && MenuBar_Top >= (0 - MenuBarHeight) ) // Scroll down
    {
        MenuBar_Top-=5;
        DOM_MenuBar.style.top = `${MenuBar_Top}px`;
    }
});

for(let i=0; i<MenuItemsName.length; i++)
{
    DOM_MenuItems[i].addEventListener("click", function() 
    {  
        // Aggiungere animazione 
        MenuItemsName[i].scrollIntoView();
        window.scrollBy(0, - MenuBarHeight);
    });
}

/* ========== Selezione dei vari character ============================== */

const DOM_CharacterImg = document.querySelector(".CharacterImg");
const DOM_CharacterStory = document.querySelector(".CharacterStory");
const DOM_CharacterFrame = document.querySelector(".CharacterFrame");
const DOM_CharacterMiniImg = document.querySelectorAll(".CharacterMiniImg");

for(let i=0; i<DOM_CharacterMiniImg.length; i++)
{
    DOM_CharacterMiniImg[i].addEventListener("click", function() 
    {
        if(i == 1 || i == 5)
            DOM_CharacterFrame.src = "Img/CharacterFrameDouble.png";
        else
            DOM_CharacterFrame.src = "Img/CharacterFrameSingle.png";
        
        // DOM_CharacterStory.innerHTML = ; 
    });
}


/* ========== Selezione dei vari team ============================== */

const DOM_TeamName = document.querySelectorAll(`.TeamName`);
const DOM_TeamAvatarArea = document.querySelector(`.TeamAvatarArea`);

const AvatarNames = [ ["Nick 1", "Nick 2", "Nick 3"],
                    ["Giovanni Pietanza", "Mario Capotorto"],
                    ["Elisa Giusepponi", "Angelo Scarpa", "Gaia Magnini"],
                    ["Edoardo Grassi", "Gaetano Patanè", "Leonardo Del Casale"],
                    ["Domenico Verga", "Giulia Vittoria Panchetti"],
                    ["David Manieranera"],
                    ["Gabriele Leva", "Corrado Tribioli", "Maurizio Venere", "Lorenzo Elia"],
                    ["Stiamo", "Cercando","Sviluppatori"],
                    ["Cercando", "Social Media Manager", "Stiamo"] ];

let string, rgb;
for(let i=0; i<DOM_TeamName.length; i++)
{
    DOM_TeamName[i].addEventListener("click", function() 
    {  
        string = "";
        for(let j=0; j< AvatarNames[i].length; j++)
        {
            rgb = [ Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255) ];

            string +=`<div class="AvatarImg" style = "background-color : rgb(${rgb[0]},${rgb[1]},${rgb[2]});">
                            <h4 class="AvatarName">${AvatarNames[i][j]}</h4>
                        </div>`;
        }
        DOM_TeamAvatarArea.innerHTML = string;

    });
}

