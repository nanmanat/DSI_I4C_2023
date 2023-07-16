/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // important: "#root-app",
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
      },
      colors: {
        "app-background": "#F5F5F7",
        background: "#F0F3F4",
        menu: {
          900: "#191465",
          800: "#292A86",
          700: "#31329D",
          600: "#4041C1",
          500: "#5068EF",
          400: "#9496F4",
          300: "#EBEBFD",
          200: "#F7F7FF",
        },
        primary: "#191465",
        secondary: "#F5F5F7",
        success: "#03CEC6",
        warning: "#F2B055",
        danger: "#F46167",
        danger2: "#FFF5F2",
        focus: "#9496F4",
        purple:"#4547CB",
        border: {
          1: "#EBEBFD",
          2: "#DBE4ED",
        },
        orange:{
          50:"#F2965B",
        },
        "b-content": "#A9ACC5",
        "placeholder": "#A9ACC5",
        "primary-text": "#0C0C0F",
        "secondary-text": "#565A5B",
        "success-text": "#00A59F",
        "danger-text": "#9F2226",

        "active-nav-border":"#4547CB",
        "active-nav-color":"#4547CB",
        "active-nav-bg":"#F7F7FF"
      },
    },
  },
  plugins: [require("tailwindcss-safe-area"), require('@tailwindcss/line-clamp')],
};
