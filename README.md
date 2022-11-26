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
2. Gå til `http://localhost:3000` i nettleseren din. Viss du får en feilmelding om at porten er opptatt, så står det i terminalen hvilken port du må gå til.

![CMD instrukser](https://github.com/Bass4Nation/Software-Engineering-H2022/blob/main/README%20IMAGES/PowerShell%20instrukser.png?raw=true)


## Hvordan kjøre testene
(For å kjøre testene må du ha gjort stegene i "Oppsett" først)
1. Kjør `npm test` for å kjøre testene

<!-- q: How to add style to images in markdown?
a:   -->


## Tester disse kravene fra prosjektbeskrivelsen
Alle testfilene er i mappen tests som er i src/components/tests. Alle testene er skrevet i React-testing-libaries og kjøres med npm test.

### Krav 1 - Det skal være mulig å registrere nye brukerkontoer 
Den blir testet i App.test.js under "Render forside &rarr; Login siden &rarr; Registrerer en test bruker &rarr; så forsiden igjen"

### Krav 2 - 28 - Programmet skal ikke bruke lengre enn 5 sekunder for å vise utleie data 
Denne blir testet med flere tester.
* Tester å rendre de tre viktigste komponentene for siden og at de separat ikke tar mer en 1 sekund til å rendre. Men da er ikke noe data fylt inn i databasen.
* I en annen test så starter det en timer fra da den trykker på gå til forsiden, men etter at brukeren har lagt inn ut en annonse. 

### Krav 3 - 29 - Det skal være mulig å logge seg inn med registeret brukerkonto 
* Blir testet i samme som krav 1. Ved at den registrerte brukeren blir logget inn etter at den har blitt registrert.
* Denne blir også testet i Dashboard.test.js ved at den prøver å logge inn for å sjekke om dashboard viser riktig data.

Tips til tester:
Administratorkonto skal kunne slette annonser  
Brukere skal kunne utleie en bil
Systemet skal kunne sjekke om all input felt er fylt inn. 
Programmet skal ikke krasje <!-- Blir kanskje sjekket med de fleste tester. Om de krasjer eller ei?? -->

### Krav 4 - 30 - Det skal være mulig å legge ut annonser for utleie av biler
* Denne blir testet i Dashboard.test.js ved at den prøver å legge ut en annonse og sjekker om den blir lagt ut.
* 
