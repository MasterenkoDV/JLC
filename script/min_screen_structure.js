// Preloader section style
const preloaderSection = document.querySelector('section');

preloaderSection.className = 'preloaderSection';
preloaderSection.id = 'preloaderSection';
preloaderSection.style.height = '100vh';
preloaderSection.style.width = '100%';
preloaderSection.style.display = 'flex';
preloaderSection.style.textAlign = 'center';
preloaderSection.style.zIndex = '10';

document.body.append(preloaderSection);

    // Preloader image style
    const preloaderImg = document.querySelector('img');

    preloaderImg.className = 'preloaderImg';
    preloaderImg.id = 'preloaderImg';
    preloaderImg.src = '../img/Logo-Base-nofone.png'
    preloaderImg.style.height = 'auto';
    preloaderImg.style.width = '70%';
    preloaderImg.style.margin = 'auto';
    preloaderImg.style.opacity = '0';
    preloaderImg.style.transition = '1s';
    preloaderImg.style.transform = 'rotate3d(0, 1, 0, 90deg)';
    preloaderImg.style.animation = 'min_style_preloader_logo 5s 1';
    preloaderImg.style.animationFillMode = 'forwards';

    preloaderSection.append(preloaderImg);
    
    // Fork top menu style
    const preloaderForkTopMenu = document.querySelector('div');    
    preloaderForkTopMenu.className = 'preloaderForkTopMenu';
    preloaderForkTopMenu.id = 'preloaderForkTopMenu';
    preloaderForkTopMenu.style.display = 'inline block'
    preloaderForkTopMenu.style.position = 'absolute';
    preloaderForkTopMenu.style.zIndex = '10';
    preloaderForkTopMenu.style.height = '50vh';
    preloaderForkTopMenu.style.width = '100%';
    preloaderForkTopMenu.style.backgroundColor = 'rgba(33,33,33,.3';
    preloaderForkTopMenu.style.transform = 'translate(-100%, 0);';
    preloaderForkTopMenu.style.animation = 'style_fork_top_menu 5s 1';
    preloaderForkTopMenu.style.animationFillMode = 'forwards';
    
    preloaderSection.append(preloaderForkTopMenu);
    
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
    