module.exports = function (content) {
  const s = content;
  return `export default 
    content:${s}
  } `;
};
