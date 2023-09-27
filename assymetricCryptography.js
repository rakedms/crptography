const crypto= require('crypto')
const {publicKey,privateKey}=crypto.generateKeyPairSync('rsa',{
    modulusLength:2048,
    publicKeyEncoding:{
        type:'spki',
        format:'pem'
    },
    privateKeyEncoding:{
        type:'pkcs8',
        format:'pem'
    }
})
console.log("Public Key:", publicKey,"\n", "Private Key:",privateKey)

const plainText='Hello Crypto'
const encryptedData=crypto.publicEncrypt(publicKey,Buffer.from(plainText,'utf8'))
console.log("Encrypted Data:", encryptedData)
const decrptedData=crypto.privateDecrypt(privateKey,encryptedData)
console.log("Decrypted Data:", decrptedData)
const transferredText=decrptedData.toString('utf8')
console.log("Transferred Text:", transferredText)

