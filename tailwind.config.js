module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      DEFAULT: "30px",
    },
    minHeight: {
      sectionXs: "160px",
      sectionBig: "440px",
      sectionBigMd: "775px",
      sectionSmall: "300px",
      sectionSmallMd: "560px",
    },
    minWidth: {
      desktopLogo: "170px",
    },
    height: {
      gradient: "500px",
    },
    extend: {
      fontFamily: {
        bold: ["Neue Montreal Bold", "sans"],
        sans: ["Neue Montreal", "sans"],
        display: ["Right Grotesk", "sans"],
      },
      fontSize: {
        xxs: ".5rem",
        countdown: "207px",
      },
      blur: {
        gradient: "100px",
      },
      translate: {
        gradient: "-50%",
      },
      colors: {
        purple: {
          dark: "#372152",
          DEFAULT: "#6642BB",
          light: "#8165C1",
          lighter: "#CBAEF5",
          lightest: "#F3F0F9",
        },
        green: {
          DEFAULT: "#80D7B6",
          dark: "#30BFA7",
          darker: "#5DB19C",
        },
        orange: {
          DEFAULT: "#FF481D",
        },
        red: {
          light: "#E54158",
          DEFAULT: "#DD4059",
        },
        blue: {
          DEFAULT: "#4B71FF",
        },
        grey: {
          DEFAULT: "#707070",
        },
        rose: {
          DEFAULT: "#F1A8BA",
        },
        pink: {
          DEFAULT: "#E52663",
        },
      },
      backgroundImage: () => ({
        "subscribe-now": "url('/subscribe-now/background.jpg')",
        "upcrate-as-gift": "url('/upcrate-as-gift/background.png')",
        "cpt-in-forest": "url('/cpt-in-forest.png')",
        leuchtturm: "url('/leuchtturm.png')",
        "flowing-heads": "url('/flowing-heads.svg')",
        "cotman-tubes": "url('/cotman-tubes.png')",
        "crates-image-section": "url('/crates/image-section.png')",
        "artcrew-image-section01": "url('/artcrew/image-section01.png')",
        "artcrew-image-section02": "url('/artcrew/image-section02.png')",
        "artcrew-image-section03": "url('/artcrew/image-section03.jpg')",
        "artcrew-image-section04": "url('/artcrew/image-section04.png')",
        "artcrew-image-section05": "url('/artcrew/image-section05.png')",
        "crates-hero": "url('/crates/hero-image.png')",
        "contact-image-section": "url('/contact/image-section.png')",
        "many-heads": "url('/invite-friends/bg.svg')",
      }),
      dropShadow: {
        flag: "-2px 5px 10px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      opacity: ["disabled"],
    },
  },
  plugins: [],
  corePlugins: {
    borderRadius: true,
  },
};
