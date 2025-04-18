import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,

  // 使用静态导出模式
  output: 'export',

  // 增加文件大小限制配置
  experimental: {
    largePageDataBytes: 512 * 1024, // 增加到512KB
  },

  // 禁用图像优化，适用于静态导出
  images: {
    unoptimized: true,
  },

  // 优化webpack配置
  webpack: (config) => {
    // 自定义webpack配置
    config.optimization.splitChunks = {
      chunks: 'all',
      maxInitialRequests: 25,
      maxAsyncRequests: 25,
      minSize: 20000,
      maxSize: 40000,
      cacheGroups: {
        default: false,
        vendors: false,
        framework: {
          name: 'framework',
          test: /[\\/]node_modules[\\/](@react|react|react-dom|next|fumadocs)[\\/]/,
          priority: 40,
          enforce: true,
        },
        lib: {
          test: /[\\/]node_modules[\\/](?!(@react|react|react-dom|next|fumadocs)[\\/])/,
          name: 'lib',
          priority: 30,
          minChunks: 2,
        },
        commons: {
          name: 'commons',
          minChunks: 2,
          priority: 20,
        },
        shared: {
          name: 'shared',
          minChunks: 2,
          priority: 10,
          reuseExistingChunk: true,
        },
      },
    };

    return config;
  },
};

export default withMDX(config);
