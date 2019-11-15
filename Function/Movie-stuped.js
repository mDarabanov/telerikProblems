function stupidMovie (worstFilmEver, minuti) {
    return 'The worst film I have ever watched is ' + worstFilmEver + " I wasted "+minuti+" from my life.";
}

var container = function theBestMovie (greatFilmEver) {
    return 'The great film I hava ever watched is ' + greatFilmEver;
}    

function movie (comedy,movieName,zagubenoVreme,personName) {
    var result = `Hello my name is ${personName}. And I'm movie lover.`
    result += comedy(movieName,zagubenoVreme);
    console.log(result);
}

movie(container,"Talasami OOD","Iliana");
movie(stupidMovie,"Dart Veidar",150,"Iliana");

