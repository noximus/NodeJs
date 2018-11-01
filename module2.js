
var a = "you found me";
var b = "you found me at b";
module.exports.a = a;
exports.b = b;
module.exports.c = function() {
    console.log('module 2 of 3');
}

// output { a: 'you found me', b: 'you found me at b', c: [Function] }