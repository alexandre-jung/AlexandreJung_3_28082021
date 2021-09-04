const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        purgecss({
            content: ['./**/*.html']
        }),
        autoprefixer(),
        cssnano({
            preset: ['default', {
                discardComments: {
                    removeAll: true
                }
            }]
        }),
    ]
}
