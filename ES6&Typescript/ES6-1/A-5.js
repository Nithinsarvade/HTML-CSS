var add = function (a, b) {
    if (a === void 0) { a = 15; }
    if (b === void 0) { b = 6; }
    console.log(a + b);
};
add();
add(10);
//sub
var userWithFriends = function (userName) {
    var userFriends = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        userFriends[_i - 1] = arguments[_i];
    }
    console.log('{userName: ${userName},list of Friends is: "${userFriends}"}');
};
userWithFriends('sai', 'jash', 'nithin', 'vinith', 'malli');
userWithFriends('sai', 'sandeep', 'uma', 'vasanth');
//sub
var printCapitalNames = function () {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    var result = [];
    names.forEach(function (element) {
        result.push(element.toUpperCase());
    });
    console.log("Names in Upper Case: \"".concat(result, "\""));
};
var namesList = ['sai', 'nithin', 'vinith', 'malli'];
console.log(namesList);
printCapitalNames.apply(void 0, namesList);
