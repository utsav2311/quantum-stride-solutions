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
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				playfair: ["Playfair Display", "serif"],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				medical: {
					blue: 'hsl(var(--medical-blue))',
					teal: 'hsl(var(--medical-teal))',
					light: 'hsl(var(--medical-light))',
					dark: 'hsl(var(--medical-dark))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translate3d(0, 20px, 0)' },
					'100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translate3d(0, 50px, 0)' },
					'100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' }
				},
				'slide-left': {
					'0%': { opacity: '0', transform: 'translate3d(-50px, 0, 0)' },
					'100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' }
				},
				'slide-right': {
					'0%': { opacity: '0', transform: 'translate3d(50px, 0, 0)' },
					'100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale3d(0.9, 0.9, 1)' },
					'100%': { opacity: '1', transform: 'scale3d(1, 1, 1)' }
				},
				'zoom-in': {
					'0%': { opacity: '0', transform: 'scale3d(0.3, 0.3, 1)' },
					'100%': { opacity: '1', transform: 'scale3d(1, 1, 1)' }
				},
				'rotate-in': {
					'0%': { opacity: '0', transform: 'rotate3d(0, 0, 1, 45deg) scale3d(0.8, 0.8, 1)' },
					'100%': { opacity: '1', transform: 'rotate3d(0, 0, 1, 0deg) scale3d(1, 1, 1)' }
				},
				'float': {
					'0%, 100%': { transform: 'translate3d(0, 0, 0)' },
					'50%': { transform: 'translate3d(0, -20px, 0)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.5)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.8)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200px 0' },
					'100%': { backgroundPosition: 'calc(200px + 100%) 0' }
				},
				'bounce-in': {
					'0%': { opacity: '0', transform: 'scale3d(0.3, 0.3, 1)' },
					'20%': { transform: 'scale3d(1.1, 1.1, 1)' },
					'40%': { transform: 'scale3d(0.9, 0.9, 1)' },
					'60%': { opacity: '1', transform: 'scale3d(1.03, 1.03, 1)' },
					'80%': { transform: 'scale3d(0.97, 0.97, 1)' },
					'100%': { opacity: '1', transform: 'scale3d(1, 1, 1)' }
				},
				'swing': {
					'20%': { transform: 'rotate3d(0, 0, 1, 15deg)' },
					'40%': { transform: 'rotate3d(0, 0, 1, -10deg)' },
					'60%': { transform: 'rotate3d(0, 0, 1, 5deg)' },
					'80%': { transform: 'rotate3d(0, 0, 1, -5deg)' },
					'100%': { transform: 'rotate3d(0, 0, 1, 0deg)' }
				},
				'rubber-band': {
					'0%': { transform: 'scale3d(1, 1, 1)' },
					'30%': { transform: 'scale3d(1.25, 0.75, 1)' },
					'40%': { transform: 'scale3d(0.75, 1.25, 1)' },
					'50%': { transform: 'scale3d(1.15, 0.85, 1)' },
					'65%': { transform: 'scale3d(0.95, 1.05, 1)' },
					'75%': { transform: 'scale3d(1.05, 0.95, 1)' },
					'100%': { transform: 'scale3d(1, 1, 1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				'slide-up': 'slide-up 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				'slide-left': 'slide-left 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				'slide-right': 'slide-right 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				'scale-in': 'scale-in 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
				'zoom-in': 'zoom-in 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				'rotate-in': 'rotate-in 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'shimmer': 'shimmer 2s linear infinite',
				'bounce-in': 'bounce-in 0.75s cubic-bezier(0.4, 0, 0.2, 1)',
				'swing': 'swing 1s ease-in-out',
				'rubber-band': 'rubber-band 1s ease-in-out'
			},
			transitionTimingFunction: {
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'in-back': 'cubic-bezier(0.36, 0, 0.66, -0.56)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
