/**
 * @param {string[]} hashtags
 * @returns {string}
 */
module.exports = function (hashtags) {
    return hashtags.map(toLowerCase).filter(onlyUnique).join(', ');
};
/**
 * @param {string} value
 * @param {number} index
 * @param {Array} self
 * @returns {boolean}
 */
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
/**
 * @param {string} value
 * @returns {string}
 */
function toLowerCase(value) {
    return value.toLowerCase();
}
