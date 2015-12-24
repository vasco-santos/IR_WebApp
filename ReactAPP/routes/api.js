var express = require('express');
var router = express.Router();

router.route('/searchQuery')
	.get(function(req, res){
		return res.send(200, "done");
	});
	
module.exports = router;