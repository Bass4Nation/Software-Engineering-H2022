
// Om vi trenger en random string id, så kan vi bruke denne

export const generateRandomId = () => {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let nums = '0123456789'
  
    let id = []
  
    let charCounter = 0
    let numCounter = 0
  
    // Lager en id med 4 bokstaver og 4 tall, fortsetter til id har blitt fylt (8)
    while (id.length !== 8) {
      // Sjekker om det er trukket 4 bokstaver, og om Math.random() gir oss mindre enn 0.5
      // Math.random() < 0.5 ? Velge bokstav : Velge tall
      // charCounter sørger for at vi ikke får mer en 4 bokstaver, numCounter gjør det samme
      if (charCounter < 4 && Math.random() < 0.5) {
        // Vis true, velg char, legg til char i id, og increment charCounter
        let char = chars.charAt(Math.random() * chars.length)
        id.push(char)
        chars = chars.replace(char, '')
        charCounter++
      } else if (numCounter < 4) {
        // Vis true, velg number, legg til number i id, og increment numCounter
        let num = nums.charAt(Math.random() * nums.length)
        id.push(num)
        nums = nums.replace(num, '')
        numCounter++
      }
    }
  
    return id.join('')
  }
  