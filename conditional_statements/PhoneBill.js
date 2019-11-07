var input = [
    '25',
    '95'

];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

function phoneBill(messages, minutes) {
    let additionalMessages = 0;
    let addMessagesPrice = 0;
    let additionalMinutes = 0;
    let additionalMinutesPrice = 0;
    if (messages > 20) {
        additionalMessages = messages - 20;
        addMessagesPrice = additionalMessages * 0.06;
    } if (minutes > 60) {
        additionalMinutes = minutes - 60;
        additionalMinutesPrice = additionalMinutes * 0.10;
    }
    let additionalTaxes = (additionalMinutesPrice + addMessagesPrice) * 20 / 100;
    let total = additionalMinutesPrice + addMessagesPrice + additionalTaxes + 12.00;

    return `${additionalMessages} additional messages for ${addMessagesPrice.toFixed(2)} levas
${additionalMinutes} additional minutes for ${additionalMinutesPrice.toFixed(2)} levas
${additionalTaxes.toFixed(2)} additional taxes
${total.toFixed(2)} total bill`;
}

let messages = Number(gets());
let minutes = Number(gets());
print(phoneBill(messages,minutes));