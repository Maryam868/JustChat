'use strict';

module.exports= function () {
	return{

SignUpValidation:(req, res, next) =>{

 req.checkBody('username', 'Username is required').notEmpty();
 req.checkBody('username', 'Username Must Not be less than 5').isLength({min: 5});
 req.checkBody('email', 'Email is required').notEmpty();
 req.checkBody('email', 'Email is Invalid').isEmail();
 req.checkBody('passsword', 'Passsword is required').notEmpty();
  req.checkBody('passsword', 'Password Must Not be less than 5').isLength({min: 5});


  req.getValidationResult().then((result) =>{
  	const errors= result.array();
  	const messages=[];
  	errors.forEach((error) =>{
  		messages.push(error.msg);
  	});
 req.flash('error', messages);
 res.redirect('/signup');

  })

  .catch((err)=>{
  	return next();
  })

}


	}



}