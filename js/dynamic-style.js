/**
 * Dynamic style.
 * @authore muzudho
 * @module js/dynamic-style
 */

function loadDynamicStyle() {

    let deckBorderColor = [
        '#3C77B9',
        '#20762F'
    ];

    // Decks.
    for (let iDeck = 0; iDeck < 2; iDeck += 1) {
        let elmDeck = document.getElementById('deck' + iDeck);
        elmDeck.style.left = Math.floor(Math.random() * 600) + 'px';
        elmDeck.style.top = Math.floor(Math.random() * 400) + 'px';
        elmDeck.style.width = 300 + 'px';
        elmDeck.style.height = 100 + 'px';
        elmDeck.style.borderColor = deckBorderColor[iDeck];
    }

    // Tiles.
    for (let iTile = 0; iTile < 2; iTile += 1) {
        let elmTile = document.getElementById('tile' + iTile);
        if (elmTile !== null) {
            // 初期位置
            elmTile.style.left = Math.floor(Math.random() * 600) + 'px';
            elmTile.style.top = Math.floor(Math.random() * 400) + 'px';
            elmTile.style.width = 32 + 'px';
            elmTile.style.height = 64 + 'px';
        }
    }
    
}
