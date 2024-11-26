import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		// Có thể ghi đè các màu css tại đây
		 

  		colors: {
			primary: {
				"50": "#f3f4f6",
				"100": "#fbe8f0",
				"200": "#f8d2e1",
				"300": "#f4adc8",
				"400": "#ef94b4",
				"500": "#e15381",
				"600": "#cf335d",
				"700": "#b32346",
				"800": "#94203b",
				"900": "#7c1f3b"
			},
			secondary: {
				"50": "#f0f8ff",
				"100": "#e0f0fe",
				"200": "#bae2fd",
				"300": "#7ccbfd",
				"400": "#37b1f9",
				"500": "#0d97ea",
				"600": "#016fb9",
				"700": "#025fa2",
				"800": "#065186",
				"900": "#0c446e"
			},

			//Base Color 
			black: "#1f1f1f",
			white: "#ffffff",
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
