var mysql = require('mysql');
var inquirer = require('inquirer'); 
//connects to bamazon_db
var connection = mysql.createConnection({
	host:"localhost",
	port:3306,
	user:"root",
	password:"6687",
	database:"bamazon_db"
});
//shows products available for customer
connection.query('SELECT * FROM products', function(error,results) {
	if (error) {
		return console.log(error);
	} else{
		results.forEach(function (row) {
		console.log('Item ID:', row.id);
		console.log('Product Name:', row.product_name);
		console.log('Department Name:', row.department_name);
		console.log('Price:', row.price);
		console.log('Quantity', row.stock_quantity);
		console.log('------------------------');
		});
	}
	askCustomer(results);
});
//asks which products customer wants to purchase
var askCustomer = function(storeProducts){
	var array = storeProducts.map(function(row){
		return row.product_name;
	});
	inquirer.prompt({
		type: 'list',
		name: 'product',
		message:'Hello! Welcome to Bamazon, which product would you like to buy today?',
		choices: array
	}).then(function(val){
		var selection =false;
		storeProducts.forEach(function (choice){
			if (val.product === choice.product_name) {
				selection = true;
				console.log('Nice choice!');
				quantityCheck(choice);
			}
		})
	});
}
		//checks how many items the customer wants to purchase
		var quantityCheck =function(itemChoice){
			inquirer.prompt([{
				type: 'input',
				name: 'quantity',
				message: 'How many would you like to purchase?'
			}]).then(function(answers){
				var stock = itemChoice.stock_quantity;
						if (answers.quantity < stock) {
							Connection.query('UPDATE products SET ? WHERE ?',[{
								stock_quantity: stock - answers.quantity
							}, {
								product_name: itemChoice.product_name
							}], function(err,res) {
								if (err){
									throw err;
								}
								console.log('You have purchased' + answers.quantity + '' +itemChoice.product_name + 'for' + answers.quantity * itemChoice.price + 'dollars.');
									return;
							})
						
						} else {
							console.log("We currently do not have the amount requested for in stock, Choose a quantity less than" + stock +"." )
						}

				});
		}


