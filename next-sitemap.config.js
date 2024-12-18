const siteUrl = "http://localhost:3000/";

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", disallow: "/404" },
            { userAgent: "*", allow: "/" },
        ],
        additionalSitemaps: [
            "http://localhost:3000/server-sitemap.xml"
        ]
    },
    exclude: ["/404", "/server-sitemap.xml"]
}