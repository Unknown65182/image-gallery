module.exports = {
  future: { webpack5: true },
  images: {
    domains: ['pixabay.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/all',
        permanent: true,
      },
    ];
  },
};
