$(document).ready(() => {

    for (let i = 0; i < 10; i++) {
        let top = `${i * window.innerHeight / 10 + 'px'}`;
        for (let j = 0; j < 10; j++) {
            let left = `${j * window.innerWidth / 10 + 'px'}`;
            $('#window').append(`<div class="piece" style="top:${top}; left:${left}"></div>`);
        }

    }

    $('.piece').css({
        'width': `${window.innerWidth / 10 + 'px'}`,
        'height': `${window.innerHeight / 10 + 'px'}`
    });

    $('button').click(() => {
        const pieces = document.querySelectorAll('.piece');

        for (let i = 0; i < pieces.length; i++) {

            const angle = Math.random() * 2 + 1;
            let x = Math.random();
            let y = Math.random();
            let z = Math.random();

            if (x >= 0.5) {
                x = 1;
            } else {
                x = -1;
            }
            if (y >= 0.5) {
                y = 1;
            } else {
                y = -1;
            }
            if (z >= 0.5) {
                z = 1;
            } else {
                z = -1;
            }

            effect(x, y, z, angle, pieces[i]);

        }

        setTimeout(() => {
            $('#window').empty();
            for (let i = 0; i < 10; i++) {
                let top = `${i * window.innerHeight / 10 + 'px'}`;
                for (let j = 0; j < 10; j++) {
                    let left = `${j * window.innerWidth / 10 + 'px'}`;
                    $('#window').append(`<div class="piece" style="top:${top}; left:${left}"></div>`);
                }
            }
            $('.piece').css({
                'width': `${window.innerWidth / 10 + 'px'}`,
                'height': `${window.innerHeight / 10 + 'px'}`
            })
        }, 1000);
    });
});

function effect(x, y, z, angle, piece) {
    const interval = setInterval(() => {
        angle += angle;
        $(piece).css({
            'transform': `rotate3d(${x}, ${y}, ${z}, ${angle}deg)`,
            'height': `${parseInt($('.piece').css('height')) - (Math.random() * 7) + 'px'}`,
            'width': `${parseInt($('.piece').css('width')) - (Math.random() * 7) + 'px'}`,
            'left': `${parseInt($(piece).css('left')) + (angle * (Math.random() * 2 - 1)) + 'px'}`,
            'top': `${parseInt($(piece).css('top')) + (angle * (Math.random() * 2 - 1)) + 'px'}`
        });
    }, 100);
    setTimeout(() => {
        clearInterval(interval);
    }, 2000);
}