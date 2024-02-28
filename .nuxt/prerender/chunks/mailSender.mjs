import { defineEventHandler, readBody } from 'file://C:/Users/HP/Desktop/projets/next/000/update/coumbassa_sanden/node_modules/h3/dist/index.mjs';
import nodemailer from 'file://C:/Users/HP/Desktop/projets/next/000/update/coumbassa_sanden/node_modules/nodemailer/lib/nodemailer.js';

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "omar.adje5@gmail.com",
    // replace with your Gmail email
    pass: "meez sjcj zrlh mrru"
    // replace with your Gmail password or an App Password if using 2-factor authentication
  }
});
const mailSender = defineEventHandler(async (event) => {
  try {
    const { email, name, description, subject } = await readBody(event);
    const mailOptions = {
      from: {
        name,
        address: "omar.adje5@gmail.com"
      },
      to: ["contact@coumbassa-sanden.com"],
      subject,
      // text: 'test test',
      html: `<div>
       <p>Type: ${subject} </p>  
       <p>Message: ${description} </p>   
       <p>Email: ${email} </p>  
       </div>`
    };
    const response = await transporter.sendMail(mailOptions);
  } catch (error) {
  }
});

export { mailSender as default };
//# sourceMappingURL=mailSender.mjs.map
