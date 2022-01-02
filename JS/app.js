const clrBox = document.querySelector('.color');
const container = document.querySelector('.container');


const resizeObserver = new ResizeObserver((entries) => {
    console.log(entries);
    let boxElement = entries[0];
    let containerElement = entries[1];
    const isSmall = boxElement.contentRect.width > 600;
    const isContainerSmall = containerElement && containerElement.contentRect.width < 600;

    boxElement.target.style.backgroundColor = isSmall ? 'yellow' : 'red';
    if (containerElement) {
        containerElement.target.style.display = isContainerSmall ? 'block' : 'flex';
    }

})

resizeObserver.observe(clrBox);
resizeObserver.observe(container);
