/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGithubActions ? '/shikona' : '',
  assetPrefix: isGithubActions ? '/shikona/' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
