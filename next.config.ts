import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/unity/:path*',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
      {
        source: '/unity/:path*.js.br',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript',
          },
          {
            key: 'Content-Encoding',
            value: 'br',
          },
        ],
      },
      {
        source: '/unity/:path*.wasm.br',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/wasm',
          },
          {
            key: 'Content-Encoding',
            value: 'br',
          },
        ],
      },
      {
        source: '/unity/:path*.data.br',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/octet-stream',
          },
          {
            key: 'Content-Encoding',
            value: 'br',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
