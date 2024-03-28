/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow: "hsl(47, 88%, 63%)",
        white: "hsl(0, 0%, 100%)",
        grey: "hsl(0, 0%, 50%)",
        black: "hsl(0, 0%, 7%)",
      },
      fontFamily: {
        figtree: ["figtree"],
        "figtree-italic": ['"figtree-italic"'],
      },
      boxShadow: {
        custom: "8px 8px 0px hsl(0, 0%, 7%)",
      },
    },
  },
  plugins: [],
};
