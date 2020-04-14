const { colors } = require('tailwindcss/defaultTheme');

module.exports = {

    important: true,

    theme: {
        colors: {
            primary: {
                lighter:  '#ffebee',
                light:    '#e57373',
                default:  '#e53935',
                dark:     '#b71c1c',
            },
            'on-primary': {
                lighter:  '#000000',
                light:    '#000000',
                default:  '#ffffff',
                dark:     '#ffffff',
            },
            gray: colors.gray,
            black: colors.black,
            white: colors.white,
            yellow: colors.yellow,
            red: colors.red,
            green: colors.green,
            transparent: colors.transparent,
        },

        extend: {
            boxShadow: {
                outline: '0 0 0 3px #e57373',
            },
            borderWidth: {
                '1': '1px',
            },
        }
    },
    variants: {
        fill   : ['responsive', 'hover', 'focus', 'active'],
        stroke : ['responsive', 'hover', 'focus', 'active']
    },
}