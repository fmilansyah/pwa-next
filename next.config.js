const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
})

const nextConfig = {
  reactStrictMode: true,
  ...withPWA({
    experimental: {
      newNextLinkBehavior: true,
    },
  })
}

module.exports = nextConfig
