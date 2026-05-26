export function createWelcomeEmailTemplate(name, clientURL) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message Confirmation</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; -webkit-font-smoothing: antialiased;">

    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f6f8; padding: 40px 10px;">
        <tr>
            <td align="center">
                
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); overflow: hidden;">
                    
                    <tr>
                        <td align="center" style="background-color: #4f46e5; padding: 40px 20px;">
                            <div style="background-color: rgba(255, 255, 255, 0.2); width: 60px; height: 60px; border-radius: 50%; display: inline-block; margin-bottom: 15px;">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 15px;">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">Message Received!</h1>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 40px 30px; background-color: #ffffff;">
                            <p style="margin-top: 0; font-size: 16px; color: #334155; line-height: 1.6;">Hi ${name},</p>
                            
                            <p style="font-size: 16px; color: #334155; line-height: 1.6;">Thanks for reaching out to us! This is a quick confirmation to let you know that your message has safely landed in our inbox.</p>
                            
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border-radius: 6px; border-left: 4px solid #4f46e5; margin: 25px 0;">
                                <tr>
                                    <td style="padding: 15px 20px;">
                                        <p style="margin: 0 0 5px 0; font-size: 13px; text-transform: uppercase; color: #64748b; font-weight: 600; letter-spacing: 0.5px;">Submission Details</p>
                                        <p style="margin: 0; font-size: 15px; color: #1e293b;"><strong>Tracking ID:</strong> #[123456]</p>
                                        <p style="margin: 5px 0 0 0; font-size: 15px; color: #1e293b;"><strong>Expected Reply:</strong> Within 24 Hours</p>
                                    </td>
                                </tr>
                            </table>

                            <p style="font-size: 16px; color: #334155; line-height: 1.6;">Our team is already reviewing your details. If your inquiry requires immediate assistance, please feel free to browse our Help Center using the button below.</p>
                            
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 30px; margin-bottom: 20px;">
                                <tr>
                                    <td align="center">
                                        <a href="[Your FAQ Link Here]" target="_blank" style="background-color: #4f46e5; color: #ffffff; text-decoration: none; padding: 12px 30px; font-size: 15px; font-weight: 600; border-radius: 5px; display: inline-block; box-shadow: 0 2px 5px rgba(79, 70, 229, 0.3);">Visit Help Center</a>
                                    </td>
                                </tr>
                            </table>
                            
                            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;">
                            
                            <p style="margin-bottom: 0; font-size: 15px; color: #64748b; line-height: 1.6;">Best regards,<br><strong style="color: #1e293b;">The ${clientURL} Team</strong></p>
                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="background-color: #f8fafc; padding: 25px 20px; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0; font-size: 12px; color: #94a3b8; line-height: 1.5;">You are receiving this email because you filled out a contact form on our website.</p>
                            <p style="margin: 5px 0 0 0; font-size: 12px; color: #94a3b8;">&copy; 2026 [Company Name]. All rights reserved.</p>
                        </td>
                    </tr>

                </table>
                </td>
        </tr>
    </table>

</body>
</html>
`;
}
