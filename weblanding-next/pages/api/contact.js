export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  try {
    const { name, email, subject, message } = req.body
    // Basic validation
    if (!email || !message) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    // TODO: integrate with SendGrid/Mailgun or other provider
    // For now, just log and return success (in production, remove console.log)
    console.log('Contact form submission:', { name, email, subject, message })

    return res.status(200).json({ message: 'Message received' })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}
