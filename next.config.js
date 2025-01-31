const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
  assetPrefix:"https://chatgptnextweb-kappa-one.vercel.app/"
})
