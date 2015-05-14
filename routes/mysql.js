var mysql      = require('mysql');

function testConnection(){
	var myconnection = mysql.createConnection({
		  host     : 'wmsteam2.cnkjhozr1cjt.us-west-1.rds.amazonaws.com',
		  user     : 'team2',
		  password : 'wmsteam2',
		  database : 'email_2_sms'
		});
	/* ---BLUEMIX CLEAR DB
	var myconnection = mysql.createConnection({
		  host     : 'us-cdbr-iron-east-02.cleardb.net',
		  user     : 'bf076a1488c6b3',
		  password : '3dc63386',
		  database : 'ad_8450c6a268b54de'
		});
	---LOCALHOST------
	   var myconnection = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'root',
		  password : 'root',
		  database : 'emailtosms'
		});*/
	return myconnection;
}


function fetch(callback,sqlquery){
	
	console.log("\nSQL Query::"+sqlquery);
	
	var con=testConnection();
	
	con.query(sqlquery, function(err, rows, fields) {
		if(err){
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			//console.log("DB Results:"+rows);
			console.log(rows.length);
			callback(err, rows);
		}
	});
	console.log("\nConnection closed..");
	con.end();
}


function insert(callback,sqlquery,insertdata){
	
	console.log("\nSQL Query::"+sqlquery);
	
	var con=testConnection();
	
	var query = con.query(sqlquery, insertdata, function(err, result) {
		if(err){
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			console.log("last insert id: "+result.insertId);
			callback(err, result.insertId);
		}	
	});
	
	con.end();
}

function insert_keyword(callback,sqlquery,insertdata){
	
	console.log("\nSQL Query::"+sqlquery);
	
	var con=testConnection();
	
	var query = con.query(sqlquery, insertdata, function(err, result) {
		if(err){
			//console.log("ERROR: " + err.message);
			callback(err, 0);
		}
		else 
		{	// return err or result
			console.log("last insert id: "+result.insertId);
			callback(err, result.insertId);
		}	
	});
	
	con.end();
}

function update(callback,sqlquery,updatedata){
	
	console.log("\nSQL Query::"+sqlquery);
	
	var con=testConnection();
	
	var query = con.query(sqlquery, updatedata, function(err, result) {
		if(err){
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			console.log(result);
			callback(err, result.insertId);
		}	
	});
	
	con.end();
}
function deleteRecord(callback,sqlquery,updatedata){
	
	console.log("\nSQL Query::"+sqlquery);
	
	var con=testConnection();
	
	var query = con.query(sqlquery, function(err, result) {
		if(err){
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			console.log(result);
			callback(err, result.insertId);
		}	
	});
	
	con.end();
}

exports.connect=testConnection;
exports.fetch=fetch;
exports.insert=insert;
exports.insert_keyword=insert_keyword;
exports.update=update;
exports.deleteRecord=deleteRecord;

