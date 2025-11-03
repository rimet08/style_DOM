// získání referencí na HTML prvky
const cpxBarvaTextu = document.getElementById('cpxBarvaTextu');
const cpxBarvaPozadi = document.getElementById('cpxBarvaPozadi');
const rngVelikostTextu = document.getElementById('rngVelikostTextu');
const spnVelikostTextu = document.getElementById('spnVelikostTextu');
const selFontFamily = document.getElementById('selFontFamily');
const divPreviewBox = document.getElementById('divPreviewBox');
const chkShowPreview = document.getElementById('chkShowPreview');

function zmenaVlastnostiDivPreviewBox() {
    const barvaTextu = cpxBarvaTextu.value;
    console.log(barvaTextu);

}

