<!-- Instructions for this project -->
# Instruksjoner for dette prosjektet

## Krav til utviklingsmiljø

* [Node.js](https://nodejs.org/en/) (Denne vesjonen er testet: v19.0.1)

## Oppsett

1. Klon prosjektet fra [Github](https://github.com/Bass4Nation/Software-Engineering-H2022)
2. Hvis lastet ned som zip-fil, pakke ut zip-filen.
3. Åpne en terminal i prosjektets rotmappe. (Høyreklikk på mappen og velg "Open in Terminal" eller "Åpne i PowerShell") eller bruk kommandoen `cd` for å navigere til prosjektets rotmappe.
4. Installer avhengigheter med `npm install`. Dette vil installere alle avhengigheter som er definert i `package.json`. Dette kan ta litt tid. Når prosessen er ferdig, vil du se en mappe kalt `node_modules` i prosjektets rotmappe. Denne mappen inneholder alle avhengighetene som er installert. (Dette må gjøres kun en gang).

## Hvordan kjøre prosjektet
(For å kjøre prosjektet må du ha gjort stegene i "Oppsett" først)
1. Kjør `npm start` for å starte prosjektet
2. Gå til `http://localhost:3000` i nettleseren din. Viss du får en feilmelding om at porten er opptatt, så står det i terminalen hvilken port du må gå til.


## Hvordan kjøre testene

1. Kjør `npm test` for å kjøre testene

<!-- q: How to add images to Markdown?
a: https://stackoverflow.com/questions/14494747/add-images-to-readme-md-on-github -->


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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

:)
