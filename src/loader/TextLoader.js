// 英文name会被替换为中文【姓名】
// 中文与英文之间用空格分开

function loader(source) {
  const options = this.getOptions()
  source = source.replace(/name/g, options.name)
  const l = /([\u4e00-\u9fa5]+)([A-Za-z])/g
  const r = /([A-Za-z])(()*[\u4e00-\u9fa5]+)/g
  source = source.replace(l, '$1 $2')
  source = source.replace(r, '$1 $2')

  return `export default ${JSON.stringify(source)}`
}

module.exports = loader
