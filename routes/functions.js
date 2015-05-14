var con = require('./mysql');
con.connect();
/*
 * GET home page.
 */



exports.login = function(req, res){
	  var param = req.body;
	  var validateUser="select clientunkid from client_master where username='"+param.txtUsername+"' AND password='"+param.txtPassword+"'";
		console.log("Query is:"+validateUser);
		
		con.fetch(function(err,results){
			if(err){
				throw err;
			}
			else 
			{
				if(results.length > 0){
					console.log("valid Login");
					//res.redirect('/services');
					console.log(results);
					res.send({"login":"Success", "clientunkid" : results[0].clientunkid});
				}
				else {    
					
					console.log("Invalid Login");
					res.redirect('/home');
					//res.send({"errMsg":"Fail"});
					//res.render('index', { title: 'LinkedIn',errMsg: "Invalid Login" });
				}
			}  
		},validateUser);
	 
};

exports.register = function(req, res){
  var param = req.body;
  
  var insertdata  = {"firstname": param.txtFirstName, "lastname": param.txtLastName, "username": param.txtEmail, "password": param.txtPassword, "phoneno": param.txtPhone};
	var newUser="INSERT INTO client_master SET ?";
	
	con.insert(function(err,results){
		if(err){
			throw err;
		}
		else
		{console.log(results);
			//res.redirect('/home');
			//res.send({"login":"Success", "clientunkid" : results});
			var clientunkid = results;
		 	var serviceunkid = [1,2,3];
		 	
		 	
			for(var i=0;i<3;i++){
				 var insertdata  = {"clientunkid": clientunkid, "serviceunkid": serviceunkid[i]};
					var newUser="INSERT INTO client_service SET ?";
					con.insert(function(err,results){
						if(err){
							throw err;
						}
						else
						{
							console.log(i);
							if(i==3)
								res.send({"msg":"Success", "clientunkid" : clientunkid});//res.send({"msg":"Success"})
						}
					},newUser,insertdata);
			}
		}
	},newUser,insertdata);
};


exports.savekeywords = function(req, res){
	var param = req.body;
	var insertdata = '';
	var query = 'UPDATE client_service SET filter = "'+param.filter+'" WHERE clientunkid = '+param.clientunkid;
				
		con.update(function(err,results){
			if(err){
				throw err;
			}
			else
			{
				var lexiconArr = (param.filter).split("<--sep-->");
				for(var a=0; a<lexiconArr.length; a++){
					if(lexiconArr[a] != ""){
					 var insertdata  = {"keyword": lexiconArr[a]};
						var newKeyword="INSERT INTO imp_lexicon_set SET ?";
						con.insert_keyword(function(err,results){
							if(a==lexiconArr.length)
								res.send({"msg":"Success"});
						},newKeyword,insertdata);
					}
					else
					{
						if(a==(lexiconArr.length-1))
							res.send({"msg":"Success"});
					}
				}
				//res.send({"msg":"Success"})
			}
		},query,insertdata);
};
exports.saveblockedemail = function(req, res){
	var param = req.body;
	var insertdata = '';
	var query = 'UPDATE client_service SET blocked_email = "'+param.blocked+'" WHERE clientunkid = '+param.clientunkid;
				
		con.update(function(err,results){
			if(err){
				throw err;
			}
			else
			{
				res.send({"msg":"Success"})
			}
		},query,insertdata);
};
exports.saverequiredemail = function(req, res){
	var param = req.body;
	var insertdata = '';
	var query = 'UPDATE client_service SET required_email = "'+param.required+'" WHERE clientunkid = '+param.clientunkid;
				
		con.update(function(err,results){
			if(err){
				throw err;
			}
			else
			{
				res.send({"msg":"Success"})
			}
		},query,insertdata);
};


