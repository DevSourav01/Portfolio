export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": { 
            boxShadow: "0 0 20px 5px rgba(255, 165, 0, 0.7)" 
          },
          "50%": { 
            boxShadow: "0 0 40px 10px rgba(255, 165, 0, 1)" 
          },
        },
      },
      animation: {
        glow: "glow 1.5s infinite alternate",
      },
    },
  },
  plugins: [],
};
