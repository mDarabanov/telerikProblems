var input = [
    '1958'

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
function chiniseZodiac(year) {
    let zodiac;
    let reminder = year % 12;
    switch (reminder) {
        case 0:
            zodiac = 'Monkey'; break;
        case 1:
            zodiac = 'Rooster'; break;
        case 2:
            zodiac = 'Dog'; break;
        case 3:
            zodiac = 'Pig'; break;
        case 4:
            zodiac = 'Rat'; break;
        case 5:
            zodiac = 'Ox'; break;
        case 6:
            zodiac = 'Tiger'; break;
        case 7:
            zodiac = 'Hare'; break;
        case 8:
            zodiac = 'Dragon'; break;
        case 9:
            zodiac = 'Snake'; break;
        case 10:
            zodiac = 'Horse'; break;
        case 11:
            zodiac = 'Sheep'; break;
    }
    return zodiac;
}

print(chiniseZodiac(Number(gets())));