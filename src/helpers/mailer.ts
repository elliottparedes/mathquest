const nodemailer = require('nodemailer');
const fs = require('fs');
const ejs = require('ejs');

const mailer = {
sendNewEventEmail : async (eventInfo) => 
{
    
    const emailTemplate = fs.readFileSync('src/api/V1/HTML_Templates/newEventTemplate.ejs','utf-8',function(err,data) {
        ejs.render(data,{eventInfo})
    })
    const htmlContent = ejs.render(emailTemplate,{eventInfo});
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAILUSERNAME,
            pass: process.env.EMAILPASSWORD
        }
        });
    var mailOptions = {
        from: process.env.EMAILUSERNAME,
        to: process.env.RECIPIENT,
        subject: "NEW EVENT REQUESTED",
        html:htmlContent
        };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });

},
sendMessageEmail : async (messageInfo) => 
{
    
    const emailTemplate = fs.readFileSync('src/api/V1/HTML_Templates/newMessageTemplate.ejs','utf-8',function(err,data) {
        ejs.render(data,{messageInfo})
    })
    const htmlContent = ejs.render(emailTemplate,{messageInfo});
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAILUSERNAME,
            pass: process.env.EMAILPASSWORD
        }
        });
        var mailOptions = {
        from: process.env.EMAILUSERNAME,
        to: process.env.RECIPIENT,
        subject: "MESSAGE RECEIVED",
        html:htmlContent
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });

}


}


export default mailer; 