// require express
var express    = require('express');
var path       = require('path');

// create our router object
var router     = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', function (req, res) {
	res.render('pages/home');
});

// route for our about page
router.get('/about', function (req, res) {
	var users = [
		{ name: 'Chris', email: 'chris@gmail.com', avatar: 'http://placekitten.com/250/400'},
		{ name: 'Holy', email: 'holy@gmail.com', avatar: 'http://placekitten.com/300/400'},
		{ name: 'Ado', email: 'chris@gmail.com', avatar: 'http://placekitten.com/350/400'},
		{ name: 'Houssem', email: 'houssem@gmail.com', avatar: 'http://placekitten.com/450/400'},
	];

	res.render('pages/about', { users: users });
});

// route for our contact page
router.get('/contact', function (req, res) {
	res.render('pages/contact');
});
router.post('/contact', function (req, res) {
	res.send('Thanks for contacting us, ' + req.body.name + '! We will respond shortly!');
});