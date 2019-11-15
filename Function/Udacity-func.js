

var cry = function iam(cry){
    return 'boohoo!';
};

console.log(cry());

var cry  = function iAmCrying (crying) {
    var whatIamDoing = "";
    for (var i = 0; i < crying; i++){
        whatIamDoing += "boohoo";
    }
    return whatIamDoing +='!';
};

console.log(cry(1));