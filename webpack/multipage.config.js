const path = require('path');

const pathSrc = path.join(__dirname, '../src');

const result = {};

result.entry = {
  // "main": path.join(__dirname, '../src/index.js')
  //  пути к js файлам (программная часть для html) которые должны быть связаны с html файлами
  //  имя результирующих бандлов: путь к первоначальному файлу (являющийся корневым для его формирования)

  'main': path.join(pathSrc, 'main.js'),
  'donate': path.join(pathSrc, 'donate.js'),
};

result.pages = [
  // Связь между js бандлами и html файлами
  // { chunks:  [массив. Содержит бандлы, которые должны связываться с html файлом],
  // page: относительный путь к результирующему html относительно корня web-сервера, (конечного файла после обработки)
  // template: путь к исходному html файлу), },

  {chunks: ['main'], page: 'index.html', template: path.join(pathSrc, './pages/desktop-petstory.html'),},
  {chunks: ['donate'], page: 'desktop-donate.html', template: path.join(pathSrc, './pages/desktop-donate.html'),},
];

module.exports = result;
