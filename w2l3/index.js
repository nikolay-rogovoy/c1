var COMMAND = {
    ADD: 'ADD',
    REMOVE_PHONE: 'REMOVE_PHONE',
    SHOW: 'SHOW'
};

// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var name;
    var i;
    switch (getCommand(command)) {
        case COMMAND.ADD:
            name = getName(command);
            var phones = splitPhones(getPhones(command));
            if (phoneBook.hasOwnProperty(name)) {
                for (i = 0; i < phones.length; i++) {
                    phoneBook[name].push(phones[i]);
                }
            } else {
                phoneBook[name] = phones;
            }
            break;
        case COMMAND.REMOVE_PHONE:
            var phoneToRemove = getRemovePhone(command);
            for (name in phoneBook) {
                if (phoneBook[name].indexOf(phoneToRemove) !== -1) {
                    phoneBook[name].splice(phoneBook[name].indexOf(phoneToRemove), 1);
                    return true;
                }
            }
            return false;
        case COMMAND.SHOW:
            var showResult = [];
            var names = Object.keys(phoneBook).sort();
            for (i = 0; i < names.length; i++) {
                name = names[i];
                if (phoneBook[name] && phoneBook[name].length) {
                    showResult.push(name + ': ' + phoneBook[name].join(', '));
                }
            }
            return showResult;
        default:
            throw new Error('Нет такой команды = ' + command);
            break
    }
};

function getCommand(command) {
    var pattern = /^\w+/;
    if (pattern.test(command)) {
        return command.match(pattern)[0];
    } else {
        throw new Error('Неправильная команда!');
    }
}

function getName(command) {
    return command.match(/^\w+\s(\w+)/)[1];
}

function getPhones(command) {
    return command.match(/^\w+\s\w+\s([\d-, ]+)+$/)[1];
}

function splitPhones(phones) {
    if (phones) {
        return phones.match(/[\d-]+\b/g) || [];
    } else {
        return [];
    }
}

function getRemovePhone(command) {
    return command.match(/^REMOVE_PHONE ([\d-, ]+)+$/)[1];
}
