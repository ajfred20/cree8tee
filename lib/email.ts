import nodemailer from "nodemailer";

// Create a transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendVerificationEmail(
  to: string,
  name: string,
  token: string
) {
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${token}`;

  const mailOptions = {
    from: `"Hustle Team" <${process.env.EMAIL_FROM}>`,
    to,
    subject: "Verify Your Email for Hustle",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #7c3aed; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Verify Your Email</h1>
        </div>
        <div style="padding: 20px; background-color: #f9fafb; border-radius: 0 0 5px 5px;">
          <p>Hello ${name},</p>
          <p>Thanks for signing up for Hustle! Please verify your email address by clicking the button below:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationUrl}" style="background-color: #7c3aed; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Verify Email</a>
          </div>
          <p>This link will expire in 24 hours.</p>
          <p>If you didn't create an account, you can safely ignore this email.</p>
          <p>Best regards,<br>The Hustle Team</p>
        </div>
        <div style="text-align: center; padding: 10px; color: #6b7280; font-size: 12px;">
          <p>© 2023 Hustle. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function sendWelcomeEmail(to: string, name: string) {
  const mailOptions = {
    from: `"Hustle Team" <${process.env.EMAIL_FROM}>`,
    to,
    subject: "Welcome to Hustle - The Web3 Freelancing Platform",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #7c3aed; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Welcome to Hustle!</h1>
        </div>
        <div style="padding: 20px; background-color: #f9fafb; border-radius: 0 0 5px 5px;">
          <p>Hello ${name},</p>
          <p>We're excited to welcome you to Hustle, the future of Web3 freelancing!</p>
          <p>We're currently in the final stages of development and will be launching our beta version soon. You'll be among the first to access our platform when it's ready.</p>
          <p>In the meantime, you can:</p>
          <ul>
            <li>Follow us on <a href="https://twitter.com/hustleplatform" style="color: #7c3aed;">Twitter</a> for the latest updates</li>
            <li>Join our <a href="https://discord.gg/hustle" style="color: #7c3aed;">Discord community</a> to connect with other Web3 professionals</li>
            <li>Check out our <a href="https://hustle.io/blog" style="color: #7c3aed;">blog</a> for insights into the Web3 ecosystem</li>
          </ul>
          <p>Thank you for joining us on this journey!</p>
          <p>Best regards,<br>The Hustle Team</p>
        </div>
        <div style="text-align: center; padding: 10px; color: #6b7280; font-size: 12px;">
          <p>© 2025 Hustle. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function sendPasswordResetEmail(
  to: string,
  name: string,
  token: string
) {
  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;

  const mailOptions = {
    from: `"Hustle Team" <${process.env.EMAIL_FROM}>`,
    to,
    subject: "Reset Your Hustle Password",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #7c3aed; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Reset Your Password</h1>
        </div>
        <div style="padding: 20px; background-color: #f9fafb; border-radius: 0 0 5px 5px;">
          <p>Hello ${name},</p>
          <p>We received a request to reset your password for your Hustle account. Click the button below to reset it:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetUrl}" style="background-color: #7c3aed; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
          </div>
          <p>This link will expire in 1 hour.</p>
          <p>If you didn't request a password reset, you can safely ignore this email.</p>
          <p>Best regards,<br>The Hustle Team</p>
        </div>
        <div style="text-align: center; padding: 10px; color: #6b7280; font-size: 12px;">
          <p>© 2025 Hustle. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}
