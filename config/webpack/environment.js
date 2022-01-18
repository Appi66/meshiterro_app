const { environment } = require('@rails/webpacker')

module.exports = environment

const webpack = require('webpack')
environment.plugin.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    Popper: 'popper.js'
  })
)