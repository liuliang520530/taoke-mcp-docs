import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL('http://bbs.weiququ.cn/template/weiququ/static/imgs/qrgroup.png')],
  },
};

export default withMDX(config);
