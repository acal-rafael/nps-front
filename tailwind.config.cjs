/** @type {import('tailwindcss').Config} */

// original:
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        waves: "url('../public/images/waves.gif')",
        "waves-top": "url('../public/images/waves-top.gif')",
        "waves-full": "url('../public/images/waves-full.gif')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
