/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    if (hours < 0 || hours > 23) {
        throw Error('Invalid param hours');
    }
    if (minutes < 0 || minutes > 59) {
        throw Error('Invalid param minutes');
    }
    if (interval < 0) {
        throw Error('Invalid param interval');
    }

    var dt = new Date((new Date(2000, 0, 1, hours, minutes).getTime()) + interval * 60000);

    return padLeft(dt.getHours(), '00') + ':' + padLeft(dt.getMinutes(), '00');

};

function padLeft(val, pad) {
    var str = "" + val;
    return pad.substring(0, pad.length - str.length) + str
}
