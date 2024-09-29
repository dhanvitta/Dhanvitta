const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',  // Disable PWA in development mode
})

/** @type {import('next').NextConfig} */
module.exports = withPWA({
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",  // This allows loading images from any external source
            },
        ],
    },
})
