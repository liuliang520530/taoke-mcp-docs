import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,

  // 增加文件大小限制配置
  experimental: {
    largePageDataBytes: 256 * 1024, // 增加到256KB
  },

  // 可选：如果需要进一步优化，可以配置webpack分块
  webpack: (config) => {
    // 自定义webpack配置
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
        // 你可以添加自定义的缓存组来更好地控制代码分割
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          reuseExistingChunk: true,
        },
      },
    };

    return config;
  },
};

export default withMDX(config);
