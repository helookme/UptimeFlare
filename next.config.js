/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ！！！ 关键：添加此行以启用静态导出模式 ！！！
  output: 'export',
}

module.exports = nextConfig

if (process.env.NODE_ENV === 'development') {
  const { setupDevBindings } = require('@cloudflare/next-on-pages/next-dev')
  setupDevBindings({
    bindings: {
      UPTIMEFLARE_STATE: {
        type: 'kv',
        id: 'UPTIMEFLARE_STATE',
      },
    },
  })
}
 
