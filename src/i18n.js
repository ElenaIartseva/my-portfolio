import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      name: 'Elena Iartseva',
      profession: 'web developer',
      linkGitHub: 'GitHub Link',
      linkBrowser: 'Browser Link',
      addedSoon: 'Will be added soon',
      contactMe: 'Contact me',
      currentLocation: 'Current location',
      RussiaKrasnodar: 'Russia, Krasnodar',
      status: 'Status',
      openToWork: 'open to work',
      stack: 'Stack',
      projects: 'Projects',
      contact: 'Contact',
      andOther: 'and other mini projects at',
      stackTitle: 'Stack',
      projectsList: {
        project2025: {
          title: 'My project 2025',
          description: `My code and creativity will be here soon. Project created to show an example of my code`
        },
        gameSchool: {
          title: 'Site for Game school',
          description: `Website for game development school, with a form of communication with the school by email`
        },
        gameCompany: {
          title: 'Site for Game company',
          description: `Website site for game company with admin panel to add/change/remove vacancies`
        },
        carxOnline: {
          title: 'Site for Game company',
          description: `Support and refactoring of the company’s existing website (changing data via admin panel, sending data from form to admin and email)`
        },
        carxStoreSupport: {
          title: 'Site part for Support',
          description: `Part of the site that helps the user to get technical support for the company’s products. Work in process`
        },
        meetUp: {
          title: 'GameDev MeetUp',
          description: `Website for the conference with the possibility to register for participation (application is sent from the registration form to email)`
        },
        support: {
          title: 'Technical support',
          description: `Personal user account with technical support communication function`
        },
        portfolio: {
          title: 'Portfolio web-developer',
          description: `The project demonstrates my skills and abilities. On the site it is possible to find information about all my projects and find all the necessary links to contact me`
        },
        project2024: {
          title: 'My project 2024',
          description: `Pet-project: The project demonstrates my skills and abilities`
        },
        calendar: {
          title: 'Calendar',
          description: `Pet-project: calendar (without using libraries) + added option to change theme`
        },
        kinopoiskFrontend: {
          title: 'Analogue Kinopoisk (frontend)',
          description: `Development of a site where you can find movies on request and save them in your personal account. Frontend`
        },
        kinopoiskBackend: {
          title: 'Analogue Kinopoisk (backend)',
          description: `Development of a site where you can find movies on request and save them in your personal account. Backend`
        },
        instagram: {
          title: 'Analogue Instagram',
          description: `Development of a site - an interactive page where you can add photos, delete them and put likes`
        },
        landing1: {
          title: 'Landing page',
          description: `This project introduces people to the most picturesque corners of Russia`
        },
        landing2: {
          title: 'Landing page',
          description: `The project is dedicated to teaching methods and techniques for quickly memorizing new information`
        }
      }
    }
  },
  ru: {
    translation: {
      name: 'Елена Ярцева',
      profession: 'веб-разработчик',
      linkGitHub: 'Ссылка на GitHub',
      linkBrowser: 'Ссылка на сайт',
      addedSoon: 'Будет добавлено скоро',
      contactMe: 'Мои контакты',
      currentLocation: 'Текущая локация',
      RussiaKrasnodar: 'Россия, Краснодар',
      status: 'Статус',
      openToWork: 'открыта для предложений о работе',
      stack: 'Стек',
      projects: 'Проекты',
      contact: 'Контакты',
      andOther: 'и другие мини проекты на',
      stackTitle: 'Стек',
      projectsList: {
        project2025: {
          title: 'Мой проект 2025',
          description: `Скоро здесь появится мой код и творчество. Проект создан, чтобы показать пример моего кода`
        },
        gameSchool: {
          title: 'Сайт для Школы разработки игр',
          description: `Сайт для школы разработки игр, с формой связи со школой по электронной почте`
        },
        gameCompany: {
          title: 'Сайт для игровой компании',
          description: `Сайт для игровой компании с админикой для добавления/изменения/удаления вакансий`
        },
        carxOnline: {
          title: 'Сайт для игровой компании',
          description: `Поддержка и рефакторинг существующего сайта компании (изменение данных через админ панель, отправка данных из формы в админку и на email)`
        },
        carxStoreSupport: {
          title: 'Часть сайта для тех.поддержки',
          description: `Часть сайта, помогающая пользователю получить техническую поддержку по продуктам компании. Работа в процессе`
        },
        meetUp: {
          title: 'GameDev MeetUp',
          description: `Cайт конференции с возможностью регистрации для участия (заявка отправляется из формы регистрации на электронную почту)`
        },
        support: {
          title: 'Техническая поддержка',
          description: `Личная учётная запись пользователя с функцией связи с технической поддержкой`
        },
        portfolio: {
          title: 'Портфолио веб-разработчика',
          description: `Проект демонстрирует мои навыки и способности. На сайте можно найти информацию обо всех моих проектах и найти все необходимые ссылки, чтобы связаться со мной`
        },
        project2024: {
          title: 'Мой проект 2024',
          description: `Pet-проект: Проект демонстрирует мои навыки и способности`
        },
        calendar: {
          title: 'Календарь',
          description: `Pet-проект: календарь (без использования библиотек) + добавлена опция изменения темы`
        },
        kinopoiskFrontend: {
          title: 'Аналог Кинопоиска (фронтенд)',
          description: `Разработка сайта, где вы можете найти фильмы по запросу и сохранить их в вашем личном аккаунте. Фронтенд`
        },
        kinopoiskBackend: {
          title: 'Аналог Кинопоиска (бэкенд)',
          description: `Разработка сайта, где вы можете найти фильмы по запросу и сохранить их в вашем личном аккаунте. Бэкенд`
        },
        instagram: {
          title: 'Аналог Instagram',
          description: `Разработка сайта - интерактивная страница, на которой можно добавлять фотографии, удалять их и накладывать симпатии`
        },
        landing1: {
          title: 'Лендинг',
          description: `Этот проект знакомит людей с самыми живописными уголками России`
        },
        landing2: {
          title: 'Лендинг',
          description: `Проект посвящен обучению методам и приемам быстрого запоминания новой информации`
        }
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
