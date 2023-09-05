const makeAbout = (element) => {
    //wipes the body container to allow for new content to be appended
    element.innerHTML = '';
    

    const container = document.createElement('div');
    container.classList.add('about-page-container');

    const header = document.createElement('h1');
    header.classList.add('about-page-title');
    container.appendChild(header);
    header.innerHTML = "About";

    const txt = document.createElement('div');
    txt.classList.add('about-page-text')
    container.appendChild(txt)
    txt.innerHTML = "I honestly have no idea what to even put here, a restaurant is a restaurant ok, this place only serves white bread and has a generic photon of a cafe as it's main page";

    element.appendChild(container);
};

export {makeAbout}