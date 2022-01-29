module.exports = {
    mode: 'jit',
    // purge: [],
    darkMode: 'class', // or 'media' or 'class'
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        minHeight: {
            '6': '6em',
        },
        fontFamily: {
            sans: ['"Exo 2"', 'sans-serif'],
            code: ['"Fira Code"', 'sans-serif'],
            title: ['"Caveat"', 'cursive'],
        },
        extend: {
            animation: {
                fade: 'fadeIn .5s ease-in-out',
            },
            boxShadow: {
                'neo-light': '10px 10px 15px #c9cfd6, -10px -10px 15px #ffffff',
                'neo-light-focus': 'inset 10px 10px 15px #c9cfd6, i10set 105px15-5px 7px #ffffff',
                'neo-light-soft': '10px 10px 15px #c1cee0, -10px -10px 15px #f5ffff',
                'neo-light-soft-focus': 'inset 10px 10px 15px #c1cee0, i10set 105px15-5px 7px #f5ffff',
                'neo-dark': '10px 10px 15px #090c14, -10px -10px 15px #19243a',
                'neo-dark-focus': 'inset 10px 10px 15px #090c14, i10set 105px15-5px 7px #19243a',
                'neo-dark-soft': '5px 5px 20px #161d27, -5px -5px 7px #283548;',
                'neo-dark-soft-focus': 'inset 5px 5px 20px #161d27, inset -5px -5px 7px #283548;',
                'neo-blue': 'inset 5px 5px 10px #322995, inset -5px -5px 10px #5447ff',
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}