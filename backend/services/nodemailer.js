const nodemailer = require("nodemailer");
const cron = require("node-cron");

(async () => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "ajdorrington18@gmail.com",
            pass: "Football18",
        },
    });

    cron.schedule("30 7 * * *", () => {
        transporter.sendMail({
            from: '"Memories" <ajdorrington18@gmail.com>',
            to: "ajdorrington@hotmail.co.uk",
            subject: "Daily Memory",
            text: "Hello world?",
            html: "<b>Hello world?</b>",
        });
    });
})()
    .then(console.log("Emails sent daily at 7:30am"))
    .catch(console.error);
