const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const minify = require("html-minifier").minify;
const mail_config = require("../config").mail;

class MailHelper {
    constructor() {
        this.transporter = nodemailer.createTransport(mail_config, {
            from: mail_config.auth.user,
        });
    }

    async verify() {
        return await this.transporter.verify();
    }

    getMailTemplate(tpl) {
        return minify(
            fs
                .readFileSync(path.resolve(__dirname, "../mail", `${tpl}.html`))
                .toString(),
            {
                collapseWhitespace: true,
                minifyCSS: true,
            }
        );
    }

    sendMail(email, title, content) {
        this.transporter.sendMail(
            {
                to: email,
                subject: title,
                html: content,
            },
            (err) => {
                if (err !== null) console.error(err);
            }
        );
    }
}

module.exports = new MailHelper();
