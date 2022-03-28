(function (ctx, height, width) {
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 150, 100);
})(
    document.getElementById('canvas').getContext('2d')
)