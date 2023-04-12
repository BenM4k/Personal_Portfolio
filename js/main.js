const projects = {
  projectHeader: {
    title: 'Multi-Post Stories header',
    body: `header A daily selection of privately 
    personalized reads; no accounts 
    or sign-ups required. has been 
    the industry's standard dummy 
    text ever since the 1500s, when 
    an unknown printer took a 
    standard dummy text.`,
    button: [
      'html', 'css', 'Bootstrap', 'Ruby',
    ],
  },

  projectOne: {
    title: 'Multi-Post Stories pj1',
    body: `pj1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
        
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    button: [
      'html', 'Bootstrap', 'Ruby on Rails',
    ],
  },

  projectTwo: {
    title: 'Multi-Post Stories pj2',
    body: `pj2 A daily selection of privately 
    personalized reads; no accounts 
    or sign-ups required. has been 
    the industry's standard dummy 
    text ever since the 1500s, when 
    an unknown printer took a 
    standard dummy text.`,
    button: [
      'html', 'css',
    ],
  },
  projectThree: {
    title: 'Multi-Post Stories pj3',
    body: `pj3 A daily selection of privately 
    personalized reads; no accounts 
    or sign-ups required. has been 
    the industry's standard dummy 
    text ever since the 1500s, when 
    an unknown printer took a 
    standard dummy text.`,
    button: [
      'Bootstrap', 'Ruby',
    ],
  },
  projectFour: {
    title: 'Multi-Post Stories pj4',
    body: ` pj4 A daily selection of privately 
    personalized reads; no accounts 
    or sign-ups required. has been 
    the industry's standard dummy 
    text ever since the 1500s, when 
    an unknown printer took a 
    standard dummy text.`,
    button: [
      'html', 'css', 'Bootstrap', 'Ruby',
    ],
  },
  projectFive: {
    title: 'Multi-Post Stories pj5',
    body: `pj5 A daily selection of privately 
    personalized reads; no accounts 
    or sign-ups required. has been 
    the industry's standard dummy 
    text ever since the 1500s, when 
    an unknown printer took a 
    standard dummy text.`,
    button: [
      'html', 'css', 'Bootstrap',
    ],
  },
  projectSix: {
    title: 'Multi-Post Stories pj6',
    body: `pj6 A daily selection of privately 
    personalized reads; no accounts 
    or sign-ups required. has been 
    the industry's standard dummy 
    text ever since the 1500s, when 
    an unknown printer took a 
    standard dummy text.`,
    button: [
      'html', 'css', 'Ruby',
    ],
  },

};

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

const work = document.querySelector('#works');
const projectTitle = document.querySelector('#project_title');
const projectBody = document.querySelector('.project_body');
const projectButton = document.querySelectorAll('.see_project');
let project = [];

function togglePopup() {
  work.classList.toggle('active');
}

projectButton.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('work1_button')) {
      project = 'projectHeader';
    } else if (btn.classList.contains('project1')) {
      project = 'projectOne';
    } else if (btn.classList.contains('project2')) {
      project = 'projectTwo';
    } else if (btn.classList.contains('project3')) {
      project = 'projectThree';
    } else if (btn.classList.contains('project4')) {
      project = 'projectFour';
    } else if (btn.classList.contains('project5')) {
      project = 'projectFive';
    } else if (btn.classList.contains('project6')) {
      project = 'projectSix';
    }

    projectTitle.textContent = projects[project].title;
    projectBody.textContent = projects[project].body;
  });
});

projectButton.forEach((btn) => {
  btn.addEventListener('click', togglePopup);
});

document.querySelector('.close_btn').addEventListener('click', () => {
  work.classList.remove('active');
});