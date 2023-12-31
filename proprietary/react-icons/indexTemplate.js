const path = require('path')

function indexTemplate(filePaths) {
  const exportEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath))
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename

    // The name of the React component for each icon ends with `Icon`
    return `export { default as ${exportName}Icon } from './${basename}'`
  })
  return exportEntries.join('\n')
}

module.exports = indexTemplate
