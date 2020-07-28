const sm2 = require('@salaku/sm-crypto').sm2;

function generateKeyStore(password, privatekey) {
    publickey = sm2.getPKFromSK(privatekey);

}