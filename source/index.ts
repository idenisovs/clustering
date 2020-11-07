window.onload = function init() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    ctx.fillStyle = 'navy';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};