# Corporate Identity Tumi Mondo 

Tumi Mondo is een platform waar kinderen van 6 maanden t/m een jaar hun taalontwikkeling kunnen verbeteren en stimuleren. Dit geeft voordelen voor het leerproces, vermindering van geestelijke ziektes en het vergroten van sociale vaardigheden.

Tumi Mondo heeft zelf onderzoek gedaan om te kunnen kijken of er platform zijn die kinderen helpt bij de taalontwikkeling. Ze zijn tot de conclusie gekomen dat er momenteel nog geen ontwikkelingen-of leermethodes voor zijn.

Daarom hebben zij als opdracht gegeven: Maak een gedeelte van de app die je op alle apparaten kan gebruiken. Je mag het originele design aanhouden, maar het mag ook worden veranderd.

## Inhoudsgave
  * [Design](#design)
  * [Werking](#werking)
  * [Responsive](#responsive)
  * [Toegankelijkheid](#toegankelijkheid)
  * [Styleguide](#styleguide)
  * [Kenmerken](#kenmerken)
  * [Licentie](#licentie)

## Design
Het design is iets verandert vooral de kleuren die er gebruikt zijn. Er is een figma bestand gestuurd met hoe elke pagina eruit komt te zien. Je mocht kiezen welke pagina je wilde maken. 
Ik heb voor de homepagina, het menu en de testing pagina gekozen. <br>
Het [figma](https://www.figma.com/design/RDlD4etdXBvcOW9AAqueBz/TuMiMundo_FDND_Prototype?node-id=0-1&node-type=canvas&t=YPa4lmWi7jlAq3t1-0) bestand.

## Werking

**Homepagina** 
<br>
Op de homepagina kan je op het hamburger menu klikken en dan komt het menu in beeld. In het tekstwolkje staat Let's do it! en als je daar op klikt moet je naar de pagina Lessons gaan. Ik heb die pagina niet, maar de link staat er wel al voor als de pagina er komt. Dat is hetzelfde voor de kopjes lessons, statistics en profile. <br>
Wat de makers nog graag in de homepagina wilde hebben was een vraagteken en als je er op klikt dat je dan een uitleg krijgt hoe alles werkt. De vraagteken staat er en heeft een eigen pagina waar je uitleg kan schrijven. 

In het tekstwolkje verandert de tekst met de tijd mee. Elke 6 uur veranderd de tekst van good morning 06-12 naar good afternoon 12-18 naar good evening 18-00 en dan naar It’s time to sleep en I see you tomorrow 00-06.

<br>

**Menu** 
<br>
In het menu kan je naar verschillende pagina gaan (home, testing, lessons, statistics en profile) en als je op de pagina wwilt blijven kan je ook het menu weer sluiten. 

Om het menu te open op allebei de pagina's (home en testing) is er JavaScript gebruikt. Als je op de button klikt verschijnt het menu op de pagina waar je bent. 

Ik heb op de kopjes een wobble effect gezet en dat kan je zien als je er over heen hovert. 

<br>

**Testing**
<br>
Op de testing pagina zit een details tag en 4 kopje voor verschillende tests die je kan gaan doen. 

De details tag is gestyled en als die geopent is zit er een button in om naar een andere pagina te gaan. 


## Responsive
<img width="187" alt="testing telefoon" src="https://github.com/user-attachments/assets/545f5bf7-831f-465a-83bb-562940b0095e"> <br>
<img width="228" alt="testing tablet" src="https://github.com/user-attachments/assets/6fd18b98-4e0d-44ae-9a0c-de110b209b91"> 
<img width="440" alt="testing laptop" src="https://github.com/user-attachments/assets/42e67225-199b-4e6c-9ea9-8d32abad4769">

<img width="187" alt="vraagteken telefoon" src="https://github.com/user-attachments/assets/273acfd2-868e-4b81-b9cc-e01af0b54eb9"> <br>
<img width="229" alt="vraagteken tablet" src="https://github.com/user-attachments/assets/00c6170c-e12e-4233-b736-73222c96092b"> 
<img width="440" alt="vraagteken laptop" src="https://github.com/user-attachments/assets/bc9a8dae-5c77-4723-adc8-3fc6babcd328">


## Toegankelijkheid 
Voor de toegankelijkheid heb ik bij de homepagina de (linkjes) en bij de muis een aria-label toegevoegt zodat een screenreader het kan voorlezen. Ook heb ik de volgorde als je met je keyboard bestuurd aangepast door tabindex te gebruiken. Voor de testing pagina heb ik hetzelfde gedaan. 


## Styleguide
Er is een styleguide gemaakt met welke kleuren er gebruikt word, de lettertype en de grote van het lettertype. Ook hoe buttons, tabbelen en formulieren eruit moet zien. <br>
De [Styleguide](https://github.com/Kitkatisvibing/look-and-feel-styleguide/blob/main/tumimundo.css)

## Kenmerken
de html homepagina 
- header
- main


de html testing
- header
- main
- article
- div
  
Ik heb gewerkt met 3 css bestanden
- De styleguide 
- De perssonlijke css bestand van het html bestand 
- Waar het menu in staat
  
Er is vanuit mobile first gewerkt en om het voor andere apparaten te laten maken is er [@media](https://github.com/nadiachaja/look-and-feel-corporate-identity/blob/main/testing/testing.css#L299-L396) gebruikt. <br>
Ik heb de [var()](https://github.com/nadiachaja/look-and-feel-corporate-identity/blob/main/testing/testing.css#L159-L164) gebruikt met de stukjes die in de styleguide staan. 
Ook heb ik [@keyframes](https://github.com/nadiachaja/look-and-feel-corporate-identity/blob/main/menu.css#L66-L73) toegepast om het wobble effect te laten werken.

Ik heb JavaScript gebruikt om het menu te openen/sluiten met daarbij de veranderde svg, de tekst aan te passen met de tijd en ook het [wobble effect](https://github.com/nadiachaja/look-and-feel-corporate-identity/blob/main/testing/testing.js#L38-L97). 


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
