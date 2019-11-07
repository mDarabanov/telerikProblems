var input= [
    'Telerik Academy',
    '31 Aleksandar Malinov, Sofia',
    '+0359664212',
    '',
    'Veshev'
];

let print = this.print || console.log;
let gets = this.gets || ((arr,index) => () => arr[index++]) (input,0);

let companyName = gets();
let companyAdress = gets();
let companyNumber = gets();
let faxNumber = gets() || '(no fax)';
//if (faxNumber === '') {
   // faxNumber = '(no fax)';
//}

print ('Company name:' +  companyName);
print ('Company adress:' + companyAdress);
print ('Company Number:' +companyNumber);
print ('Fax Number:' + faxNumber);