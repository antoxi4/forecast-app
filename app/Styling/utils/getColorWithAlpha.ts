import { Colors } from "../colors"

export const getColorWithAlpha = (hexColor: Colors, alpha: number): string => {
  const hex = hexColor.replace('#', '')
  
  let r: number, g: number, b: number
  
  if (hex.length === 3) {
    r = parseInt(hex[ 0 ] + hex[ 0 ], 16)
    g = parseInt(hex[ 1 ] + hex[ 1 ], 16)
    b = parseInt(hex[ 2 ] + hex[ 2 ], 16)
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16)
    g = parseInt(hex.substring(2, 4), 16)
    b = parseInt(hex.substring(4, 6), 16)
  } else {
    return hexColor
  }
  
  const clampedAlpha = Math.max(0, Math.min(1, alpha))
  
  return `rgba(${ r }, ${ g }, ${ b }, ${ clampedAlpha })`
}