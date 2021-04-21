var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var dotenv = require('dotenv')
dotenv.config();

exports.handler = function(event, context, callback) {


  let data = JSON.parse(event.body)


  var transporter = nodemailer.createTransport(smtpTransport({
    host: 'www.fourpercnt.com', 
    port: 465,
    secure: true,
    ignoreTLS: false,
    auth: {
      user: 'together@fourpercnt.com',
      pass: '======= enter your password here ======'
    },
    tls: {
      rejectUnauthorized: false
    }
  }));

  var mailOptions = {
    from: data.email,
    to: 'together@fourpercnt.com',
    subject: 'New Message from fourpercent Contact Form',
    html: `
        <h3>Email from ${data.name} ${data.email}<h3>
        <p>${data.message}<p>
      `
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      const response = {
        statusCode: 500,
        body: JSON.stringify({
          error: error.message,
        }),
      };
      callback(null, response);
    }
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: `Email processed successfully!`
      }),
    };
    callback(null, response);
  });
};
