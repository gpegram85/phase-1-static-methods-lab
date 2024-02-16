class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9\-\'\s.]/g, "")
  }

  static titleize(string) {
    const excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words = string.split(' ')

    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1)
    for (let i = 0; i < words.length; i++) {
      if (!excludedWords.includes(words[i])) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
      }
      
    }
    return words.join(' ')
  }
}