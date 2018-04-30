var fs = require('fs');
var smtpTransport = require('nodemailer-smtp-transport');
var nodemailer = require('nodemailer');

module.exports = function (app) {

    app.get('/', function (req, res) {

       res.render('form.ejs'); // load the index.ejs file
    });

    app.post('/', function(req, res){

        console.log(req.body)

        var emailBody = fs.readFileSync('./resume.html');

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'fviclass@gmail.com',
              pass: 'fviclass2017'
            }
          });
    

        var mailOptions = {
            from: req.body.from,
            to:req.body.destination,
            html: emailBody,
            subject: req.body.subject
        };

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log('error');
                res.send('Something went wrong. Error: \n'+ error);
            }else{
                res.send('Email sent to: '+mailOptions.destination + '.Response:\n'+info.response);
            };
        });
    });

};
