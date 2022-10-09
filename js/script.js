
onload = function(){
   document.querySelector("#about_me").onclick=force_load_aboutPage;
   document.querySelector("#activities").onclick=force_load_activitiesPage;
   document.querySelector("#home").onclick=force_load_homePage;
   document.querySelector("#experience").onclick=force_load_experiencePage;
}

function force_load_aboutPage(){
  window.location = "aboutme.html"
}

function force_load_homePage(){
  window.location = "index.html"
}

function force_load_experiencePage(){
  window.location = "experience.html"
}

function force_load_activitiesPage(){
  window.location = "activities.html"
}