<!-- Instructions for this project -->
# Instruksjoner for dette prosjektet

## Krav til utviklingsmiljø

* [Node.js](https://nodejs.org/en/) (Denne vesjonen er testet: v19.0.1)

## Oppsett

1. Klon prosjektet fra [Github](https://github.com/Bass4Nation/Software-Engineering-H2022)
![Last ned fra github som zip](https://github.com/Bass4Nation/Software-Engineering-H2022/blob/main/README%20IMAGES/Github%20download.png?raw=true)
2. Hvis lastet ned som zip-fil, pakke ut zip-filen.
3. Åpne en terminal i prosjektets rotmappe. (Høyreklikk på mappen og velg "Open in Terminal" eller "Åpne i PowerShell") eller bruk kommandoen `cd` for å navigere til prosjektets rotmappe.
4. Installer avhengigheter med `npm install`. Dette vil installere alle avhengigheter som er definert i `package.json`. Dette kan ta litt tid. Når prosessen er ferdig, vil du se en mappe kalt `node_modules` i prosjektets rotmappe. Denne mappen inneholder alle avhengighetene som er installert. (Dette må gjøres kun en gang).

## Hvordan kjøre prosjektet
(For å kjøre prosjektet må du ha gjort stegene i "Oppsett" først)
1. Kjør `npm start` for å starte prosjektet
2. Gå til `http://localhost:3000` i nettleseren din. Viss du får en feilmelding om at porten er opptatt, så står det i terminalen hvilken port du må gå til i terminalen.

![CMD instrukser](https://github.com/Bass4Nation/Software-Engineering-H2022/blob/main/README%20IMAGES/PowerShell%20instrukser.png?raw=true)


## Hvordan kjøre testene
(For å kjøre testene må du ha gjort stegene i "Oppsett" først)
1. Kjør `npm test` for å kjøre testene
2. Se resultatene i terminalen
Brukere skal ha mulighet for å kansellere reservasjon av bil.   


## Tester disse kravene fra prosjektbeskrivelsen
Alle testfilene er i mappen tests som er i src/components/tests. Alle testene er skrevet i React-testing-libaries og kjøres med npm test.

### Krav 1 - Det skal være mulig å registrere nye brukerkontoer 
Den blir testet i App.test.js under "Rendering frontpage &rarr; Login page &rarr; Register a test user &rarr; back to frontpage"

### Krav 2 - Det skal være mulig å logge seg inn med registeret brukerkonto
Den blir testet i App.test.js under "Rendering frontpage &rarr; Login page &rarr; Register a test user &rarr; back to frontpage"

### Krav 3 Brukere må logge seg inn for å registrere en bil
Den blir testet i App.test.js under "Test for register a car and after check if the database is not empty."

### Krav 5 - Brukere kan laste opp informasjon om bilen
Den blir testet i App.test.js under "Test for register a car and after check if the database is not empty."

### Krav 6 - Administratorkonto skal kunne slette annonser  
Den blir testet i AllCars.test.js under "Test for admin rights"

### Krav 7 - Brukere skal kunne utleie en bil
Den blir testet i App.test.js under "Test for register a car and after check if the database is not empty."

### Krav 9 - Brukere skal kunne leie en valgt bil
Den blir testet i Payment.test.js under "Rent car via buy button"

### Krav 10 -  Bruker skal tas til en kjøper side
Den blir testet i Payment.test.js under "Rent car via buy button"

### Krav 11 - Brukere skal kunne filtrete alle annonser 
Den blir testet i AllCars.test.js under "Test for filter"

### Krav 13 - Brukere skal kunne se om bilen som skal bli utleid er ledig på valgt dato
Den blir testet i AllCars.test.js under "Filtering cars available in december"

### Krav 19 - Brukere skal ha mulighet for å kansellere reservasjon av bil. 
Dette blir testet i Dashboard.test.js under "cancel_renting removed from ui"

### Krav 21 - Brukere skal kunne se sine leide biler 
Dette blir testet i Dashboard.test.js under "Test for rented cars" 

### Krav 22 - Brukere skal kunne se sine annonser
Dette blir testet i Dashboard.test.js under "see posted cars"

### Krav 23 - Brukere skal kunne se sine registrerte biler.
Dette blir testet i Dashboard.test.js under "see registred cars"


### Krav 25 - Brukere skal logge seg inn for å reservere en bil
Den blir testet i App.test.js under "Test for register a car and after check if the database is not empty."

### Krav 30 - Programmet skal ikke bruke lengre enn 5 sekunder for å vise utleie data
Den blir testet i App.test.js under "Test for register a car and after check if the database is not empty."

### Krav 34 - Systemet skal kunne kjøres som en nettside
Den blir testet i App.test.js under "Test for register a car and after check if the database is not empty."
