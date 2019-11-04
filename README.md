# Webbapplikation
<p>Webbapplikationen ska använda Fetch API för att hämta (GET), skicka data (POST), uppdatera data (PUT) och radera data (DELETE) från och till webbtjänsten. Anrop görs via denna URI http://sandrawara.se/rest/app/read.php. För att göra detta har en Fetch Api skapats som hämtar JSON-filen och skriver ut denna. Länk till färdig plats: http://sandrawara.se/rest/app/
En JavaScript-fil använder fetch för att skriva ut JSON till en html-fil, som är stylad med sass och konverterad till css.</p>

## Följande gulp-paket har används
<ul> 
<li>Gulp compress</li>  
<li>Gulp babel</li>   
<li>Gulp uglify</li>
<li>Gulp sass</li>  
<li>Gulp livereload - automatiserar och kollar efter ändringar i webbläsaren</li> 
</ul>

### Användning
<p> För att starta igång behöver man installera gulp globalt npm install --save gulp-install 
eller lokalt npm install --save-dev gulp-install. Man behöver dock har det installerat lokalt för att 
kunna köra det globalt. Att installera lokalt är dock att föredra. Därefter bör man installera de 
paket man ska använda och vidare skapa tasks eller funktioner.</p>

<ul>
<li>gulp copyHtml - överför html-kod från src till dist(den publika mappen).</li> 
<li>gulp sass - Omvandlar sass till css och komprimerar css-filen.</li> 
<li>gulp compress - Kompremerar js-filer.
<li>gulp scripts - slår ihop js-filer och komprimerar (uglify) koden.</li> 
<li>gulp babel - omvandlar ECMAScript till JavaScript.
<li>gulp watch - automatiserar ändringar.</li> 
<li>gulp - skapat en array som genomför alla tasks utan att aktivera watch.</li> 
</ul>