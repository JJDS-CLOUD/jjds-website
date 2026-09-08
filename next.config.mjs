const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      { source: "/process-pipework-melbourne", destination: "/process-pipework-australia", permanent: true },
      { source: "/site-welding-victoria", destination: "/site-welding-australia", permanent: true },
      { source: "/industrial-maintenance-victoria", destination: "/industrial-maintenance-australia", permanent: true },
    ];
  },
};

export default nextConfig;
