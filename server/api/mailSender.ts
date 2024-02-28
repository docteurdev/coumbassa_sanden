
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
 service: 'gmail',
 host: 'smtp.gmail.com',
 auth: {
   user: 'omar.adje5@gmail.com', // replace with your Gmail email
   pass: 'meez sjcj zrlh mrru', // replace with your Gmail password or an App Password if using 2-factor authentication
 },
});

export default  defineEventHandler(async (event) =>{
  
 try {
      const {email, name, description, subject} = await readBody(event);

      // Create a Nodemailer transporter
    // return console.log({email, name, description, subject});
    
     // nntr gmup jyct qqvh
     // meez sjcj zrlh mrru
     // Define email options
     const mailOptions = {
       from: {
        name: name,
        address:"omar.adje5@gmail.com"
       },
       to: ['contact@coumbassa-sanden.com'],
       subject: subject,
       // text: 'test test',
       html: `<div>
       <p>Type: ${subject} </p>  
       <p>Message: ${description} </p>   
       <p>Email: ${email} </p>  
       </div>`
     };
 
     // Send email
   const response =  await transporter.sendMail(mailOptions);
 
   // console.log("===================",response);

  
 } catch (error) {
  
 }

})