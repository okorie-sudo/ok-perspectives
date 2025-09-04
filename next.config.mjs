// next.config.mjs
const isProd = process.env.NODE_ENV === 'production'

// Set this to your repo name if you're deploying to https://username.github.io/<REPO_NAME>
// For a user/organization site (repo named username.github.io), leave as ''.
const repo ='ok-perspectives' // <-- change this
const isProjectSite = true // set false if deploying to username.github.io

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // required for GitHub Pages
  trailingSlash: true,           // safer routing on static hosts
  basePath: isProd && isProjectSite ? `/${repo}` : '',
  assetPrefix: isProd && isProjectSite ? `/${repo}/` : '',
}

export default nextConfig
