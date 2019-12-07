function stupidMovie(worstFilmEver, minutes) {
  return (
    'The worst film I have ever watched is ' +
    worstFilmEver +
    ' I wasted ' +
    minutes +
    ' from my life.'
  );
}

var container = function theBestMovie(greatFilmEver) {
  return 'The great film I have ever watched is ' + greatFilmEver;
};

function movie(comedy, movieName, lostTime, personName) {
  var result = `Hello my name is ${personName}. And I'm movie lover.`;
  result += comedy(movieName, lostTime);
  console.log(result);
}

movie(container, 'Talasami OOD', 'Iliana');
movie(stupidMovie, 'Dart Veidar', 150, 'Iliana');
