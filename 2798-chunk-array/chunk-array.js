/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let chunkedArr = [];
    
    for (let i = 0; i < arr.length; i += size) {
        chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
};
