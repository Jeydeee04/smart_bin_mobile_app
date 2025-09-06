/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            fontFamily: {
                poppins_regular: ['Poppins-Regular'],
                poppins_medium: ['Poppins-Medium'],
                poppins_semibold: ['Poppins-SemiBold'],
                poppins_bold: ['Poppins-Bold'],
                oswald_bold: ['Oswald-Bold'],
            }
        },
    },
    plugins: [],
}