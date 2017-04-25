

exports.config =
  files:
    stylesheets:
      joinTo: 'css/app.css'
      order:
        before: 'app/styles/reset.css'

    javascripts:
      joinTo: 'js/app.js'

  plugins:
    babel:
      presets: ['latest', 'react']
      plugins: ['transform-class-properties']

