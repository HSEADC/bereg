const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPage(template, filename) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename
  })
}

const htmlPages = [
  createPage('./src/index.html', './index.html'),
  createPage('./src/pages/articles.html', './pages/articles.html'),
  createPage('./src/pages/thought.html', './pages/thought.html'),
  createPage('./src/pages/rituals.html', './pages/rituals.html'),
  createPage('./src/pages/tests.html', './pages/tests.html'),
  createPage('./src/pages/tests/test1.html', './pages/tests/test1.html'),
  createPage('./src/pages/tests/test2.html', './pages/tests/test2.html'),
  createPage('./src/pages/tests/test3.html', './pages/tests/test3.html'),
  createPage('./src/pages/articles/article1.html','./pages/articles/article1.html'),
  createPage('./src/pages/articles/article2.html','./pages/articles/article2.html'),
  createPage('./src/pages/articles/article3.html','./pages/articles/article3.html'),
  createPage('./src/pages/rituals/ritual1.html','./pages/rituals/ritual1.html'),
  createPage('./src/pages/rituals/ritual2.html','./pages/rituals/ritual2.html'),
  createPage('./src/pages/rituals/ritual3.html','./pages/rituals/ritual3.html'),
  createPage('./src/pages/plug.html','./pages/plug.html')
]

module.exports = htmlPages
