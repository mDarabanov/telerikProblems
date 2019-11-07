var input = [
    'December',
    '22'

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

function fourSeasons(month, day) {
    var season;

    switch (month) {
        case 'January':
        case 'February':
        case 'March':
            if ((day < 20 && month == 'March') || (month != 'March'))   {
                season = 'Winter'; 
                break;
            }
        case 'April':
        case 'May':
        case 'June':
             if  ((day < 21 && month == 'June') || (month != 'June'))   {
                    season = 'Spring'; 
                    break;
            }
        case 'July':
        case 'August':
        case 'September':
                if  ((day < 22 && month == 'September') || (month != 'September'))   {
                    season = 'Summer'; 
                    break;
            } 
        case 'October':
        case 'November':
        case 'December':
                if  ((day < 21 && month == 'December') || (month != 'December'))   {
                    season = 'Autumn'; 
                    
            }  else {
                season = 'Winter'
            }
            
    }
    return season;
}

let month = gets();
let day = Number(gets());

print(fourSeasons(month, day));