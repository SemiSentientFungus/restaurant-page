    import image from './restaurant.jpeg'

const makeMain = (element) => {
    //wipes the body container to allow for new content to be appended
    element.innerHTML = '';

    const container = document.createElement('div');
    container.classList.add('main-page-container');

    //create and append div for containing the image and title of the resturant
    const pic = document.createElement('div');
    pic.classList.add('main-page-image-container')

    const img = document.createElement('img');
    img.classList.add('main-page-image')
    img.src = image;
    pic.appendChild(img);

    const name = document.createElement('h1');
    name.classList.add('main-page-name')
    name.textContent = "the Menu";
    pic.appendChild(name);

    container.appendChild(pic)

    //create and append div for containing the text blurb of the resturant
    const txt = document.createElement('div');
    txt.classList.add('main-page-textbox');
    txt.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    container.appendChild(txt)
    element.appendChild(container);
};

export {makeMain}