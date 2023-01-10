function onExpand(){
    var expandBox=document.getElementById("expandBox");
    var topNav=document.getElementById("myTopnav");
    if(topNav.style.display!="none"){
      topNav.style.display="none";
      expandBox.style.display="block";
    }
    else{
      topNav.style.display="block";
      expandBox.style.display="none";
    }
  }
  function disableDisplay(){
    var home=document.getElementById("home");
    var aboutMe=document.getElementById("aboutMe");
    var education=document.getElementById("education");
    var resume=document.getElementById("resume");
    var contact=document.getElementById("contactMe");
    var homeNav=document.getElementById("homeNav");
    var aboutNav=document.getElementById("aboutNav");
    var educationNav=document.getElementById("educationNav");
    var resumeNav=document.getElementById("resumeNav");
    var contactNav=document.getElementById("contactNav");
    home.style.display="none";
    aboutMe.style.display="none";
    education.style.display="none";
    resume.style.display="none";
    contact.style.display="none";
    homeNav.className="notActive";
    aboutNav.className="notActive";
    educationNav.className="notActive";
    resumeNav.className="notActive";
    contactNav.className="notActive";
  }
  function onHome(){
    var home=document.getElementById("home");
    var homeNav=document.getElementById("homeNav");
    disableDisplay();
    home.style.display="block";
    homeNav.className="active";
  }
  function onAboutMe(){
    var aboutMe=document.getElementById("aboutMe");
    var aboutNav=document.getElementById("aboutNav");
    disableDisplay();
    aboutMe.style.display="flex";
    aboutNav.className="active";
  }
  function onEducation(){
    var education=document.getElementById("education");
    var educationNav=document.getElementById("educationNav");
    disableDisplay();
    education.style.display="flex";
    educationNav.className="active";
  }
  function onResume(){
    var resume=document.getElementById("resume");
    var resumeNav=document.getElementById("resumeNav");
    disableDisplay();
    resume.style.display="flex";
    resumeNav.className="active";
  }
  function onContact(){
    var contact=document.getElementById("contactMe");
    var contactNav=document.getElementById("contactNav");
    disableDisplay();
    contact.style.display="flex";
    contactNav.className="active";
  }