import type { Config } from "tailwindcss";
import { createPlugin } from "windy-radix-palette";

const radixColors = createPlugin();

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [radixColors.plugin],
  darkMode: ["class"],
};

export default config;
