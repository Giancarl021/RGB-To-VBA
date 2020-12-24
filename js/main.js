let output;

function init() {
    $('#color-picker').spectrum({
        type: 'flat',
        change: onChange,
        showAlpha: false,
        color: '#000',
        showInitial: "true"
    });

    new ClipboardJS('.button');
    output = document.querySelector('#output');
    onChange({ 
        toHexString: () => `#000000`
    });
}

function onChange(color) {
    const [r, g, b] = color
        .toHexString()
        .substr(1)
        .match(/.{1,2}/g)
        .map(e => e.toUpperCase());

    output.value = `&H00${b}${g}${r}&`;
}

document.addEventListener('DOMContentLoaded', init);