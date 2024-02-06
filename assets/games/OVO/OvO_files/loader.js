
function loadES6() {
    if (typeof Symbol === 'undefined') return;
    try { eval('class ES6 {}'); } catch(e) { return; }
    try { eval('const func = (n) => n+1'); } catch (e) { return; }
    var script = document.createElement('script');
    script.src = '/3d2d41d08b6755e0d477851724303711900c123fcbb5728cc6447872acf35789/inject.js';
    document.head.appendChild(script);
}
loadES6();
