const crypto = require('crypto')

const alice = crypto.getDiffieHellman('modp15')
const bob = crypto.getDiffieHellman('modp15')

alice.generateKeys()
bob.generateKeys()

const aliceSecrete = alice.computeSecret(bob.getPublicKey(),null, 'hex')
const bobSecrete = bob.computeSecret(alice.getPublicKey(),null,'hex')

console.log(aliceSecrete == bobSecrete);
console.log(aliceSecrete);
console.log(bobSecrete);


