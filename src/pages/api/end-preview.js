export default function handler(req, res) {
    // Clear preview mode cookies
    res.clearPreviewData();
  
    // Redirect to the homepage or another page
    res.writeHead(307, { Location: "/" });
    res.end();
  }
  