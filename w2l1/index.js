/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var pattern = /#[\w]+/ig;
    var result = tweet.match(pattern);
    if (result) {
        return result.map(f);
    } else {
        return [];
    }
};

function f(x) {
    return x.replace('#', '');
}
