import myProject2025 from 'images/projects/my-project2025.webp';
import europe from 'images/projects/EU.webp';
import school from 'images/projects/school.webp';
import carx from 'images/projects/carx.webp';
import store from 'images/projects/store.webp';
import conference from 'images/projects/conference.webp';
import support from 'images/projects/support.webp';
import myProject from 'images/projects/my-project.webp';
import portfolio from 'images/projects/portfolio.webp';
import calendar from 'images/projects/calendar.webp';
import movies from 'images/projects/movies.webp';
import movies2 from 'images/projects/movies2.webp';
import mesto from 'images/projects/mesto.webp';
import russianTravel from 'images/projects/russian-travel.webp';
import learn from 'images/projects/learn.webp';

import js from 'images/stack/js.svg';
import react from 'images/stack/react.svg';
import ts from 'images/stack/ts.svg';
import html from 'images/stack/html.svg';
import css from 'images/stack/css.png';
import scss from 'images/stack/scss.svg';
import storybook from 'images/stack/storybook.svg';
import jest from 'images/stack/jest.svg';
import reactTL from 'images/stack/react-tl.svg';
import eslint from 'images/stack/eslint.svg';
import stylelint from 'images/stack/stylelint.svg';
import fsd from 'images/stack/fsd.svg';
import redux from 'images/stack/redux.svg';
import rest from 'images/stack/rest.png';
import node from 'images/stack/node.svg';
import express from 'images/stack/express.png';
import mongo from 'images/stack/mongo.png';
import webpack from 'images/stack/webpack.svg';
import postman from 'images/stack/postman.svg';
import npm from 'images/stack/npm.svg';
import figma from 'images/stack/figma.svg';
import calendar1 from 'images/stack/calendar.svg';
import calendar2 from 'images/stack/schedule-calendar.svg';
import github from 'images/stack/github.svg';
import docker from 'images/stack/docker.svg';
import strapi from 'images/stack/strapi.svg';
import jira from 'images/stack/jira.svg';
import tiptap from 'images/stack/editor.svg';

import mail from 'images/icons/mail.svg';
import githubLink from 'images/icons/github.svg';
import telegram from 'images/icons/telegram.svg';
import cv from 'images/icons/cv.svg';

export const projectsData = {
  project2025: {
    id: 0,
    stack: ['Next, React, TypeScript'],
    browser: 'https://my-project-2025-ten.vercel.app',
    github: 'https://github.com/ElenaUstimenko/my-project-2025',
    image: myProject2025
  },
  gameSchool: {
    id: 1,
    stack: ['React, TypeScript, SCSS, Next'],
    browser: 'https://xlab-game.com/',
    image: school
  },
  gameCompany: {
    id: 2,
    stack: ['React, TypeScript, SCSS, Strapi'],
    browser: 'https://carx-europe.com/',
    image: europe
  },
  carxOnline: {
    id: 3,
    stack: [
      'frontend: React, TypeScript, Next, CSS-in-JS, backend: PHP, Laravel, admin: Vue, TypeScript'
    ],
    browser: 'https://carx-online.com/',
    image: carx
  },
  carxStoreSupport: {
    id: 4,
    stack: [
      'frontend: React, TypeScript, Next, backend: Java, admin: React Admin'
    ],
    browser: 'https://carx-store.com/support',
    image: store
  },
  meetUp: {
    id: 5,
    stack: ['React, TypeScript, SCSS'],
    browser: 'https://youtu.be/sIHjWfsTQT0',
    image: conference
  },
  support: {
    id: 6,
    stack: ['React, SCSS, classnames'],
    github: 'https://github.com/ElenaUstimenko/test-task-for-CarX-Technologies',
    image: support
  },
  portfolio: {
    id: 7,
    stack: ['React, CSS, BEM, Prettier, i18n'],
    github: 'https://github.com/ElenaUstimenko/my-portfolio',
    image: portfolio
  },
  project2024: {
    id: 8,
    stack: [
      'Webpack, React, TypeScript, SCSS, classnames, alias, mixins, i18n, theme switcher, ESLint, Stylelint, Loader, Error Boundary React, Jest, React Testing Library, Storybook'
    ],
    github: 'https://github.com/ElenaUstimenko/my-project',
    image: myProject
  },
  calendar: {
    id: 9,
    stack: ['React, TypeScript'],
    github: 'https://github.com/ElenaUstimenko/calendar--light-dark-theme',
    image: calendar
  },
  kinopoiskFrontend: {
    id: 10,
    stack: [
      'HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Postman, Git'
    ],
    github: 'https://github.com/ElenaUstimenko/movies-explorer-frontend.git',
    image: movies
  },
  kinopoiskBackend: {
    id: 11,
    stack: [
      'HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Postman, Git'
    ],
    github: 'https://github.com/ElenaUstimenko/movies-explorer-api.git',
    image: movies2
  },
  instagram: {
    id: 12,
    stack: ['React, Node.js, Express, MongoDB, Postman, Git'],
    github: 'https://github.com/ElenaUstimenko/react-express-mesto-full',
    image: mesto
  },
  landing1: {
    id: 13,
    stack: ['VanillaJS, HTML, CSS, flex, grid, BEM'],
    github: 'https://github.com/ElenaUstimenko/russian-travel',
    image: russianTravel
  },
  landing2: {
    id: 14,
    stack: ['VanillaJS, HTML, CSS, BEM'],
    github: 'https://github.com/ElenaUstimenko/how-to-learn',
    image: learn
  }
};

