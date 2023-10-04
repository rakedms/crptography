const crypto = require('crypto');

const dataToHash = Buffer.from("Hello World", 'utf8'); // Convert string to Buffer

function hashData(data) {
    const hash = crypto.createHash('sha256');
    hash.update(data);
    return hash.digest();
}

const hashedData = hashData(dataToHash);

const {privateKey}=crypto.generateKeyPairSync('rsa',{
    modulusLength:2048,
    // publicKeyEncoding:{
    //     type:'spki',
    //     format:'pem'
    // },
    privateKeyEncoding:{
        type:'pkcs8',
        format:'pem'
    }
})


function signData(data, privateKey) {
    const sign = crypto.createSign('RSA-SHA256');
    sign.update(data);
    const signedData=sign.sign(privateKey)
    return signedData;
}

const DataAfterSigning = signData(hashedData, privateKey);
// const BufferredData=Buffer.from(signature,'utf8')
console.log('Signed Data:', DataAfterSigning);
console.log(privateKey)