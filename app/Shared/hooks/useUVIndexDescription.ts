
export const useUVIndexDescription = (uvIndex: number): string => {
  if (uvIndex < 3) {
    return "Low"
  } else if (uvIndex < 6) {
    return "Moderate"
  } else if (uvIndex < 8) {
    return "High"
  } else if (uvIndex < 11) {
    return "Very High"
  } else {
    return "Extreme"
  }
}