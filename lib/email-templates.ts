
export const getNotificationHtml = (name: string, email: string, message: string) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Lead Detected</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #111112; font-family: 'Arial', sans-serif; color: #ffffff;">
        <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="background-color: #1a1a1c; border-radius: 12px; padding: 32px; border: 1px solid #333;">
            <div style="border-bottom: 1px solid #333; padding-bottom: 24px; margin-bottom: 24px;">
              <h1 style="color: #E87C2C; margin: 0; font-size: 24px; letter-spacing: -0.5px;">New Lead Detected</h1>
            </div>
            
            <div style="margin-bottom: 24px;">
              <p style="margin: 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">From</p>
              <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 600;">${name}</p>
            </div>
            
            <div style="margin-bottom: 24px;">
              <p style="margin: 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
              <p style="margin: 4px 0 0 0; font-size: 16px; color: #E87C2C;">${email}</p>
            </div>
            
            <div>
              <p style="margin: 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <p style="margin: 12px 0 0 0; font-size: 16px; line-height: 1.6; color: #dddddd; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #333; text-align: center;">
              <p style="margin: 0; color: #666; font-size: 12px;">Sent from Smail Portfolio Contact Form</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};

export const getAutoReplyHtml = (name: string) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Receipt Confirmed</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #111112; font-family: 'Arial', sans-serif; color: #ffffff;">
        <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="background-color: #1a1a1c; border-radius: 12px; padding: 32px; border: 1px solid #333;">
            <div style="text-align: center; margin-bottom: 32px;">
              <h1 style="color: #E87C2C; margin: 0; font-size: 24px; letter-spacing: -0.5px;">Message Received</h1>
            </div>
            
            <div style="margin-bottom: 32px;">
              <p style="margin: 0 0 16px 0; font-size: 16px; line-height: 1.6; color: #dddddd;">Hi ${name},</p>
              <p style="margin: 0 0 16px 0; font-size: 16px; line-height: 1.6; color: #dddddd;">
                Thanks for reaching out! I've received your message and will get back to you as soon as possible.
              </p>
              <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #dddddd;">
                In the meantime, feel free to connect with me on social media:
              </p>
            </div>
            
            <div style="background-color: #111112; border-radius: 8px; padding: 24px; text-align: center;">
              <div style="margin-bottom: 16px;">
                <a href="https://wa.me/213550365472" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; font-size: 14px;">WhatsApp</a>
              </div>
              <div>
                <a href="https://instagram.com/0xsmail" style="display: inline-block; background-color: #E1306C; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; font-size: 14px;">Instagram</a>
              </div>
            </div>
            
            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #333; text-align: center;">
              <p style="margin: 0; color: #666; font-size: 12px;">Kyodai Code - Premium Web Development</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};
