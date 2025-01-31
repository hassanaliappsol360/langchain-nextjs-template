const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
  assetPrefix:"https://langchain-nextjs-template-nu-sand.vercel.app/"
})