export const stackList = [
  {
    title: 'Java Script',
    image: js
  },
  {
    title: 'React',
    image: react
  },
  {
    title: 'Type Script',
    image: ts
  },
  {
    title: 'Next.js',
    image: node
  },
  {
    title: 'HTML5',
    image: html
  },
  {
    title: 'CSS3',
    image: css
  },
  {
    title: 'SCSS',
    image: scss
  },
  {
    title: 'Storybook',
    image: storybook
  },
  {
    title: 'React-Admin',
    image: reactTL
  },
  {
    title: 'Strapi',
    image: strapi
  },
  {
    title: 'TipTap',
    image: tiptap
  },
  {
    title: 'Figma',
    image: figma
  },
  {
    title: 'Docker',
    image: docker
  },
  {
    title: 'NPM',
    image: npm
  },
  {
    title: 'GitHub',
    image: github
  },
  {
    title: 'Jest',
    image: jest
  },
  {
    title: 'Eslint',
    image: eslint
  },
  {
    title: 'Stylelint',
    image: stylelint
  },
  {
    title: 'FSD',
    image: fsd
  },
  {
    title: 'Redux',
    image: redux
  },
  {
    title: 'REST API',
    image: rest
  },
  {
    title: 'Node.js',
    image: node
  },
  {
    title: 'Express.js',
    image: express
  },
  {
    title: 'MongoDB',
    image: mongo
  },
  {
    title: 'Webpack',
    image: webpack
  },
  {
    title: 'Postman',
    image: postman
  },
  {
    title: 'Jira',
    image: jira
  }
  // {
  //   title: 'Linear',
  //   image: calendar1
  // },
  // {
  //   title: 'Kaiten',
  //   image: calendar2
  // }
];

export const contactList = [
  {
    title: 'telegram',
    image: telegram,
    text: '@elena_6464',
    link: 'https://t.me/elena_6464'
  },
  {
    title: 'gitHub',
    image: githubLink,
    text: 'ElenaIartseva',
    link: 'https://github.com/ElenaIartseva'
  },
  {
    title: 'email',
    image: mail,
    text: 'elena.iartseva64@ gmail.com',
    link: 'mailto:elena.iartseva64@gmail.com'
  },
  {
    title: 'CV',
    image: cv,
    text: 'CV',
    link: 'https://drive.google.com/file/d/15tJQCAF3HuZ26Pq7Q53GBI3QFHPc2Cwk/view?usp=drive_link'
  }
];
