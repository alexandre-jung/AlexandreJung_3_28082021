const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
    plugins: [
        purgecss({
            content: ['./**/*.html']
        }),
        cssnano({
            preset: ['default', {
                discardComments: {
                    removeAll: true
                }
            }]
        }),
    ]
}
