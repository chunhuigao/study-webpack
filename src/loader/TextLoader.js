function loader(source) {
  const options = this.getOptions()
  console.log('source', source)
  console.log('options', options)
  source = source.replace(/name/g, options.name)

  return `export default ${JSON.stringify(source)}`
}

module.exports = loader
