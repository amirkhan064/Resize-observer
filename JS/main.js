const box = document.querySelector(".color");
const container = document.querySelector('.container')

const resizeObserver = new ResizeObserver((entries) => {
    console.log(entries);
    let boxElement = entries[0];
    let containerElement = entries[1];
    const isSmall = containerElement && containerElement.contentRect.width < 600;
    const isSmallBox = boxElement && boxElement.contentRect.width < 600;
    if (boxElement) {
        boxElement.target.style.backgroundColor = isSmallBox ? 'red' : 'yellow';
    }
    if (containerElement) {
        containerElement.target.style.display = isSmall ? 'block' : 'flex';
    }
});

resizeObserver.observe(box);
resizeObserver.observe(container);