// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var normalizeHashTags = require('./index.js');

console.log(normalizeHashTags(['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming']));
console.log(normalizeHashTags([]));

assert.deepEqual(
    normalizeHashTags(['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming']),
    'web, coursera, javascript, script, programming',
    'Список "web, coursera, JavaScript, Coursera, script, programming"' +
    ' содержит хэштеги "web, coursera, javascript, script, programming"'
);

assert.deepEqual(
    normalizeHashTags([]),
    '',
    'empty string'
);

console.info('OK!');
