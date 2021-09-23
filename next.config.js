const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["shop.upcrate.art"],
  },
});
