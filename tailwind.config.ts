import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#2563eb', // Azul forte
					foreground: '#fff'
				},
				secondary: {
					DEFAULT: '#1e293b', // Preto Azulado
					foreground: '#fff'
				},
				destructive: {
					DEFAULT: '#e11d48', // Vermelho vibrante
					foreground: '#fff'
				},
				muted: {
					DEFAULT: '#334155', // cinza escuro
					foreground: '#cbd5e1'
				},
				accent: {
					DEFAULT: '#64748b',
					foreground: '#fff'
				},
				card: {
					DEFAULT: 'rgba(40,40,50,0.8)', // fundo glass, base cards
					foreground: '#fff'
				},
				bgGlass: "rgba(23, 27, 38, 0.85)", // Fundo glass principal
			},
			borderRadius: {
				"2xl": "2rem",
				"3xl": "2.5rem",
				lg: '1.5rem',
				md: '1rem',
				sm: '0.75rem'
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui'],
				playfair: ['Playfair Display', 'serif'],
			},
			backgroundImage: {
				'gradient-glass': 'radial-gradient(at 80% 20%,rgba(37,99,235,0.20) 0,rgba(0,0,0,0) 80%),radial-gradient(at 20% 80%,rgba(225,29,72,0.16) 0,rgba(0,0,0,0) 100%),linear-gradient(120deg,#131722 0,#232a3b 100%)'
			},
			boxShadow: {
				glass: "0 8px 30px 0 rgba(0,0,0,0.27)",
				card: "0 6px 20px 0 rgba(0,0,0,0.13)"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
