function letterCapialize(str) {
    
    var words = words.split('');

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1);
    }
    return words;
}

letterCapialize(readline);