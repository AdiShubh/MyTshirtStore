/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
            },
            {
                protocol: "https",
                hostname: "i.pinimg.com",
            },
            {
                protocol: "https",
                hostname: "img.freepik.com",
            },
            {
                protocol: "https",
                hostname: "b8779673.flyingcdn.com",
            },
        ],

    },
};


export default nextConfig;
