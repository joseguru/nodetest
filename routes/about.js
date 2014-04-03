exports.show = function(req, res){
  res.render('about', { title: 'We are a group of software devs' });
};
exports.list  =function(req,res){
	 res.render('list', { title: 'This is a list' });
};