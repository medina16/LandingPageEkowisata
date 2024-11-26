export default function handler(req, res) {
  const { secret } = req.query;

  // Check for the secret
  if (secret !== process.env.PREVIEW_KEY) {
    return res.status(401).json({ message: 'Invalid secret key' });
  }

  // Enable draft mode
  res.setDraftMode({ enable: true });

  // Redirect to the page you want to preview
  res.redirect('/');
}
