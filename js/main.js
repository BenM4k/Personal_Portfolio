const burgeur = document.querySelector('.burgeur');
const navbar = document.querySelector('header');
const links = document.querySelectorAll('.check');
burgeur.addEventListener('click', () => {
  navbar.classList.toggle('active');
  burgeur.classList.toggle('bx-x');
});
links.forEach((link) => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    burgeur.classList.remove('bx-x');
  });
});

const workSection = document.querySelector('.works');

const projects = [
  {
    projectId: 'projectOne',
    title: 'Multi-Post Stories header',
    name: 'Ben',
    body: `header A daily selection of privately 
    personalized reads; no accounts 
    or sign-ups required. has been 
    the industry's standard dummy 
    text ever since the 1500s, when 
    an unknown printer took a 
    standard dummy text.`,
    techs: ['html', 'css', 'Bootstrap', 'Ruby'],
    img: 'assets/Img Placeholder.png',
    liveLink: 'https://benm4k.github.io/Personal_Portfolio/',
    sourceLink: 'https://github.com/BenM4k/Personal_Portfolio',
  },

  {
    projectId: 'projectTwo',
    title: 'Keeping track of hundreds  of components website',
    name: 'Luigi',
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
        
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    techs: ['html', 'Bootstrap', 'Ruby on Rails'],
    img: 'assets/Snapshoot Portfolio.png',
    liveLink: 'https://benm4k.github.io/Personal_Portfolio/',
    sourceLink: 'https://github.com/BenM4k/Personal_Portfolio',
  },

  {
    projectId: 'projectThree',
    title: 'Multi-Post Stories pj1',
    name: 'Luigi',
    body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
        
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    techs: ['html', 'Bootstrap', 'Ruby on Rails'],
    img: 'assets/Img Placeholder.png',
    liveLink: 'https://benm4k.github.io/Personal_Portfolio/',
    sourceLink: 'https://github.com/BenM4k/Personal_Portfolio',
  },
];

function createWork(project) {
  const work = `
  <div class="work1 flex_column">
    <img src="${project.img}" alt="placeholder">
    <div class="work1_head">
      <h2 class="work1_title">${project.title}</h2>
      <p class="work1_text">${project.body}</p>
      <h3>${project.name}</h3>
      <ul class="work1_list flex">
        ${project.techs.map((tech) => (
    `<li class="work_button">${tech}</li>`
  )).join('')}
      </ul>
      <button class="work1_button button_enabled see_project ${project.projectId}" id="${project.projectId}">See project</button>
    </div>      
  </div>`;

  return work;
}

for (let i = 0; i < projects.length; i += 1) {
  const work = createWork(projects[i]);
  workSection.innerHTML += work;
}

const works = document.querySelector('#works');
const projectButton = document.querySelectorAll('.see_project');
const popupSection = document.querySelector('.popup');

function createPop(project = null) {
  const popup = `
  <div class="bx bx-menu close_btn bx-x">
      <i class="fa fa-bars"></i>
  </div>

  <div class="popup_heading">
    <h2 id="project_title">${project.title}</h2>
    <ul class="flex project_ul">
    ${project.techs.map((tech) => (
    `<li class="work_button">${tech}</li>`
  )).join('')}
    </ul>
    </div>
    <div class="popup_content flex">
        <img src="${project.img}" alt="placeholder">
        <div class="popup_content_desc">
            <p class="work1_text">${project.body}</p>
            <ul class="flex">
                <li class="button_enabled popup_content_btn"><a href="${project.liveLink}">See live <img src="assets/Icon-see live.svg" alt="see_live"></a></li>
                <li class="button_enabled popup_content_btn"><a href="${project.sourceLink}">See source <img src="assets/Icon -GitHub.png" alt="icon_github"></a></li>
            </ul>
        </div>
    </div>
  `;

  return popup;
}

function togglePopup() {
  works.classList.toggle('active');
}

projectButton.forEach((btn) => {
  btn.addEventListener('click', togglePopup);
});

projectButton.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('projectOne')) {
      const pop = createPop(projects[0]);
      popupSection.innerHTML = pop;
      document.querySelector('.close_btn').addEventListener('click', () => {
        works.classList.remove('active');
      });
    } else if (btn.classList.contains('projectTwo')) {
      const pop = createPop(projects[1]);
      popupSection.innerHTML = pop;
      document.querySelector('.close_btn').addEventListener('click', () => {
        works.classList.remove('active');
      });
    } else if (btn.classList.contains('projectThree')) {
      const pop = createPop(projects[2]);
      popupSection.innerHTML = pop;
      document.querySelector('.close_btn').addEventListener('click', () => {
        works.classList.remove('active');
      });
    }
  });
});

function isLowerCase(email) {
  const mail = email.value;
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return emailRegex.test(mail) && mail.toUpperCase() !== mail;
}
const email = document.getElementById('email');
document.querySelector('#submit').addEventListener('submit', (e) => {
  if (isLowerCase(email) !== true) {
    e.preventDefault();
    const error = document.querySelector('small');
    error.textContent = 'Please ensure email is in lower case';
  }
});

function storeForm() {
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');

  const form = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('form', JSON.stringify(form));
}

document.querySelector('#submit').addEventListener('submit', storeForm);

window.onload = () => {
  const formData = JSON.parse(localStorage.getItem('form'));
  if (formData) {
    document.querySelector('#name').value = formData.name;
    document.querySelector('#email').value = formData.email;
    document.querySelector('#message').value = formData.message;
  }
};