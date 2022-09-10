//배포 전 local 환경에서
if(process.env.NODE_ENV == 'production'){
    module.exports = require('./prod');
} 
// 배포 후
else {
    module.exports = require('./dev');
}