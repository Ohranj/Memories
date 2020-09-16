const nodemailer = require("nodemailer");
const cron = require("node-cron");

const LocalModel = require("../models/LocalUser");

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

    cron.schedule("30 7 * * *", async () => {
        const test = await LocalModel.find({ notify: true }).exec();
        const generateRandom = (memories) => {
            return Math.floor(Math.random() * memories);
        };
        for (let doc of test) {
            if (doc.memories.length > 0) {
                const contactList = doc.additionalEmails.map((item) => {
                    return item.email;
                });
                transporter.sendMail({
                    from: '"Memories" <ajdorrington18@gmail.com>',
                    to: [...contactList, doc.email],
                    subject: "Daily Memory",
                    text: "Daily Memory",
                    html: `
                        <h1>${
                            doc.memories[generateRandom(doc.memories.length)]
                                .title
                        }</h1>
                        <ul>
                            <li>Scenario:- ${
                                doc.memories[
                                    generateRandom(doc.memories.length)
                                ].scenario
                            }</li>
                            <li>Date:- ${
                                doc.memories[
                                    generateRandom(doc.memories.length)
                                ].date
                            }</li>
                        </ul>
                        <img src=${
                            doc.memories[generateRandom(doc.memories.length)]
                                .memoryImg
                        } />
                        <p>${
                            doc.memories[generateRandom(doc.memories.length)]
                                .blurb
                        }</p>
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
