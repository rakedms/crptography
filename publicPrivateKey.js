// const crypto= require('crypto')
// // const curveName='secp256k1'

// const {publicKey,privateKey}= crypto.generateKeyPairSync('ec',{
//     namedCurve: 'secp256k1',
//     publicKeyEncoding: {
//         type:'spki',
//         format:'pem'
//     },
//     privateKeyEncoding: {
//         type:'pkcs8',
//         format:'pem'
//     }

// })

const crypto=require('crypto')
const {publicKey,privateKey}= crypto.generateKeyPairSync('rsa',{
    publicKeyEncoding:{
        type:'pem'
    },
    privateKeyEncoding:{
        type:'pem'
    }
})

console.log(publicKey,",", privateKey)