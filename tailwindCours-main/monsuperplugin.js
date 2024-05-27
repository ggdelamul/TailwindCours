
const plugin = require('tailwindcss/plugin');
module.exports = plugin(
    ({ addBase, theme, addComponents }) => {
    addBase({
        'h1': {
            fontSize: "35px",
        },
        'h2': {
            fontSize: theme("fontSize.2xl"),
            color: 'green'
        }
    });
    addComponents({
        '.card': {
            borderWidth: theme('borderWidth.4'),
            borderRadius: theme('borderRadius.md')
        }
    })
});