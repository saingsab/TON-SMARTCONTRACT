import { Address } from "@ton/core";


// const address1 = Address.parse('EQCjk1hh952vWaE9bRguFkAhDAL5jj3xj9p0uPWrFBq_GEMS');
const address2 = Address.parse('0:a3935861f79daf59a13d6d182e1640210c02f98e3df18fda74b8f5ab141abf18');

// toStrings arguments: urlSafe, bounceable, testOnly
// defaults values: true, true, false

console.log(address2.toString()); // EQCjk1hh952vWaE9bRguFkAhDAL5jj3xj9p0uPWrFBq_GEMS
console.log(address2.toRawString()); // 0:a3935861f79daf59a13d6d182e1640210c02f98e3df18fda74b8f5ab141abf18