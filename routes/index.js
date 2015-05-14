
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('home', { title: 'Email-2-SMS' });
};

exports.home = function(req, res){
	  res.render('home', { title: 'Email-2-SMS' });
};

exports.settings = function(req, res){
	  res.render('settings', { title: 'Email-2-SMS' });
	};
	
exports.services = function(req, res){
	  res.render('services', { title: 'Email-2-SMS' });
};
		
exports.contact = function(req, res){
	  res.render('contact', { title: 'Email-2-SMS' });
};

