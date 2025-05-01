import { mail} from "./mailtrap.js"
import { sender } from "./mailtrap.js"
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"


export const sendVerificationEmail = async (email, verificationToken)=>{
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
            template_uuid :"2d8bd779-9d51-4e24-b705-bc345e6479be",
            template_variables: {
                company_info_name: "AuthLetters",
                name: name,
            },
        });

        console.log("Welcome email sent successfully", response);
    }catch (error){
        console.error(`Error sending welcome email`, error);
        throw new Error(`Error sending welcome email: ${error}`);
    }
}


export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{email}];

    try{
        const response = await mail.send({
            from:sender,
            to:recipient,
            subject: "Password Reset",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset",
                
        })

    }catch(error){
        console.error(`Error sending password reset email`, error);
        throw new Error(`Error sending password reset email: ${error}`);
    }
}


export const sendResetSuccessEmail = async (email) => {
    const recipient = [{email}];
    
    try {
        
        const response = await mail.send({
            from: sender,
            to: recipient,
            subject: "Password Reset Success",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset Success",
        })

        console.log("Password reset success email sent successfully", response);


    } catch (error) {
        console.error(`Error sending password reset success email`, error);
        throw new Error(`Error sending password reset success email: ${error}`);
        
    }
}