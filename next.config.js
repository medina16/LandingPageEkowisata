module.exports = {
    images: {
      domains: ['images.ctfassets.net'],
    },
    async headers() {
      return [
        {
          source: '/(.*)', // Apply headers to all routes
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "frame-ancestors 'self' https://app.contentful.com",
            },
          ],
        },
      ];
    },
  };
  