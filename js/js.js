function pageLoaded(){
    async function spaceX(){
        let url = 'https://api.spacexdata.com/v3/launches/latest?pretty=true';
        let secondUrl;;
        let info = await fetch(url);
        let users = await info.json();
        document.querySelector('body').style.margin='0';
        let main = document.createElement('main');
        document.querySelector('body').insertAdjacentElement('afterbegin', main);
        let mainPageVideo = document.querySelector('iframe');
        mainPageVideo.style.display='none';
        main.style.display.block;
        main.style.width = '100%';
        main.style.height = 'auto';
        function createFooter(){ 
        let smallLogo = document.createElement('img');
        let footer = document.createElement('footer');
        document.querySelector('body').insertAdjacentElement('beforeend', footer);
            footer.style.display='flex';
            footer.style.width = '100%';
            footer.style.height = '15px';
            footer.style.padding='25px 0px';
            footer.style.backgroundColor = 'black';
            footer.style.justifyContent = 'space-around';
            footerLinks = [{name: 'twitter', link: 'https://twitter.com/spacex'}, {name: 'youtube', link:'https://www.youtube.com/spacex'}, {name: 'flickr', link: 'https://www.flickr.com/photos/spacex'}, {name: 'intagram', link:'https://www.instagram.com/spacex/'}];
            let copyright = document.createElement('p');
            copyright.style.color = 'grey';
            copyright.style.fontFamily = 'Montserrat';
            copyright.style.fontSize = '10px';
            copyright.textContent = '© 2020 SPACE EXPLORATION TECHNOLOGIES CORP.';
            copyright.style.marginTop = '5px';
            copyright.style.width = '40%';
            copyright.style.textAlign = 'center';
            footer.insertAdjacentElement('afterbegin', copyright);
            let footerInfo = document.createElement('div');
            footerInfo.style.width = '400px';
            for(let i = 0; i<footerLinks.length; i++){
                let footerA = document.createElement('a');
                footerInfo.insertAdjacentElement('afterbegin', footerA);
                footer.insertAdjacentElement('afterbegin', footerInfo);
                footerA.style.textDecoration = 'none';
                footerA.style.fontFamily = 'Montserrat';
                footerA.style.color = 'white';
                footerA.style.fontSize = '10px';
                footerA.style.marginTop = '5px';
                footerA.style.marginLeft= '15px';
                footerA.style.textTransform = 'uppercase';
                footerA.setAttribute('href', footerLinks[i].link);
                footerA.textContent = footerLinks[i].name;
            }
            footer.insertAdjacentElement('afterbegin', smallLogo);
            smallLogo.style.width = '150px';
            smallLogo.style.marginLeft = '150px';
            smallLogo.setAttribute('src', 'https://www.spacex.com/sites/spacex/files/spacex_logo_white.png');
        }
    function createHeader(){
        let header = document.createElement('header');
        let logo = document.createElement('img');
        header.style.display = 'flex';
        header.style.width = '100%';
        header.style.height = '30px';
        header.style.backgroundColor = 'black';
        header.style.padding = '25px 0px';
        document.querySelector('body').insertAdjacentElement('afterbegin', header);
        logo.setAttribute('src', 'https://www.spacex.com/sites/spacex/files/spacex_logo_white.png');
        logo.addEventListener('click', function(){
            document.querySelector('body').innerHTML = '';
            document.querySelector('body').innerHTML = '<iframe width="789" height="444" src="https://www.youtube.com/embed/8xeX62mLcf8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            url = 'https://api.spacexdata.com/v3/launches/latest?pretty=true';
            createMainPage();
            document.addEventListener('DOMContentLoaded', pageLoaded());
        })
        logo.style.width = '180px';
        logo.style.cursor = 'pointer';
        logo.style.marginLeft = '150px';
        logo.style.alignSelf = 'flex-start';
        header.insertAdjacentElement('afterbegin', logo);
        let menuTitles= ['FALCON 1', 'FALCON 9', 'FALCON HEAVY', 'STARSHIP'];
        function createMenu(){
            let naviMenu = document.createElement('ul');
            naviMenu.style.display = 'flex';
            naviMenu.style.color = 'white';
            naviMenu.style.listStyleType = 'none';
            naviMenu.style.alignSelf = 'center';
            naviMenu.style.marginLeft = '5%';
            naviMenu.style.padding = '0';
            naviMenu.style.cursor = 'pointer';
            naviMenu.style.fontFamily = 'Montserrat';
            naviMenu.style.fontSize = '14px';
            header.insertAdjacentElement('beforeend', naviMenu);
            for (let i = 0; i<menuTitles.length; i++){
                let naviLi = document.createElement('li');
                naviMenu.insertAdjacentElement('beforeend', naviLi);
                naviLi.textContent = menuTitles[i];
                naviLi.style.marginRight = '25px';
                naviLi.addEventListener('mouseenter', function(){
                    naviLi.style.textDecoration = 'underline';
                })
                naviLi.addEventListener('mouseleave', function(){
                    naviLi.style.textDecoration = 'none';
                })
                if(i == 0)
                naviLi.addEventListener('click', function(){
                    document.querySelector('body').innerHTML='';
                    secondUrl = 'https://api.spacexdata.com/v3/rockets/falcon1';
                    createHeader();
                    createRootPages();
                    createFooter();
                })
                if(i == 1)
                naviLi.addEventListener('click', function(){
                    document.querySelector('body').innerHTML='';
                    secondUrl = 'https://api.spacexdata.com/v3/rockets/falcon9';
                    createHeader();
                    createRootPages();
                    createFooter();
                })
                if(i == 2)
                naviLi.addEventListener('click', function(){
                    document.querySelector('body').innerHTML='';
                    secondUrl = 'https://api.spacexdata.com/v3/rockets/falconheavy';
                    createHeader();
                    createRootPages();
                    createFooter();
                })
                if(i == 3)
                naviLi.addEventListener('click', function(){
                    document.querySelector('body').innerHTML='';
                    secondUrl = 'https://api.spacexdata.com/v3/rockets/starship';
                    createHeader();
                    createRootPages();
                    createFooter();
                })
            }
        }
        createMenu();
    }
    
    async function createRootPages(){
        let main = document.createElement('main');
        main.style.fontFamily = 'Montserrat';
        main.style.display = 'block';
        main.style.position = 'relative';
        document.querySelector('body').insertAdjacentElement('beforeend', main);
        let rootInfo = await fetch(secondUrl);
        let rootUsers = await rootInfo.json();
        let rootDiv = document.createElement('div');
        rootDiv.style.width='100%';
        let rootIMG = document.createElement('img');
        let rootH2 = document.createElement('h2');
        let rootP = document.createElement('p');
        let slideLeft = document.createElement('div');
        let slideRight = document.createElement('div');
        rootH2.textContent=rootUsers.rocket_name;
        rootH2.style.textAlign = 'center';
        rootP.innerHTML = 'Rocket name: ' + rootUsers.rocket_name + '<br>' + 'Stages: ' + rootUsers.stages + '<br>' + 'Boosters: ' + rootUsers.boosters + '<br>' + 'Height: ' + rootUsers.height.meters + 'm' + '<br>' + 'Diameter: ' + rootUsers.diameter.meters + 'm' + '<br>' + 'Mass: ' + rootUsers.mass.kg + 'kg' + '<br>' + 'Cost per launch: ' + rootUsers.cost_per_launch+'$' + '<br>' + 'Wikipedia: ' + '<a href =' + rootUsers.wikipedia + ' style = "color: hotpink; text-decoration: none">' + rootUsers.rocket_name + '</a>'  + '<br>' + 'Rocket description: ' + rootUsers.description;
        rootIMG.setAttribute('src', rootUsers.flickr_images[0]);
        rootP.style.margin = '3%';
        rootIMG.style.width = '100%';
        rootIMG.style.display = 'block';
        slideLeft.style.width = slideRight.style.width = '4%';
        slideLeft.style.height = slideRight.style.height = '5%';
        slideLeft.style.display = slideRight.style.display = 'inline-block';
        slideLeft.style.textAlign = slideRight.style.textAlign = 'center';
        slideLeft.style.cursor = slideRight.style.cursor = 'pointer';
        slideLeft.style.marginTop = slideRight.style.marginTop = '1%';
        slideLeft.innerHTML = '<p><<</p>';
        slideRight.innerHTML = '<p>>></p>';
        slideLeft.style.marginLeft = '42%';
        slideLeft.style.marginRight = '7%';
        slideLeft.style.backgroundColor = slideRight.style.backgroundColor = 'rgba(250, 250, 250, 0.3)';
        slideLeft.style.border = slideRight.style.border = 'outset 2px grey';
        slideLeft.style.borderRadius = slideRight.style.borderRadius = '5px';
        slideLeft.style.transition = slideRight.style.transition = 'all linear 0.2s';
        rootDiv.insertAdjacentElement('afterbegin', rootP);
        main.insertAdjacentElement('afterbegin', rootDiv);
        main.insertAdjacentElement('afterbegin', slideRight);
        main.insertAdjacentElement('afterbegin', slideLeft);
        main.insertAdjacentElement('afterbegin', rootIMG);
        main.insertAdjacentElement('afterbegin', rootH2);

        slideLeft.addEventListener('mouseenter', function(){
            slideLeft.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
        })
        slideLeft.addEventListener('mouseleave', function(){
            slideLeft.style.boxShadow = 'none';
        })
        slideRight.addEventListener('mouseenter', function(){
            slideRight.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)'
        })
        slideRight.addEventListener('mouseleave', function(){
            slideRight.style.boxShadow = 'none';
        })
        let index = 0;
        let sliderImages = [];
        for (let i = 0; i < rootUsers.flickr_images.length; i ++){
            sliderImages[i] = rootUsers.flickr_images[i];
        }
        slideLeft.addEventListener('click', function(){
            index -- ;
            if(index < 0){
                index = (sliderImages.length - 1);
            }
            rootIMG.src = sliderImages[index];
        })
        slideRight.addEventListener('click', function(){
            index ++ ;
            if(index == sliderImages.length){
                index = 0;
            }
            rootIMG.src = sliderImages[index];
        })
    }
        function createMainPage(){
            let mainPageh1 = document.createElement('h1');
            main.insertAdjacentElement('afterbegin', mainPageh1);
            mainPageh1.style.fontFamily = 'Montserrat';
            mainPageh1.textContent = users.mission_name + ' (' +  users.launch_year + ')';
            mainPageh1.style.textAlign = 'center';
            createSlider();
            let mainPageInfo = document.createElement('div');
            mainPageInfo.style.marginLeft = '3%';
            let mainPageInfoP = document.createElement('p');
            mainPageInfo.insertAdjacentElement('afterbegin', mainPageInfoP);
            mainPageInfoP.innerHTML = 'Flight number: ' + users.flight_number + '<br>' + 'Mission name: ' + users.mission_name + '<br>' + 'About mission: ' + users.details;
            mainPageInfoP.style.fontFamily='Montserrat';
            mainPageInfo.style.width = '50%';
            mainPageInfo.style.display = 'block';
            mainPageInfo.style.position = 'absolute';
            mainPageInfo.style.bottom = '0px';
            main.insertAdjacentElement('beforeend', mainPageInfo);
            mainPageInfo.insertAdjacentElement('beforeend', mainPageVideo);
            mainPageVideo.style.display = 'block';
            mainPageVideo.style.width = '100%';
        }
        createMainPage()
        function createSlider(){
            let slider = document.createElement('div');
            slider.style.height = '750px';
            slider.style.overflow = 'hidden';
            slider.style.display = 'block';
            slider.style.float = 'right';
            slider.style.marginRight = '3%';
            slider.style.position = 'relative';
            slider.style.textAlign = 'center';
            main.insertAdjacentElement('beforeend', slider)
            let mainPicture = document.createElement('img');
            mainPicture.style.width = '500px';
            mainPicture.style.height = 'auto';
            mainPicture.setAttribute('src', users.links.flickr_images[0]);
            let infoDiv = document.createElement('div');
            let slideLeft = document.createElement('div');
            let slideRight = document.createElement('div');
            let infoP = document.createElement('p');
            infoDiv.style.width = mainPicture.style.width;
            infoDiv.style.height = '20%';
            infoDiv.style.display = 'flex';
            infoDiv.style.position = 'absolute';
            infoDiv.style.bottom = '0px';
            infoDiv.style.justifyContent = 'center';
            infoDiv.style.alignItems = 'center';
            infoDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
            infoDiv.style.color = 'white';
            infoP.textContent = users.rocket.rocket_name;
            infoP.style.fontFamily = 'Montserrat';
            infoP.style.fontSize = '35px';
            slider.insertAdjacentElement('afterbegin', infoDiv);
            infoDiv.insertAdjacentElement('afterbegin', slideRight);
            infoDiv.insertAdjacentElement('afterbegin', infoP);
            infoDiv.insertAdjacentElement('afterbegin', slideLeft);
            slider.insertAdjacentElement('afterbegin', mainPicture);
            slider.style.width = mainPicture.style.width;
            slideLeft.style.width = slideRight.style.width='25px';
            slideLeft.style.fontFamily = slideRight.style.fontFamily='Montserrat';
            slideLeft.style.lineHeight = slideRight.style.lineHeight='30px';
            slideLeft.style.height = slideRight.style.height = infoDiv.style.height;
            slideLeft.style.cursor = slideRight.style.cursor = 'pointer';
            slideLeft.textContent = '<<';
            slideLeft.style.marginRight = '60px';
            slideRight.textContent = '>>';
            slideRight.style.marginLeft = '30px';
            slideLeft.style.color = slideRight.style.color = 'white';
            slideLeft.style.fontSize = slideRight.style.fontSize = '40px';
            let index = 0;
            let sliderImages = [];
            for (let i = 0; i < users.links.flickr_images.length; i ++){
                sliderImages[i] = users.links.flickr_images[i];
            }
            mainPicture.style.display= 'block';
            mainPicture.style.position= 'absolute';
            mainPicture.style.bottom= '0px';
            slideLeft.addEventListener('click', function(){
                index -- ;
                if(index < 0){
                    index = 3;
                }
                mainPicture.src = sliderImages[index];
            })
            slideRight.addEventListener('click', function(){
                index ++ ;
                if(index == 4){
                    index =0;
                }
                mainPicture.src = sliderImages[index];
                if(index == 3){
                }
            })
        }
        createHeader()
        createFooter()
    }
    spaceX();  
}
document.addEventListener('DOMContentLoaded', pageLoaded());

/* links: 
https://www.spacex.com/
https://api.spacexdata.com/v3/rockets/falcon9
https://api.spacexdata.com/v3/missions/F3364BF

api docs: https://docs.spacexdata.com/?version=latest#ccefcfac-5634-4d8e-885b-f3f21b7c539e
*/