module.exports = {
    // Babel'e asagidaki kurallar icinde dosyalari cevirmesini soyle, 
    // oyle kafasina gore hareket edip adamin canini sikmasin.
    module: {
      rules: [
        {
          test: [ /\.js?$/, /\.jsx?$/],
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: [
              //'react',
              'stage-0',
              ['env', { targets: { browsers: ['last 2 versions'] } }]
            ]
          }
        }
      ]
    }
  };