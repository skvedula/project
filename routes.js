/* cars */
var express = require('express');
var router = express.Router();

/* Locations pages */
router.get('/', function(req, res){
	res.render('home', { title: 'Home' });
});

router.get('/makers', function(req, res){
	res.render('model-info', { title: 'Car Model Information' });
});

module.exports = router;
