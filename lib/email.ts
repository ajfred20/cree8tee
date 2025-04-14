"use server";

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
    from: `"Aj From Hustle"`,
    to,
    subject: "Verify Your Email for Hustle ✅",
    html: `
      <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; letter-spacing: -0.025em;">
        <div style="background-color: #7c3aed; padding: 32px 24px; text-align: center; border-radius: 8px 8px 0 0;">
          <img src="${process.env.NEXT_PUBLIC_APP_URL}/assets/logo.svg" alt="Hustle Logo" width="140" style="margin-bottom: 16px;" />
          <h1 style="color: white; margin: 0; font-weight: 500; letter-spacing: -0.025em; font-size: 24px;">Verify Your Email</h1>
        </div>
        
        <div style="padding: 32px 24px; background-color: #f9fafb; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
          <p style="font-weight: 400; color: #374151; margin-bottom: 24px; font-size: 16px;">Hey ${name} 👋,</p>
          
          <p style="font-weight: 400; color: #374151; margin-bottom: 24px; font-size: 16px;">Thanks for signing up for Hustle! Please verify your email address by clicking the button below:</p>
          
          <div style="text-align: center; margin: 32px 0;">
            <a href="${verificationUrl}" style="background-color: #7c3aed; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 16px; display: inline-block;">Verify Email</a>
          </div>
          
          <p style="font-weight: 400; color: #6b7280; margin-bottom: 12px; font-size: 14px;">This link will expire in 24 hours ⏰</p>
          
          <p style="font-weight: 400; color: #6b7280; margin-bottom: 24px; font-size: 14px;">If you didn't create an account, you can safely ignore this email.</p>
          
          <p style="font-weight: 400; color: #374151; margin-bottom: 0; font-size: 16px;">
            Best regards,<br>
            The Hustle Team 🚀
          </p>
        </div>
        
        <div style="text-align: center; padding: 16px; color: #6b7280; font-size: 12px; font-weight: 400;">
          <p>© 2023 Hustle. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function sendWelcomeEmail(to: string, name: string) {
  const mailOptions = {
    from: `"Aj From Hustle"`,
    to,
    subject: "Welcome to Hustle - The Web3 Freelancing Platform 🎉",
    html: `
      <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; letter-spacing: -0.025em;">
        <div style="background-color: #7c3aed; padding: 32px 24px; text-align: center; border-radius: 8px 8px 0 0;">
          <img src="${process.env.NEXT_PUBLIC_APP_URL}/assets/logo.svg" alt="Hustle Logo" width="140" style="margin-bottom: 16px;" />
          <h1 style="color: white; margin: 0; font-weight: 500; letter-spacing: -0.025em; font-size: 24px;">Welcome to Hustle! 🚀</h1>
        </div>
        
        <div style="padding: 32px 24px; background-color: #f9fafb; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
          <p style="font-weight: 400; color: #374151; margin-bottom: 24px; font-size: 16px;">Hey ${name} 👋,</p>
          
          <p style="font-weight: 400; color: #374151; margin-bottom: 24px; font-size: 16px;">We're excited to welcome you to Hustle, the future of Web3 freelancing! ✨</p>
          
          <p style="font-weight: 400; color: #374151; margin-bottom: 16px; font-size: 16px;">We're currently in the final stages of development and will be launching our beta version soon. You'll be among the first to access our platform when it's ready.</p>
          
          <p style="font-weight: 400; color: #374151; margin-bottom: 16px; font-size: 16px;">In the meantime, you can:</p>
          
          <ul style="color: #374151; padding-left: 24px; margin-bottom: 24px;">
            <li style="margin-bottom: 12px; font-weight: 400; font-size: 16px;">Follow us on <a href="https://twitter.com/hustleplatform" style="color: #7c3aed; font-weight: 500; text-decoration: none;">Twitter</a> for the latest updates 🐦</li>
            <li style="margin-bottom: 12px; font-weight: 400; font-size: 16px;">Join our <a href="https://discord.gg/hustle" style="color: #7c3aed; font-weight: 500; text-decoration: none;">Discord community</a> to connect with other Web3 professionals 💬</li>
            <li style="margin-bottom: 12px; font-weight: 400; font-size: 16px;">Check out our <a href="https://hustle.io/blog" style="color: #7c3aed; font-weight: 500; text-decoration: none;">blog</a> for insights into the Web3 ecosystem 📚</li>
          </ul>
          
          <p style="font-weight: 400; color: #374151; margin-bottom: 24px; font-size: 16px;">Thank you for joining us on this journey! 🙏</p>
          
          <p style="font-weight: 400; color: #374151; margin-bottom: 0; font-size: 16px;">
            Best regards,<br>
            The Hustle Team 🚀
          </p>
        </div>
        
        <div style="text-align: center; padding: 16px; color: #6b7280; font-size: 12px; font-weight: 400;">
          <p>© 2023 Hustle. All rights reserved.</p>
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
    from: `"Hustle Team"`,
    to,
    subject: "Reset Your Hustle Password 🔑",
    html: `
      <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; letter-spacing: -0.025em;">
        <div style="background-color: #7c3aed; padding: 32px 24px; text-align: center; border-radius: 8px 8px 0 0;">
          <img src="${process.env.NEXT_PUBLIC_APP_URL}/assets/logo.svg" alt="Hustle Logo" width="140" style="margin-bottom: 16px;" />
          <h1 style="color: white; margin: 0; font-weight: 500; letter-spacing: -0.025em; font-size: 24px;">Reset Your Password 🔐</h1>
        </div>
        
        <div style="padding: 32px 24px; background-color: #f9fafb; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
          <p style="font-weight: 400; color: #374151; margin-bottom: 24px; font-size: 16px;">Hey ${name} 👋,</p>
          
          <p style="font-weight: 400; color: #374151; margin-bottom: 24px; font-size: 16px;">We received a request to reset your password for your Hustle account. Click the button below to reset it:</p>
          
          <div style="text-align: center; margin: 32px 0;">
            <a href="${resetUrl}" style="background-color: #7c3aed; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 16px; display: inline-block;">Reset Password</a>
          </div>
          
          <p style="font-weight: 400; color: #6b7280; margin-bottom: 12px; font-size: 14px;">This link will expire in 1 hour ⏰</p>
          
          <p style="font-weight: 400; color: #6b7280; margin-bottom: 24px; font-size: 14px;">If you didn't request a password reset, you can safely ignore this email.</p>
          
          <p style="font-weight: 400; color: #374151; margin-bottom: 0; font-size: 16px;">
            Best regards,<br>
            The Hustle Team 🔒
          </p>
        </div>
        
        <div style="text-align: center; padding: 16px; color: #6b7280; font-size: 12px; font-weight: 400;">
          <p>© 2023 Hustle. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}
