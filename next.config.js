/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains : ["via.placeholder.com"] // 외부 이미지 url을 사용하는 경우에는 여기에 url 넣어주면 됨
  }
}

module.exports = nextConfig
