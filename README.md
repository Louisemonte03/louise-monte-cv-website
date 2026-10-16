# Louise Monte — cv-website

Lokale website in React, TypeScript en Vite. De pagina start in het Nederlands; de knop rechtsboven schakelt naar Engels.

## Aanpassen

- Persoonlijke gegevens, contactlinks en alle Nederlandse/Engelse teksten: `src/content.ts`.
- Paginaopbouw en onderdelen: `src/App.tsx`.
- Vormgeving: `src/styles.css`.
- Portret: `public/louise-monte.jpg`.
- De Amac-projecten tonen vergelijkingen van oude en nieuwe pagina's en de stappen van de inruilmodule. De afbeeldingen staan in `public/`.
- Voor een downloadbaar cv: zet een PDF in `public/` en vul `cvPath` in `src/content.ts` in.

## Lokaal bekijken

Open de map in VS Code. Gebruik de terminal:

```sh
npm install
npm run dev
```

Open daarna het lokale adres dat Vite toont. Wijzigingen verschijnen na opslaan direct. Controleer de productiebuild met `npm run build`.
