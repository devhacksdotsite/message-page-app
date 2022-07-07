const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["border-theme-primary", "border-theme-secondary"],
  theme: {
    // screens: {
    //    sm: '412px',
    //    md: '600px',
    //    'tablet': '768px',
    //    lg: '900px',
    //    'laptop': '1024px',
    //    xl: '1200px',
    //    'desktop': '1280px',
    //  },
    boxShadow: {
      sm: "0 2px 8px 0 rgba(0, 0, 0, 0.12)",
      DEFAULT: "0 4px 12px 0 rgba(0, 0, 0, 0.16)",
      md: "0 8px 16px 0 rgba(0, 0, 0, 0.12)",
      lg: "0 16px 12px 0 rgba(0, 0, 0, 0.12)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      card: "2px 2px 4px 0 rgba(0, 0, 0, 0.16), 0px 0px 0px 0px rgba(0,0,0,0.06)",
      drop: "0 4px 4px 0 rgba(0, 0, 0, 0.16)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    extend: {
      colors: {
        theme: {
          primary: "var(--theme-color-primary)",
          secondary: "var(--theme-color-secondary)",
          action: {
            DEFAULT: "var(--theme-color-action)",
            hover: "var(--theme-color-action-hover)",
          },
          background: "var(--theme-color-content-background)",
          rule: {
            light: "var(--theme-color-rule-light)",
            medium: "var(--theme-color-rule-medium)",
          },
          "text-primary": "var(--theme-color-text-primary)",
          "text-secondary": "var(--theme-color-text-secondary)",
        },
        ui: {
          blue: {
            light: "var(--ui-blue-light)",
            DEFAULT: "var(--ui-blue)",
            dark: "var(--ui-blue-dark)",
          },
          gray: {
            lightest: "var(--ui-gray-lightest)",
            light: "var(--ui-gray-light)",
            "medium-light": "var(--ui-gray-medium-light)",
            medium: "var(--ui-gray-medium)",
            "medium-dark": "var(--ui-gray-medium-dark)",
            DEFAULT: "var(--ui-gray-default)",
            dark: "var(--ui-gray-dark)",
            black: "var(--ui-gray-black)",
          },
          green: {
            light: "var(--ui-green-light)",
            DEFAULT: "var(--ui-green)",
            dark: "var(--ui-green-dark)",
          },

          red: {
            light: "var(--ui-red-light)",
            DEFAULT: "var(--ui-red)",
            dark: "var(--ui-red-dark)",
          },
          yellow: {
            light: "var(--ui-yellow-light)",
            DEFAULT: "var(--ui-yellow)",
            dark: "var(--ui-yellow-dark)",
          },
        },
      },
      fontFamily: {
        brand: "var(--theme-font-brand)",
        header: "var(--theme-font-header)",
        body: "var(--theme-font-body)",
      },
      fontSize: {
        "2xxs": ["0.5rem", "1.5em"], // 8px
        xxs: ["0.625rem", "1.5em"], // 10px
        xs: ["0.75rem", "1.5em"], // 12px
      },
      height: {
        4.5: "1.125rem",
        18: "4.5rem",
      },
      maxWidth: {
        site: "1280px",
      },
      minHeight: {
        8: "2rem",
        12: "3rem",
        18: "4.5rem",
      },
      minWidth: {
        20: "6.25rem", // 100px
        30: "7.5rem", // 120px
        32: "8rem", // 128px
        35: "8.75rem", // 140px
        36: "9rem", // 144px
      },
      width: {
        4.5: "1.125rem",
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
