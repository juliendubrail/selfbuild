const Buyer = require('./buyers');
const PcBuild  = require('./pc_builds');
const Database = require('./database');
const multer = require('multer');

const Project_Rally = new PcBuild("project_rally","gaming","Amd Ryzen5", "Radeon Rx590", "AsRock B450M", "16Gb", 2019, "1Tb", "dvdrw", "450W", "coolermaster", 700, [] )
const Cecile = new Buyer("Cecile","Maluma","baby","test@ymail.com",2019,"march", "Berlin") 

Cecile.printLocation();

Cecile.addToWishlist(Project_Rally);

Project_Rally.printBuyersName();

Database.save('pcbuild.json', Project_Rally);

const loadedFile = Database.load('pcbuild.json')
console.log(loadedFile.name)




