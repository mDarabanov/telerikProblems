var crew = [];
var captain = 'Mal';
var second = 'Zoe';
var pilot = 'Wash';
var companion = 'Inara';
var mercenary = 'Jayne';
var mechanic = 'Kaylee';
crew = [captain, second, pilot, companion, mercenary, mechanic];

var crewNewMembers = [];
var doctor = 'Simon';
var sister = 'River';
var shepherd = 'Book';

crewNewMembers = [doctor, sister, shepherd];

crew.push(...crewNewMembers);

console.log(crew);
