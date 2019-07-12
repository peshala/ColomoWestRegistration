'use strict';
const nodemailer = require('nodemailer');

module.exports.mailer = (event, context, callback) => {
  nodemailer.createTestAccount((err, account) => {
    const params = JSON.parse(event.body);
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'gmail',
      auth: {
        user: 'rccolombowest@gmail.com',
        pass: 'westlife6600westies'
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Support Mailer" <mailer@smokingdots.com>', // sender address
      to: params.to, // list of receivers
      subject: params.subject, // Subject line
      text: params.text, // plain text body
      html: params.html // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Go Serverless v1.0! Your function executed successfully!',
          input: event,
        }),
      };

      callback(null, response);
    });
  });
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
