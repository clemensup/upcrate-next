const nextTranslate = require("next-translate");
const { withSentryConfig } = require("@sentry/nextjs");

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

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
