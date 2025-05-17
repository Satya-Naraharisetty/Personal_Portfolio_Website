/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-in-out',
                slideInRight: 'slideInRight 1s ease-in-out',
                slideInLeft: 'slideInLeft 1s ease-in-out',
                bounce: 'bounce 1s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': {opacity: '0'},
                    '100%': {opacity: '1'},
                },
                slideInRight: {
                    '0%': {transform: 'translateX(100px)', opacity: '0'},
                    '100%': {transform: 'translateX(0)', opacity: '1'},
                },
                slideInLeft: {
                    '0%': {transform: 'translateX(-100px)', opacity: '0'},
                    '100%': {transform: 'translateX(0)', opacity: '1'},
                },
            },
        },
    },
    plugins: [],
};