const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Heyy !!! Webpack 
  // nodeJS dosyalarini bir elden geirecegiz haberin olsun  
  target: 'node',

  // Bu ara oyle bos bos etrafina bakinma. asagidaki dosyadan dal
  // gidebildigin yere kadarda git yani
  entry: './src/server.js',

  // yaptigin dosyayi cebine koyup gezecek degilsin. 
  // __dirname ile zaten nerede oldugunu biliyorum. 
  // onun icine build diye dizini ac icine server.js diye koy.
  // bir ara gelip bakacagim yaptin mi diye ...
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build')
  },

  // sana yap dediysekte her dosyayi yap demedik. Bizim kutuphanceiler bazilarini halletti. 
  // onlar disindakileri yap lutfen.
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);