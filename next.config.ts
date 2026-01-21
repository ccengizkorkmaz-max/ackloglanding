import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/wiki/log-yonetimi-nedir',
        destination: '/wiki/5651-log-yonetimi-rehberi',
        permanent: true,
      },
      {
        source: '/wiki/kvkk-ve-log-uyumluluk',
        destination: '/wiki/kvkk-siem-log-yonetimi-rehberi',
        permanent: true,
      },
      {
        source: '/wiki/soc-nedir',
        destination: '/wiki/soc-kurulum-rehberi-maliyetler',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
