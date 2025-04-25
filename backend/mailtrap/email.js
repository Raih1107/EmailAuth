import { mail} from "./mailtrap.js"
import { sender } from "./mailtrap.js"
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"


export const sendVerficationEmail = async (email, verificationToken)=>{
    const recipient = [{email}]

    try{
        const response = await mail.send({
            from: sender,
            to: recipient,
            subject: "Verify you email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })

        console.log("Email sent successfully", response)
    }catch (error){
        console.error(`error sending`, error);
        throw new Error(`Error sending verfication email: ${error}`)
    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{email}];

    try{       
        const response = await mail.send({
            from: sender,
            to:recipient,
            template_uuid :"e2f905e7-e8c0-4945-9626-21486f901e9e",
            template_variables: {
                company_info_name: "AuthLetter",
                name: name,
            },
        });

        console.log("Welcome email sent successfully", response);
    }catch (error){
        console.error(`Error sending welcome email`, error);
        throw new Error(`Error sending welcome email: ${error}`);
    }
}