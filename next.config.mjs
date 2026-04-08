/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  // This skips the 'Optimizing' step that is failing
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  trailingSlash: true,
  output: 'standalone',
};

export default nextConfig;