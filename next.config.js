/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    ACCESS_KEY: 'ACCESS_KEY',
    SECRET_KEY: 'SECRET_KEY',
    BUCKET_NAME: 'BUCKET_NAME',
  },
}

module.exports = nextConfig
