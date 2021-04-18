// hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
/*Portfolio*/
let buttonPortfolio = document.querySelector('#portfolio');
let containerPortfolio = document.querySelector('#container_portfolio');

buttonPortfolio.addEventListener('click', () => {
  containerPortfolio.scrollIntoView({ behavior: 'smooth' });
});


/*about_me*/
let buttonAboutmee = document.querySelector('#aboutmee');
let conteineAboutme = document.querySelector('#conteiner_aboutme');

buttonAboutmee.addEventListener('click', () => {
  conteineAboutme.scrollIntoView({ behavior: 'smooth' });
});


/*Skill*/
let buttonSkillss = document.querySelector('#skillss');
let containerSkills = document.querySelector('#container_skills');

buttonSkillss.addEventListener('click', () => {
  containerSkills.scrollIntoView({ behavior: 'smooth' });
});

/*Contact*/
let buttonContactss = document.querySelector('#contactss');
let contact = document.querySelector('#contact');

buttonContactss.addEventListener('click', () => {
  contact.scrollIntoView({ behavior: 'smooth' });
});

/*Top*/
let buttonTop = document.querySelector('#top');
let home = document.querySelector('#home');

buttonTop.addEventListener('click', () => {
  home.scrollIntoView({ behavior: 'smooth' });
});

