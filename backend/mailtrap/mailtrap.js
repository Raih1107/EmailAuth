import dotenv from "dotenv";
dotenv.config();

import { MailtrapClient } from "mailtrap";

export const mail = new MailtrapClient({ token: process.env.MAILTRAP_TOKEN });


export const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};
