# NodeJS-Webpack-Babel-Master

Webpack'in duzenli derlemesi icin 
    
    npm run dev:build-server
        komutunun calisiyor olmasi gerekiyor. Bu komut node_modules disinda degisen tum dosyalarda,
        butun sistemi yeniden tarayip bir araya getirip babel den gecirir. 

        Bu dosyayi ./build/server.js icerisinde toplar (dosya ismi webpac-server icine tanimlanmistir)

Serverin otomatik restart etmesi icin
    npm run dev:server
        Bu komut build dizininde webpack-server tarafindan hazirlanan NodeJs (server.js) dosyasini calistirir.
        Eger direk ./src/server.js dosyasini calstirmaya calisirsak, ES6 kodlarini tanimayacagi icin hata aliriz.

