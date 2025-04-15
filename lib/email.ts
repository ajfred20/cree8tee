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
  otp: string
) {
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
          
          <p style="font-weight: 400; color: #374151; margin-bottom: 24px; font-size: 16px;">Thanks for signing up for Hustle! Please verify your email address using the verification code below:</p>
          
          <div style="text-align: center; margin: 32px 0; padding: 16px; background-color: #f3f4f6; border-radius: 8px; letter-spacing: 8px; font-size: 32px; font-weight: 500;">
            ${otp}
          </div>
          
          <p style="font-weight: 400; color: #6b7280; margin-bottom: 12px; font-size: 14px;">This code will expire in 30 minutes ⏰</p>
          
          <p style="font-weight: 400; color: #6b7280; margin-bottom: 24px; font-size: 14px;">If you didn't create an account, you can safely ignore this email.</p>
          
          <p style="font-weight: 400; color: #374151; margin-bottom: 0; font-size: 16px;">
            Best regards,<br>
            The Hustle Team 🚀
          </p>
        </div>
        
        <div style="text-align: center; padding: 16px; color: #6b7280; font-size: 12px; font-weight: 400;">
          <p>© 2025 Hustle. All rights reserved.</p>
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
          <p>© 2025 Hustle. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function sendBetaConfirmationEmail(to: string, name: string) {
  const mailOptions = {
    from: `"Hustle Team" <${process.env.EMAIL_FROM}>`,
    to,
    subject: "Welcome to Hustle Beta Waitlist! 🚀",
    html: `
      <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header with Logo -->
        <div style="text-align: center; padding: 40px 20px; background: linear-gradient(to right, #7c3aed, #6d28d9);">
          <img src="${
            process.env.NEXT_PUBLIC_APP_URL
          }/assets/logo.svg" alt="Hustle Logo" style="height: 40px; margin-bottom: 20px;" />
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">You're In! 🎉</h1>
        </div>

        <!-- Main Content -->
        <div style="padding: 40px 32px; background-color: white;">
          <p style="font-size: 16px; color: #374151; margin-bottom: 24px; line-height: 1.6;">
            Hey ${name || "there"} 👋
          </p>

          <p style="font-size: 16px; color: #374151; margin-bottom: 24px; line-height: 1.6;">
            Thanks for joining the Hustle beta waitlist! You're now part of an exclusive group that will be first to experience the future of Web3 freelancing.
          </p>

          <div style="background-color: #f3f4f6; border-radius: 12px; padding: 24px; margin: 32px 0;">
            <h2 style="font-size: 18px; color: #1f2937; margin: 0 0 16px 0;">What's Next?</h2>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="display: flex; align-items: center; margin-bottom: 16px; color: #4b5563;">
                <span style="color: #7c3aed; margin-right: 12px;">✦</span>
                We'll keep you updated on our progress
              </li>
              <li style="display: flex; align-items: center; margin-bottom: 16px; color: #4b5563;">
                <span style="color: #7c3aed; margin-right: 12px;">✦</span>
                You'll get early access when we launch
              </li>
              <li style="display: flex; align-items: center; color: #4b5563;">
                <span style="color: #7c3aed; margin-right: 12px;">✦</span>
                Special perks for beta users
              </li>
            </ul>
          </div>

          <p style="font-size: 16px; color: #374151; margin-bottom: 32px; line-height: 1.6;">
            We're working hard to create the best platform for Web3 professionals like you. Stay tuned for updates!
          </p>

          <div style="text-align: center; margin-top: 32px;">
            <div style="display: inline-block; background-color: #7c3aed; padding: 16px 32px; border-radius: 8px; color: white; text-decoration: none; font-weight: 500;">
              Expected Launch: Q3 2025
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div style="background-color: #f9fafb; padding: 32px; text-align: center;">
          <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
            Follow us for updates
          </p>
          <div style="display: flex; justify-content: center; gap: 16px;">
            <a href="https://twitter.com/hustleplatform" style="color: #7c3aed; text-decoration: none;">Twitter</a>
            <a href="https://discord.gg/hustle" style="color: #7c3aed; text-decoration: none;">Discord</a>
          </div>
        </div>

        <!-- Footer -->
        <div style="text-align: center; padding: 32px 20px; color: #6b7280; font-size: 14px;">
          <p style="margin: 0 0 8px 0;">© 2025 Hustle. All rights reserved.</p>
          <p style="margin: 0; color: #9ca3af;">
            You're receiving this email because you signed up for Hustle beta waitlist.
          </p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}
