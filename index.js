const hamBurger = document.querySelector('#nav-button');
const cloSerX = document.querySelector('#close-navlist');
const mariMarzi = document.querySelector('#nav-list');
const navListItems = document.querySelectorAll('#nav-list > ul > li');
hamBurger.addEventListener('click', () => {
  mariMarzi.classList.remove('hide');
  mariMarzi.classList.add('mobile-menu');
});
cloSerX.addEventListener('click', () => {
  mariMarzi.classList.add('hide');
  mariMarzi.classList.remove('mobile-menu');
});

navListItems.forEach((item) => item.addEventListener('click', () => {
  mariMarzi.classList.add('hide');
  mariMarzi.classList.remove('mobile-menu');
}));
function createPopupWindow(project) {
  const popupWindow = document.createElement('div');
  popupWindow.classList.add('popup-window');
  popupWindow.innerHTML = `<div>
      <a id="close-popup"><img src="files/Icon.svg" alt="Close Button"></a>
      <h2 class="card-header">${project.name}</h2>
      <ul class="card-badges"></ul>`;
  project.techs.forEach((item) => {
    popupWindow.querySelector('ul').innerHTML += `<li>${item}</li>`;
  });
  popupWindow.querySelector('div').innerHTML += `
      <div class="img-placeholder"><img src="${project.imgSrc}" alt="The project preview"></div>
      <p class='card-desc'>${project.desc}</p>
      <div class="btns-container">
        <a class="card-button" href="${project.liveUrl}" target="_blank">See Live <i class="material-symbols-outlined">arrow_outward</i></a>
        <a class="card-button" href="${project.srcUrl}" target="_blank">See Source <i class="devicon-github-original"></i></a>
      </div>`;
  document.body.appendChild(popupWindow);
  document.querySelector('html').style.overflow = 'hidden';
  const closePopup = document.querySelector('#close-popup');
  closePopup.addEventListener('click', () => {
    popupWindow.remove();
    document.querySelector('html').style.overflow = 'auto';
  });
}

function createProjectCard(project, isItLast) {
  const newCard = document.createElement('div');

  if (isItLast === 1) {
    newCard.innerHTML += `<img src="${project.imgSrc}" alt="The Project Preview"></img>`;
    newCard.id = 'last-work';
    newCard.innerHTML += `<div class="card-body">
        <h2 class='card-header'>${project.name}</h2>
        <p class='card-desc'>${project.desc}</p>
        <ul class='card-badges'>`;
    project.techs.forEach((item) => {
      newCard.querySelector('ul').innerHTML += `<li>${item}</li>`;
    });
    newCard.querySelector('.card-body').innerHTML += '<a class=\'card-button\'>See Project</a></div>';
    document.querySelector('#works').appendChild(newCard);
  } else {
    newCard.classList.add('work');
    newCard.innerHTML += `
        <div>
          <h2 class='card-header'>${project.name}</h2>
          <p class='card-desc'>${project.briefDesc}</p>
          <ul class='card-badges'>`;
    project.techs.forEach((item) => {
      newCard.querySelector('ul').innerHTML += `<li>${item}</li>`;
    });
    newCard.innerHTML += '<a class="card-button">See Project</a></div>';
    newCard.style.background = `url('${project.imgSrc}') no-repeat`;
    document.querySelector('#works').appendChild(newCard);
  }
  const popupBtn = newCard.querySelector('a');
  popupBtn.addEventListener('click', () => {
    createPopupWindow(project);
  });
}

const firstProject = {
  name: 'Air Quality Index',
  briefDesc: 'Air Quality Index is a single page app that provide live data about the air quality in different cities.',
  desc: 'Air Quality Index is a single page app that provide live data about the air quality in different cities. The app uses an external API to fetch data and is built with React.JS, Redux.JS and JavaScript.',
  imgSrc: 'files/Img Placeholder.png',
  techs: ['React.JS', 'Redux.JS', 'JavaScript'],

};

const projects = [
  {
    name: 'Thrilling',
    briefDesc: 'An online books store where you can add your preffered books.',
    desc: 'Bookstore is books list page using an external API to store your preferred books with the ability to remove and add new books, the project is built with React.JS & Redux.JS.',
    imgSrc: '',
    techs: ['React.JS', 'Redux.JS', 'JavaScript'],

  },
  {
    name: 'Openbb',
    briefDesc: 'A single page app with 3 pages including a simple calculator.',
    desc: 'A single page app with 3 pages (Home, Calculator, Quotes). the app is built with Vanilla JavaScript and React.',
    imgSrc: '',
    techs: ['React.JS', 'JavaScript'],

  },
  {
    name: 'Grootpots',
    briefDesc: 'Simple tool to help organize your day. It simply lists the things that you need to do in the day.',
    desc: 'A multi pages web app about famous shows, it presents details about different shows and gives the user the ability to like or comment on their preferred show. The project was built with JavaScript ES6 and bundeled with Webpack.',
    imgSrc: '',
    techs: ['HTML', 'CSS', 'JavaScript', 'Webpack'],

  },
  {
    name: 'i love it',
    briefDesc: 'An app to store and manage scores of different users using an external API.',
    desc: 'Leaderboard is an app that shows the scores of different players, the scores and players infos are fetched from an external API, the user can add his name and score as well which will be sent and stored in the external API. The project was built using JavaScript and bundeled with webpack.',
    imgSrc: '',
    techs: ['JavaScript', 'Webpack'],

  },
  {
    name: 'ade up',
    briefDesc: 'Simple tool to help organize your day. It simply lists the things that you need to do in the day.',
    desc: 'Simple Tool built with JavaScript and bundled with Webpack, that helps organize your day. It simply lists the things that you need to do and allows you to mark them as complete and also remove or add new tasks to the list.',
    imgSrc: '',
    techs: ['CSS', 'HTML', 'JavaScript', 'Webpack'],
  },
  {
    name: 'NON',
    briefDesc: '2 Pages Website Containing Some Informations About The Global Climate Conference COP22 Held in Marrakech 2016.',
    desc: 'A 2 pages Website Containing Some Informations About The Global Climate Conference COP22 Held in Marrakech 2016. The website was built using plain HTML 5, CSS 3 and JavaScript.',
    imgSrc: '',
    techs: ['HTML', 'CSS', 'JavaScript'],
  },
];

createProjectCard(firstProject, 1);

projects.forEach((project) => {
  createProjectCard(project);
});