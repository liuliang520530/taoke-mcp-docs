import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,

  // 使用静态导出模式
  output: 'export',

  // 禁用图像优化，适用于静态导出
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);

