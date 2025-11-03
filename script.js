// získání referencí na HTML prvky
const cpxBarvaTextu = document.getElementById('cpxBarvaTextu');
const cpxBarvaPozadi = document.getElementById('cpxBarvaPozadi');
const rngVelikostTextu = document.getElementById('rngVelikostTextu');
const spnVelikostTextu = document.getElementById('spnVelikostTextu');
const selFontFamily = document.getElementById('selFontFamily');
const divPreviewBox = document.getElementById('divPreviewBox');
const chkShowPreview = document.getElementById('chkShowPreview');

function zmenaVlastnostiDivPreviewBox() {
    // BARVA TEXTU
    const barvaTextu = cpxBarvaTextu.value; // přečtení vyprané barvy z input 
    const styledivPreviewBox = divPreviewBox.style; // nalezení odkazu na stylový objekt divu
    styledivPreviewBox.color = barvaTextu; // změna stylu divu

    // POZADÍ
    const barvaPozadi = cpxBarvaPozadi.value;
    styledivPreviewBox.backgroundColor = barvaPozadi;
    // styledivPreviewBox.style.backgroundColor = barvaPozadi;

    // VELIKOST TEXTU
    const velikostTextu = rngVelikostTextu.value;
    divPreviewBox.style.fontSize = velikostTextu + "px"; // přidání jednotky px!!
    spnVelikostTextu.innerText = velikostTextu; // aktualizace zobrazené hodnoty

    // TYP PÍSMA
    const fontFamily = selFontFamily.value;
    divPreviewBox.style.fontFamily = fontFamily;

}

