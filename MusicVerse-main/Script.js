let DOM_Animation = document.getElementById(`Animation`);
const DOM_MenuBar = document.getElementById(`MenuBar`);

const ScreenWidth = window.innerWidth;
const MenuBarHeight = ScreenWidth * 0.05;

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
const Characters = ["VESIL", "Double1", "ANVIL", "ROSS", "ERIK", "Double2", "CYBERBOT"]; 

for(let i=0; i<DOM_CharacterMiniImg.length; i++)
{

    DOM_CharacterMiniImg[i].addEventListener("click", function() 
    {
        if(i == 1 || i == 5)
        {
            DOM_CharacterFrame.src = "Img/CharacterFrameDouble.png";
            DOM_CharacterImg.style.left = "13.5vw";
            DOM_CharacterImg.style.top = "9.5vw";
            DOM_CharacterImg.style.width =  "16vw";
            DOM_CharacterImg.style.height = "29.5vw";
            DOM_CharacterImg.style.backgroundImage = `url(Img/Characters/${Characters[i]}.png)`;
        }
        else
        {
            DOM_CharacterFrame.src = "Img/CharacterFrameSingle.png";
            DOM_CharacterImg.style.left = "12vw";
            DOM_CharacterImg.style.top = "9.7vw";
            DOM_CharacterImg.style.width =  "16vw";
            DOM_CharacterImg.style.height = "16vw";
            DOM_CharacterImg.style.backgroundImage = `url(Img/Characters/${Characters[i]}.png)`;
        }
        
        DOM_CharacterStory.innerHTML = CharacterStoryTexts[i]; 
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
                    ["Social", " Media", "Manager"] ];

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

/* ========== accordion ============================== */

var accordion = (function(){
  
  var $accordion = $('.js-accordion');
  var $accordion_header = $accordion.find('.js-accordion-header');
  var $accordion_item = $('.js-accordion-item');
 
  // default settings 
  var settings = {
    // animation speed
    speed: 400,
    
    // close all other accordion items if true
    oneOpen: false
  };
    
  return {
    // pass configurable object literal
    init: function($settings) {
      $accordion_header.on('click', function() {
        accordion.toggle($(this));
      });
      
      $.extend(settings, $settings); 
      
      // ensure only one accordion is active if oneOpen is true
      if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
        $('.js-accordion-item.active:not(:first)').removeClass('active');
      }
      
      // reveal the active accordion bodies
      $('.js-accordion-item.active').find('> .js-accordion-body').show();
    },
    toggle: function($this) {
            
      if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
        $this.closest('.js-accordion')
               .find('> .js-accordion-item') 
               .removeClass('active')
               .find('.js-accordion-body')
               .slideUp()
      }
      
      // show/hide the clicked accordion item
      $this.closest('.js-accordion-item').toggleClass('active');
      $this.next().stop().slideToggle(settings.speed);
    }
  }
})();

$(document).ready(function(){
  accordion.init({ speed: 300, oneOpen: true });
});
