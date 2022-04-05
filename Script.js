let DOM_Animation = document.getElementById(`Animation`);
const DOM_MenuBar = document.getElementById(`MenuBar`);

const DOM_HomeDiv = document.getElementById(`Home`);
const DOM_StoryDiv = document.getElementById(`StoryDiv`);
const DOM_RoadmapDiv = document.getElementById(`RoadmapDiv`);
const DOM_CharactersDiv = document.getElementById(`CharactersDiv`);
const DOM_RarityDiv = document.getElementById(`RarityDiv`);
const DOM_TeamDiv = document.getElementById(`TeamDiv`);
const DOM_MenuItems = document.querySelectorAll(`.MenuItem`);

const MenuItemsName = [DOM_HomeDiv, DOM_StoryDiv, DOM_RoadmapDiv, DOM_HomeDiv, DOM_CharactersDiv, DOM_RarityDiv, DOM_TeamDiv];

const ScreenWidth = window.innerWidth;
const MenuBarHeight = ScreenWidth * 0.07;

/* == Rimozione animazione e preparazione barra menu == */
setTimeout( ()=>{ DOM_MenuBar.style.top = "0px"; }, 3700);
setTimeout( ()=>{ DOM_Animation.remove(); }, 4000);

/* == Scorrimento barra menù == */
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
        MenuItemsName[i].scrollIntoView();
        window.scrollBy(0, - MenuBarHeight);
    });
}