var express = require('express');
var router = express.Router();
const fs = require('fs');
const ejs = require('ejs');
const bodyParser = require('body-parser');
var multer = require('multer');

var showAddImage="";

var couponadd = {
	eid:"",
	date:"",
	images: []
}

function couponObjetcinit(){
	couponadd.eid = "";
	couponadd.date="";
	couponadd.images = [];
}

var Storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, "public/images/panorama");
	},
	filename: function(req, file, callback) {
		showAddImage = file.originalname;
		callback(null, file.originalname);
	}
});

var Storages = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, "public/images/panorama");
	},
	filename: function(req, file, callback) {
		couponadd.images.push(file.originalname);
		callback(null, file.originalname);
	}
});

var upload = multer({
	storage: Storage
}).single("cimages"); //Field name and max count

var upload_I = multer({
	storage: Storages
}).array("cimages", 100); //Field name and max count


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('upload');
});

router.post('/add', (req, res) => {
	console.log("ADD POST");
  
  upload_I(req, res, function(err){
		if(err){
			res.status(500).send("image ADD FILE ERROR");
		}else{
			console.log(couponadd.images.toString());
			// for(var i = 0;i<couponadd.images.length;i++){
				
			// }

			res.status(200).redirect("/select?img="+couponadd.images.toString());
		}
	});
});

module.exports = router;
