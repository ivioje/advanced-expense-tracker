/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'auth-bg-img': "url('/src/assets/images/savings.svg')"
            }
        },
    },
    plugins: [],
};