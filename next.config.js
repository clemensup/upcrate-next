const nextTranslate = require("next-translate");

const moduleExports = nextTranslate({
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["shop.upcrate.art"],
  },
  async redirects() {
    return [
      {
        source: "/refer-a-friend",
        destination: "https://shop.upcrate.art/refer-a-friend",
        permanent: true,
      },
      {
        source: "/shop",
        destination: "https://shop.upcrate.art/shop",
        permanent: true,
      },
      {
        source: "/account",
        destination: "https://shop.upcrate.art/account",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terms-and-conditions",
        permanent: true,
      },
    ];
  },
});

module.exports = moduleExports;
