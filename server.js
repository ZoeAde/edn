var express = require('express');
var path = require('path');
var app = express();
var stripe = require('stripe')(' your stripe API key ');


app.use(express.static(path.join(__dirname, '/')));

app.get('/',function(req,res){
  res.sendFile('index.html',{'root':__dirname});
})

app.get('/faq', function(req,res){
  res.sendFile('faq.html',{'root':__dirname});
})

app.get('/product',function(req,res){
  res.sendFile('product.html',{'root':__dirname});
})

app.get('/privacy', function(req,res){
  res.sendFile('privacy-policy.html',{'root':__dirname});
})

app.get('/register', function(req,res){
stripe.customers.create({
  email: req.body.email
}).then(function(customer) {
  return stripe.charges.create({
    amount: 49900,
    currency: 'usd',
    customer: customer.id
  });
}).then(function(charge) {
  console.log(charge)
}).catch(function(err) {
  console.log(err)
});
})

app.listen('3000',function(){
  console.log('Server running at http://localhost:3000 !!')
})
