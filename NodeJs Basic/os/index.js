const os = require('os');
console.log('CPU Architecture :> '+ os.arch());

// Here Memory given in  byte
console.log('Free Memory :> '+ os.freemem() );

console.log('Total memory :> ' + os.totalmem());

console.log('Network Interface :> ' + os.networkInterfaces());
// console.log('Network Interface :> ' + JSON.stringify(os.networkInterfaces()));

console.log('OS default tempt dir :>' + os.tmpdir());

console.log('Endianess :>' + os.endianness());

console.log('Hostname :> '+ os.hostname());

console.log('OS type :> ' + os.type());

console.log('os platform :>' + os.platform());

console.log("os platform :>" + os.platform());

console.log('os release :> ' + os.release());