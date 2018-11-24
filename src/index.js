console.log('hello');
document.getElementById('app').innerHTML='webpack';

// 引用css
// require('./index.css');
// 因为css并不是js模块，所以需要转换，这些转换的工具就是loader