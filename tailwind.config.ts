import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#fff8ee",
        cream: "#f6e6d2",
        beige: "#e9cdb4",
        blush: "#d99b91",
        chocolate: "#482511",
        cocoa: "#6f3c20",
        ganache: "#2c160c",
        gold: "#c79a57"
      },
      boxShadow: {
        velvet: "0 32px 90px rgba(72, 37, 17, 0.16)",
        glow: "0 0 80px rgba(199, 154, 87, 0.32)"
      }
    }
  },
  plugins: []
};

export default config;
