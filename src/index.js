module.exports = function reverse (n) {
    let arr1 =  [];
    let str
    let arr = String(n).split('');
    if (arr.includes('-')){
        arr.shift()
    }
    arr.reverse()
    arr.forEach(function(item, index) {
    arr1.push(arr[index])
    str = arr1.join('')
    
    })
    return str
}
