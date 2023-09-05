import food from './food.jpg'

const makeMenu = (element) => {
    //wipes the body container to allow for new content to be appended
    element.innerHTML = '';

    const container = document.createElement('div');
    container.classList.add('menu-page-container');


    const grid = document.createElement('div');
    grid.classList.add('menu-grid-container')
    container.appendChild(grid)

    for (let i = 0; i < 8; i++){
        const item = document.createElement('div');
        item.classList.add('menu-page-grid-item')

        const pic = document.createElement('img');
        pic.classList.add('menu-food-image');
        pic.src = food;
        item.appendChild(pic);

        const name = document.createElement('div');
        name.classList.add('menu-item-name');
        name.innerHTML = "White Bread";
        item.appendChild(name);

        const price = document.createElement('div');
        price.classList.add('menu-item-price');
        price.innerHTML = "$2"
        item.appendChild(price);

        grid.appendChild(item);
    }

    element.appendChild(container);
};

export {makeMenu}