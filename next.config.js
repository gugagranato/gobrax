/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/form',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-inline' js.hsforms.net",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
