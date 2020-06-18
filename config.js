'use strict';

module.exports = {
  url: 'https://piraces.dev',
  pathPrefix: '/',
  title: 'Piraces Blog',
  subtitle: 'Software developments & tech related blog',
  copyright: '© All rights reserved.',
  disqusShortname: 'piraces-dev',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-136840526-1',
  menu: [
    {
      label: 'Posts',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Personal developments',
      path: '/pages/developments'
    }
  ],
  author: {
    name: 'Raúl Piracés',
    photo: '/photo',
    bio: 'Software Engineer 👨‍💻🎧 & Full Stack developer. Working on .NET Core environments & JS Frameworks',
    contacts: {
      email: 'raul@piraces.dev',
      devto: 'piraces',
      stackoverflow: '4064162',
      twitter: 'piraces_',
      github: 'piraces',
      key: 'https://keybase.io/piraces/pgp_keys.asc',
      rss: 'https://piraces.dev/rss.xml'
    }
  }
};
