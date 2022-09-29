let nodemailer = require("nodemailer")
let dotenv = require("dotenv")
dotenv.config()


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL,
        pass: process.env.PASSWORD
    }
});

var mailOptions = {
    from: process.env.GMAIL,
    to: process.env.DEST_EMAIL,
    subject: 'Approved!',
    text: 'This worksheet has been approved by 3 users already.'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});