import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  try {
    const { name, email, subject, message } = req.body
    if (!email || !message) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    let host = process.env.SMTP_HOST
    let port = process.env.SMTP_PORT || 587
    let user = process.env.SMTP_USER
    let pass = process.env.SMTP_PASS

    if (!host) {
      // Create a test account dynamically for testing
      const testAccount = await nodemailer.createTestAccount()
      host = "smtp.ethereal.email"
      port = 587
      user = testAccount.user
      pass = testAccount.pass
      console.log('No SMTP config found. Falling back to Ethereal Email test account.')
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      auth: { user, pass },
    })

    const mailOptions = {
      from: `"${name}" <${user}>`,
      replyTo: email,
      to: 'info@radixsystems.online',
      subject: subject || 'New Quote Request - Radix Systems',
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Quote Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }

    const info = await transporter.sendMail(mailOptions)
    
    if (!process.env.SMTP_HOST) {
        console.log("Mock Email Preview URL: %s", nodemailer.getTestMessageUrl(info));
        return res.status(200).json({ 
          message: 'Message received', 
          previewUrl: nodemailer.getTestMessageUrl(info) 
        })
    }

    return res.status(200).json({ message: 'Message received' })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}
