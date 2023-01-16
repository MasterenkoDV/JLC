// Preloader section style
const preloaderSection = document.querySelector('section');

preloaderSection.className = 'preloaderSection';
preloaderSection.id = 'preloaderSection';
preloaderSection.style.height = '100vh';
preloaderSection.style.width = '100%';
preloaderSection.style.display = 'flex';
preloaderSection.style.textAlign = 'center';
preloaderSection.style.zIndex = '0';

document.body.append(preloaderSection);

    // Preloader image style
    const preloaderImg = document.querySelector('img');

    preloaderImg.className = 'preloaderImg';
    preloaderImg.id = 'preloaderImg';
    preloaderImg.src = '../img/Logo-Base-nofone.png'
    preloaderImg.style.position = 'relative';
    preloaderImg.style.zIndex = '1';
    preloaderImg.style.height = 'auto';
    preloaderImg.style.width = '20%';
    preloaderImg.style.margin = 'auto';
    preloaderImg.style.opacity = '0';
    preloaderImg.style.transition = '1s';
    preloaderImg.style.transform = 'rotate3d(1, 0, 0, 90deg)';
    preloaderImg.style.animation = 'max_style_preloader_logo 5s 1';
    preloaderImg.style.animationFillMode = 'forwards';

    preloaderSection.append(preloaderImg);

    // Fork top menu style
    const preloaderForkTopMenu = document.querySelector('div');

    preloaderForkTopMenu.className = 'preloaderForkTopMenu';
    preloaderForkTopMenu.id = 'preloaderForkTopMenu';
    preloaderForkTopMenu.style.position = 'absolute';
    preloaderForkTopMenu.style.zIndex = '10';
    preloaderForkTopMenu.style.height = '50vh';
    preloaderForkTopMenu.style.width = '100%';
    preloaderForkTopMenu.style.backgroundColor = 'rgba(33,33,33,.3';
    preloaderForkTopMenu.style.transform = 'translate(-100%, 0);';
    preloaderForkTopMenu.style.animation = 'style_fork_top_menu 5s 1';
    preloaderForkTopMenu.style.animationFillMode = 'forwards';

    preloaderSection.append(preloaderForkTopMenu);

        // Text fork top menu style
        const textForkTopMenu = document.querySelector('p');

        textForkTopMenu.className = 'textForkTopMenu';
        textForkTopMenu.id = 'textForkTopMenu';
        textForkTopMenu.style.display = 'flex';
        textForkTopMenu.style.textAlign = 'center';

        //...
    
        preloaderForkTopMenu.append(textForkTopMenu);
                
            // Main text fork top menu style
            const mainTextTopMenu = document.querySelector('h1');

            /* mainTextTopMenu.className = 'mainTextTopMenu';
            mainTextTopMenu.id = 'mainTextTopMenu';
            mainTextTopMenu.style.width = '80%';
            mainTextTopMenu.style.height = 'auto';
            mainTextTopMenu.style.margin = '5% auto';
            mainTextTopMenu.style.fontSize = '6vh';
            mainTextTopMenu.style.color = 'white';
            mainTextTopMenu.style.textAlign = 'left';
            mainTextTopMenu.innerHTML = 'ЧАСТНЫМ КЛИЕНТАМ'; */
            //...
            
            textForkTopMenu.append(mainTextTopMenu);

    // Fork down menu style
    const preloaderForkDownMenu = document.querySelector('div');

    preloaderForkDownMenu.className = 'preloaderForkDownMenu';
    preloaderForkDownMenu.id = 'preloaderForkDownMenu';
    preloaderForkDownMenu.style.marginTop = '50vh';
    preloaderForkDownMenu.style.display = 'inline block';
    preloaderForkDownMenu.style.position = 'absolute';
    preloaderForkDownMenu.style.zIndex = '10';
    preloaderForkDownMenu.style.height = '50vh';
    preloaderForkDownMenu.style.width = '100%';
    preloaderForkDownMenu.style.backgroundColor = 'rgba(33,33,33,.6';
    preloaderForkDownMenu.style.transform = 'translate(100%, 0);';
    preloaderForkDownMenu.style.animation = 'style_fork_down_menu 5s 1';
    preloaderForkDownMenu.style.animationFillMode = 'forwards';

    preloaderSection.append(preloaderForkDownMenu);
