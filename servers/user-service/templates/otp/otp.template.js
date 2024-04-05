exports.OTPtemplate = (OTP) => {
  return `
  
<body style="font-family: Poppins, Arial, sans-serif; margin: 0px; padding: 0px; background-color: #ffffff;">
<table role="presentation"
  style="width: 100%; border-collapse: collapse; border: 0px; border-spacing: 0px; font-family: Arial, Helvetica, sans-serif; background-color: #3B3B98;">
  <tbody>
    <tr>
      <td align="center" style="padding: 1rem 2rem; vertical-align: top; width: 100%;">
        <table role="presentation" style="max-width: 600px; border-collapse: collapse; border: 0px; border-spacing: 0px; text-align: left;">
          <tbody>
            <tr>
              <td style="padding: 40px 0px 0px;">
                <div style="text-align: left;">
                  
                </div>
                <div style="border-radius:5px;padding: 20px; background-color: rgb(255, 255, 255);">
                  <div style="color: rgb(0, 0, 0); text-align: left;">
                    <h1 style="margin: 1rem 0">Verification code</h1>
                    <p style="padding-bottom: 16px">Please use the verification code below to sign in.</p>
                    <p style="color: white; padding: 8px 15px; border-radius:4px; background-color: #3B3B98; width: fit-content"><strong style="font-size: 130%">${OTP}</strong></p>
                    <p style="padding-bottom: 16px">If you didn’t request this, you can ignore this email.</p>
                    <p style="padding-bottom: 16px">Thanks,<br>The Smart Todo team</p>
                  </div>
                </div>
                <div style="padding-top: 20px; color: rgb(153, 153, 153); text-align: center;">
                  <p style="padding-bottom: 16px">Made with ♥ in India</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
</body>
  `;
};
