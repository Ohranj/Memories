const nodemailer = require("nodemailer");
const cron = require("node-cron");

require("dotenv").config();

const LocalModel = require("../models/LocalUser");

(async () => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.nodeMailerUser,
            pass: process.env.nodeMailerPassword,
        },
    });

    cron.schedule("30 7 * * *", async () => {
        const activeUsers = await LocalModel.find({ notify: true }).exec();
        const generateRandom = (memories) =>
            Math.floor(Math.random() * memories);
        for (let doc of activeUsers) {
            if (doc.memories.length > 0) {
                const contactList = doc.additionalEmails.map(
                    (item) => item.email
                );
                const memory =
                    doc.memories[generateRandom(doc.memories.length)];
                transporter.sendMail({
                    from: '"Memories" <ajdorrington18@gmail.com>',
                    to: [...contactList, doc.email],
                    subject: "Daily Memory",
                    text: "Daily Memory",
                    html: `
                        <h1>${memory.title}</h1>
                        <ul>
                            <li>Scenario:- ${memory.scenario}</li>
                            <li>Date of memory:- ${memory.date
                                .toString()
                                .substring(0, 15)}</li>
                        </ul>
                        <img src=${memory.memoryImg} />
                        <p>${memory.blurb}</p>
                    `,
                });
            } else {
                console.log("No memories to send for contact");
            }
        }
    });
})()
    .then(console.log("Emails sent daily at 7:30am"))
    .catch(console.error);
