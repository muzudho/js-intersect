/**
 * Chicken foot.
 * @module js/chicken-foot
 */
/*jslint es6 */

/** Global variables. */
G = {
    /** 0 <= x < 360 */
    angleDeg: [],
    /** Mouse click on sprite. */
    mouseDrag: {
        holdPoint: {
            x: 0,
            y: 0
        }
    }
};

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 * {@Link https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array |2011-06-08 How can I shuffle an array?}
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function onLoad() {

    // Decks.
    for (let iDeck = 0; iDeck < 2; iDeck += 1) {
        let elmDeck = document.getElementById('deck' + iDeck);
        elmDeck.style.left = Math.floor(Math.random() * 600) + 'px';
        elmDeck.style.top = Math.floor(Math.random() * 400) + 'px';
        elmDeck.style.width = 300 + 'px';
        elmDeck.style.height = 100 + 'px';
    }

    // Board. ドロップされる側
    let board = document.getElementById('board');
    board.ondragover = function (event) {
        event.dataTransfer.dropEffect = "move";
        // ドロップ許可
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            return false;
        }
    };

    // Tiles.
    for (let iTile = 0; iTile < 2; iTile += 1) {
        let idTile = 'tile' + iTile;
        let elmTile = document.getElementById(idTile);
        if (elmTile !== null) {
            G.angleDeg[idTile] = 0;
            elmTile.draggable = true;

            // 初期位置
            elmTile.style.left = Math.floor(Math.random() * 600) + 'px';
            elmTile.style.top = Math.floor(Math.random() * 400) + 'px';
            elmTile.style.width = 32 + 'px';
            elmTile.style.height = 64 + 'px';

            // https://hakuhin.jp/js/data_transfer.html#DATA_TRANSFER_04
            elmTile.ondragstart = function (event) {
                event.dataTransfer.effectAllowed = "move";
            };
            // タイルの上にも落としたい
            elmTile.ondragover = function (event) {
                event.dataTransfer.dropEffect = "move";
                // ドロップ許可
                if (event.preventDefault) {
                    event.preventDefault();
                } else {
                    return false;
                }
            };

            elmTile.ondragstart = onDragStart;
            elmTile.ondrag = onDrag;

            /**
             * Clicked tag such as img.
             * @param {string} id - HTML tag id.
             */
            elmTile.onclick = function (event) {
                let id = event.target.id;
                G.angleDeg[id] = (G.angleDeg[id] + 30) % 360;
                document.getElementById(id).style.transform = 'rotate(' + G.angleDeg[id] + 'deg)';
            };
        }
    }
}
