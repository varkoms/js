// Modulos externos

const os = require('os')

// Operaciones con el sistema operativo
console.log(os.platform())
console.log('arch: ', os.arch())
console.log('free mem: ', os.freemem(), 'bytes')
console.log('total mem: ', os.totalmem(), 'bytes')
console.log('hostname: ', os.hostname())
console.log('user info: ', os.userInfo())
console.log('uptime: ', os.uptime(), 'seconds')
console.log('load avg: ', os.loadavg())
console.log('cpus: ', os.cpus())
console.log('network interfaces: ', os.networkInterfaces())
console.log(os.release())