exports.getservices = function(req, res){
	  
	  var clientunkid = req.params.clientunkid;
	  
	  var getUserServices="select client_service.clientunkid, client_service.serviceunkid, service_master.service," +
	  		" client_service.email_address, client_service.service_password, client_service.blocked_email," +
	  		" client_service.filter, client_service.required_email from client_service" +
	  		" left join service_master on service_master.serviceunkid = client_service.serviceunkid" +
	  		" where client_service.clientunkid = "+clientunkid;
		
	  console.log("Query is:"+getUserServices);
		
		con.fetch(function(err,results){
			if(err){
				throw err;
			}
			else 
			{
				if(results.length > 0){
					
					console.log(results);
					res.send({"msg":"Success", "data" : results});
				}
				else {    
					
					console.log("Error");
					//res.redirect('/home');
					res.send({"msg":"Fail"});
					//res.render('index', { title: 'LinkedIn',errMsg: "Invalid Login" });
				}
			}  
		},getUserServices);
	 
};



exports.services = function(req, res){
	 var param = req.body;
	
	 var serviceunkid = [1,2,3];
	 	var email = [param.txtGmail,param.txtOutlook,param.txtOther];
	 	
	 	var password = [param.txtGmailPassword,param.txtOutlookPassword,param.txtOtherPassword];
	 	
		for(var i=0;i<3;i++){
			 var insertdata  = {"clientunkid": param.clientunkid, "serviceunkid": serviceunkid[i], "email_address": email[i],"service_password": password[i]};
				var newUser="INSERT INTO client_service SET ?";
				con.insert(function(err,results){
					if(err){
						throw err;
					}
					else
					{
						if(i==2)
							res.send({"msg":"Success"})
					}
				},newUser,insertdata);
		}
	};
	exports.updateservice = function(req, res){
		 var param = req.body;
			
		 var serviceunkid = [1,2,3];
		 	var email = [param.txtGmail,param.txtOutlook,param.txtOther];
		 	
		 	var password = [param.txtGmailPassword,param.txtOutlookPassword,param.txtOtherPassword];
		 	insertdata = '';
		 	var k = 0;
			for(k=0;k<3;k++){
				 
				 if(email[k] != "" && email[k] != null && email[k] != "undefined")
					 var emailtemp = 1;
				 else
					 var emailtemp = 0;
				 
				 if(password[k] != "" && password[k] != null && password[k] != "undefined")
					 var passtemp = 1;
				 else
					 var passtemp = 0;
				
				 if(emailtemp == 0 && passtemp == 0)
					{
					 console.log("if---i: "+k);
					 if(k==2)
							res.send({"msg":"Success"})
					}
				 else{
					 var query = 'UPDATE client_service SET ';
					 
					 
					 if(emailtemp == 1)
							query+=' email_address= "'+email[k]+'"';
					 if(emailtemp == 1 && passtemp == 1)
						 query+=',';
					 if(passtemp == 1)
						 query+='service_password = "'+password[k];
				
						query +='" WHERE serviceunkid = '+serviceunkid[k]+ " AND clientunkid = "+param.clientunkid;
						
						con.update(function(err,results){
							if(err){
								throw err;
							}
							else
							{
								console.log("else---i: "+k);	
								if(k==3)
									res.send({"msg":"Success"})
							}
						},query,insertdata);
				 }
			}
		};
	
exports.settings = function(req, res){
	 var param = req.body;
	  
	  var insertdata  = {"firstname": param.txtFirstName, "lastname": param.txtLastName, "username": param.txtEmail, "password": param.txtPassword, "phoneno": param.txtPhone};
		var newUser="INSERT INTO client_master SET ?";
		
		con.insert(function(err,results){
			if(err){
				throw err;
			}
			else
			{
				res.redirect('/home');
			}
		},newUser,insertdata);
			
};

exports.home = function(req, res){
	  res.render('home', { title: 'Email-2-SMS' });
};

exports.settings = function(req, res){
	  res.render('settings', { title: 'Email-2-SMS' });
	};
	
		
exports.contact = function(req, res){
	  res.render('contact', { title: 'Email-2-SMS' });
};

