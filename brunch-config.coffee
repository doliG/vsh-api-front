exports.config =
  files:
    stylesheets:
      joinTo: 'css/app.css'
      order:
        before: ['app/styles/fonts.styl', 'app/styles/reset.styl']

    javascripts:
      joinTo: 'js/app.js'

  plugins:
    babel:
      presets: ['latest', 'react']
      plugins: ['transform-class-properties']
