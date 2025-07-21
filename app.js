const http = require('http');
const { MongoClient } = require('mongodb');

const url = 'mongodb://mongo:27017'
const client = new MongoClient(url);


const server = http.createServer(async (req, res) => {
	try {
		await client.connect();
		res.end("MongoDB bağlantısı başarılı!");
		} catch (err) {
		res.end("MongoDB bağlantı hatası: " + err.message);
		}

});
//deneme yorum satırı..
server.listen(3000, () => {

	console.log("Sunucu 3000 portunda çalışıyor")
});
