function addPx(str: string) {
  return str + 'px'
}

export function parseColors(colorFigmaTokens: any) {
  // captures color catagory names to create object key
  const colorCatogoryNames = Object.keys(colorFigmaTokens);

  return Object.values(colorFigmaTokens).flatMap((tokens, index) => {
    const colorObj = Object.entries(tokens!).reduce((prev, [name, data]) => ({ ...prev, [name]: data.value }), {})
    return { [colorCatogoryNames[index].toLowerCase()]: colorObj }
  }).reduce((prev, cur) => {
    return { ...prev, ...cur }
  }, {})
}

export function parseTypography(font: any) {
  return Object.entries(font).reduce((prev: any, [textStyle, styleWeights]) => {
    const colorTokens: any = { ...prev }
    Object.entries(styleWeights as any).map(([weightName, properties]) => {
      const { fontSize, fontFamily, fontWeight, letterSpacing, lineHeight } = (properties as any).value
      colorTokens[`${textStyle}-${weightName}`] = {
        fontSize: addPx(fontSize),
        fontFamily,
        fontWeight,
        letterSpacing: addPx(letterSpacing),
        lineHeight: addPx(lineHeight)
      }
    })
    return colorTokens;
  }, {})
}