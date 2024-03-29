/** @type {import('tailwindcss').Config} */
export const content = ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      title: ['Yeseva One'],
      subtitle: ['Alice'],
      body: ['Lato'],
      fallbacks: {
        title: ['Roboto', 'Arial', 'sans-serif'],
        body: ['Roboto', 'Arial', 'sans-serif'],
        links: ['Roboto', 'Arial', 'sans-serif']
      }
    },
    colors: {
      background: "#F5F4F6",
      primary:  "#333232",
      secondary: "#F8D0DB",
      secondaryDark: "#841F52",
      tertiary: "#B1E7D7",
      tertiaryDark: "#29867B",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    },
    boxShadow: {
      title: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      button: "0px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    screens: {
      'xs': '390px',
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
  },
};
export const plugins = [];

