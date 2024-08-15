function caesarCipher () {
    const lowcaseStandard = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const upcaseStandard = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let shiftedLowcase = new Array(26).fill('');
    let shitedUpcase = new Array(26).fill('');
    const shift = 3;
    //shift 2 alphabet array depending on shift
    for(let i = shift,j =-shift; j<(lowcaseStandard.length)-1; i++,j++){
        //console.log(lowcaseStandard[i])
    }
    shiftedLowcase[3] = lowcaseStandard[3]
    console.log(lowcaseStandard[4])
    console.log(shiftedLowcase)
    //split string
    //convert each char to respective index equivalent it standard arrays
    //then retrieve same index number to shift then join then return encryted string
}
caesarCipher();
//module.exports = caesarCipher;