


function changeLenguage(leng){
    let dir = window.location.pathname;
    traduceMenu(leng);
    traduceFooter(leng);
    console.log(dir);
    if (dir == '/index.html' || dir == '/') {
        traduceIndex(leng);
    }else if (dir == '/about.html'){
        traduceAbout(leng);
    }else if(dir == '/services.html'){
        traduceServices(leng)
    }else if(dir == '/construction.html'){
        traduceConstruction(leng);
    }else if(dir == '/contact.html'){
        traduceContact(leng);
    }
    
}

//changeLenguage('EN')

function traduceMenu(leng){
    let navBtnHome = document.getElementById('navBtnHome');
    let navBtnAbout = document.getElementById('navBtnAbout');
    let navBtnCon = document.getElementById('navBtnContact');
    let navBtnLeng = document.getElementById('navBtnLeng');
    let navBtnServices = document.getElementById('navBtnServices');
    let navBtnConst = document.getElementById('navBtnConst');
    let navBtnServiceRoute = document.getElementById('navBtnServiceRoute');
    let navBtnrepairs = document.getElementById('navBtnrepairs');
    let navBtnremodel = document.getElementById('navBtnremodel');

    if (leng == 'ES') {
        navBtnHome.innerHTML = `Inicio`;
        navBtnAbout.innerHTML = `Acerca de`;
        navBtnCon.innerHTML = `Contacto`;
        navBtnLeng.innerHTML = `lenguaje`;
        navBtnServices.innerHTML = `Servicios`
        navBtnConst.innerHTML = `Construcción`;
        navBtnServiceRoute.innerHTML = `Ruta de servicio`;
        navBtnrepairs.innerHTML = `Reparación`;
        navBtnremodel.innerHTML = `Remodelación`;
        
    }else{
        navBtnAbout.innerHTML = `About`;
        navBtnHome.innerHTML = `Home` ;
        navBtnCon.innerHTML = `Contact`;
        navBtnLeng.innerHTML = `Lenguage`;
        navBtnServices.innerHTML = `Services`;
        navBtnConst.innerHTML = `Construction`;
        navBtnServiceRoute.innerHTML = `Service Route`;
        navBtnrepairs.innerHTML = `Repairs`;
        navBtnremodel.innerHTML = `renovations`;
    }
}

function traduceIndex(leng){
    let slider1Top = document.getElementById('slider1Top');
    let sliderTitleTop = document.getElementById('sliderTitleTop');
    let sliderDescriptionTop = document.getElementById('sliderDescriptionTop');
    let sliderTop1Projects = document.getElementById('sliderTop1Projects');
    let sliderTop1Services = document.getElementById('sliderTop1Services');
    let sliderTop2Projects = document.getElementById('sliderTop2Projects');
    let sliderTop2Services = document.getElementById('sliderTop2Services');
    let sliderTop3Services = document.getElementById('sliderTop3Services');
    let sliderTop3Projects = document.getElementById('sliderTop3Projects');


    let slider2Top = document.getElementById('slider2Top');
    let sliderTitle2Top = document.getElementById('sliderTitle2Top');
    let sliderDescription2Top = document.getElementById('sliderDescription2Top');
    let slider3Top = document.getElementById('slider3Top');
    let sliderTitle3Top = document.getElementById('sliderTitle3Top');
    let sliderDescription3Top = document.getElementById('sliderDescription3Top');
    
    let sectionSubCon = document.getElementById('sectionSubCon');
    let sectionTitleAbNor = document.getElementById('sectionTitleAbNor');
    let pSection1 = document.getElementById('pSection1');
    let pSection2 = document.getElementById('pSection2');
    let lista1Top = document.getElementById('lista1Top');
    let lista2Top = document.getElementById('lista2Top');
    let lista3Top = document.getElementById('lista3Top');
    let subtitleTop1 = document.getElementById('subtitleTop1');
    let subtitleServices =  document.getElementById('subtitleServices');
    let titleServices = document.getElementById('titleServices');
    let processSubtitle = document.getElementById('processSubtitle');
    let processTitle = document.getElementById('processTitle');
    let processDescription = document.getElementById('processDescription');
    let process1 = document.getElementById('process1');
    let process2 = document.getElementById('process2');
    let process3 = document.getElementById('process3');
    let process4 = document.getElementById('process4');

    let valuesTitle = document.getElementById('valuesTitle');
    let valuesDescription = document.getElementById('valuesDescription');

    let saeftyTitle = document.getElementById('saeftyTitle');
    let saeftyDescription = document.getElementById('saeftyDescription');
    let innovationTitle = document.getElementById('innovationTitle');
    let innovationDescription = document.getElementById('innovartionDescription');
    let qualityTitle = document.getElementById('qualityTitle');
    let qualityDescription = document.getElementById('qualityDescription');
    let integrityTitle = document.getElementById('integrityTitle');
    let integrityDescription = document.getElementById('integrityDescription');
    let strategyTitle = document.getElementById('strategyTitle');
    let strategyDescription = document.getElementById('strategyDescription');
    let inclusionTitle = document.getElementById('inclusionTitle');      
    let inclusionDescription = document.getElementById('inclusionDescription');

    let constructionTitle = document.getElementById('constructionTitle');
    let constructionDescription = document.getElementById('constructionDescription');
    let serviceRouteTitle = document.getElementById('serviceRouteTitle');
    let serviceRouteDescription = document.getElementById('serviceRouteDescription');
    let repairsTitle = document.getElementById('repairsTitle');
    let repairsDescription = document.getElementById('repairsDescription');
    let renovationTitle = document.getElementById('renovationTitle');
    let renovationDescription = document.getElementById('renovationDescription');

    //let viewService0 = document.getElementById('viewService0');
    //let viewService1 = document.getElementById('viewService1');
    //let viewService2 = document.getElementById('viewService2');
    //let viewService3 = document.getElementById('viewService3');


    if (leng == 'ES') {

        slider1Top.innerHTML = `Alta calidad garantizada`;
        sliderTitleTop.innerHTML = `Bienvenidos a ZyC Pool/Spa`;
        sliderDescriptionTop.innerHTML = `Tenemos experiencia en la construcción, remodelación y reparación de albercas y jacuzzis. Contáctenos y pregunte por nuestros servicios o cotice su proyecto. `;
        //sliderTop1Projects.innerHTML = `Proyectos`;
        sliderTop1Services.innerHTML = `Servicios`;

        slider2Top.innerHTML = `Grandes diseños`;
        sliderTitle2Top.innerHTML = `Tenemos grandes proyectos`;
        sliderDescription2Top.innerHTML = `Tenemos experiencia en la construcción, remodelación y reparación de albercas y jacuzzis. Contáctenos y pregunte por nuestros servicios o cotice su proyecto. `;
        //sliderTop2Projects.innerHTML = `Proyectos`;
        sliderTop2Services.innerHTML = `Servicios`;

        slider3Top.innerHTML = `Equipo profesional`;
        sliderTitle3Top.innerHTML = `construye la piscina de tus sueños`;
        sliderDescription3Top.innerHTML = `Nuestros más de 3 años de experiencia acreditan un proyecto de calidad`;
        //sliderTop3Projects.innerHTML = `Proyectos`;
        sliderTop3Services.innerHTML = `Servicios`;


        sectionSubCon.innerHTML = `Construcción de albercas y jacuzzis`;
        sectionTitleAbNor.innerHTML = `Sobre <span>ZyC</span>`;
        pSection1.innerHTML = `Nuestra compañía se encuentra comprometida con sus clientes en entregarles  construcciones y servicios de calidad. `;
        pSection2.innerHTML = `Buscamos tener la mejor calidad siguiendo los mejores estándares para que nuestros clientes estén satisfechos con nuestro servicio.`;
        lista1Top.innerHTML = `Más de 3 Años de experiencia`;
        lista2Top.innerHTML = `20+ Proyectos entregados con exito`;
        lista3Top.innerHTML = `Exelente calidad de trabajo`;
        subtitleTop1.innerHTML = `Nuestros 3 años de experiencia hacen un trabajo de calidad.`;
        
        subtitleServices.innerHTML = `¿Qué hacemos?`;
        titleServices.innerHTML = `Nuestros <span>Servicios</span>`;
        processSubtitle.innerHTML = `¿Cómo trabajamos?`;
        processTitle.innerHTML = `Nuestro proceso`;
        processDescription.innerHTML = `Descuebre nuestro proceso para entregarte un servicio de calidad`;
        process1.innerHTML = `<span>01.</span>planeación`;
        process2.innerHTML = `<span>02.</span>Diseño`;
        process3.innerHTML = `<span>03.</span>Construcción`;
        process4.innerHTML = `<span>04.</span>Entrega`;
        
        valuesTitle.innerHTML = `Nuestros valores.`;
        valuesDescription.innerHTML = `Valores <span>fundamentales</span>`;
        saeftyTitle.innerHTML = `Seguridad`;
        saeftyDescription.innerHTML = `Nos esforzamos por realizar proyectos sin accidentes.`;
        innovationTitle.innerHTML = `Innovación`;
        innovationDescription.innerHTML = `Innovamos usando maquinaria y las tecnicas mas recientes.`;
        qualityTitle.innerHTML = `Calidad`;
        qualityDescription.innerHTML = `Calidad garantizada en todos nuestros trabajos.`;
        integrityTitle.innerHTML = `Integridad`;
        integrityDescription.innerHTML = `<br/>`;
        strategyTitle.innerHTML = `Estrategia`;
        strategyDescription.innerHTML = `<br/>`;
        inclusionTitle.innerHTML = `Inclusión`;
        inclusionDescription.innerHTML = `<br/>`;

        
        constructionTitle.innerHTML = `Construcción`;
        constructionDescription.innerHTML = `Construcción de Albercas y Jacuzzis. `;
        serviceRouteTitle.innerHTML = `Ruta de servicio`;
        serviceRouteDescription.innerHTML = `Realizamos una ruta de servicio para dar soporte a todas las albercas y jacuzzis de nuestros clientes.`;
        repairsTitle.innerHTML = `Reparación y mantenimiento`;
        repairsDescription.innerHTML = `Nos encargamos de cualquier problema o desperfecto con su alberca o jacuzzi, siempre buscando la mejor calidad.`;
        renovationTitle.innerHTML = `Remodelación`;
        renovationDescription.innerHTML = `Mejoramos o readaptamos sus instalaciones de alberca o jacuzzi para su comidad.`;

        //viewService0.innerHTML = `Ver servicio`;
        //viewService1.innerHTML = `Ver servicio`;
        //viewService2.innerHTML = `Ver servicio`;
        //viewService3.innerHTML = `Ver servicio`;
    }else{

        slider1Top.innerHTML = `Guaranteed High Quality`;
        sliderTitleTop.innerHTML = `Welcome to ZyC Pool/Spa`;
        //sliderTop1Projects.innerHTML = `Our projects`;
        sliderDescriptionTop.innerHTML = `We have experience in the construction, renovations and repair of swimming pools and jacuzzis. Contact us and ask about our services or quote your project.`;
        sliderTop1Services.innerHTML = `Our services`;

        slider2Top.innerHTML = `Great designs`;
        sliderTitle2Top.innerHTML = `We have great projects`;
        sliderDescription2Top.innerHTML = `We have experience in the construction, remodeling and repair of swimming pools and jacuzzis. Contact us and ask about our services or quote your project. `;
        //sliderTop2Projects.innerHTML = `Our projects`
        sliderTop2Services.innerHTML = `Our services`

        slider3Top.innerHTML = `Professional team`;
        sliderTitle3Top.innerHTML = `build your dream pool`;
        sliderDescription3Top.innerHTML = `Our more than 3 years of experience are proof of a quality project.`;
        //sliderTop3Projects.innerHTML = `Our projects`
        sliderTop3Services.innerHTML = `Our services`


        sectionSubCon = `Pool construction.`;
        sectionTitleAbNor.innerHTML = `About <span>ZyC</span>`;
        pSection1.innerHTML = `Our company is committed to its clients in delivering quality construction and services.`;
        pSection2.innerHTML = `We seek to have the best quality following the best standards so that our customers are satisfied with our service.`;
        lista1Top.innerHTML = `Over 3 years of experience`;
        lista2Top.innerHTML = `20+ successfully executed projects`;
        lista3Top.innerHTML = `Exceptional work quality`;
        subtitleTop1.innerHTML = `Our 3 years of experience make for quality work.`;
    
        subtitleServices.innerHTML = `How We Work`;
        titleServices.innerHTML = `Our <span>Services</span>`;
        constructionTitle.innerHTML = `Construction`;
        constructionDescription.innerHTML = `Construction of pools and Jacuzzis.`;
        serviceRouteTitle.innerHTML = `Service route`;
        serviceRouteDescription.innerHTML = `We make a service route to support all the pools and hot tubs of our customers.`;
        repairsTitle.innerHTML = `Repair and maintenance`;
        repairsDescription.innerHTML = `We take care of any problem or malfunction with your pool or jacuzzi, always looking for the best quality.`;
        renovationTitle.innerHTML = `Renovation`;
        renovationDescription.innerHTML = `We improve or upgrade your pool or jacuzzi facilities for your community.`;
        //viewService0.innerHTML = `view Service`;
        //viewService1.innerHTML = `view Service`;
        //viewService2.innerHTML = `view Service`;
        //viewService3.innerHTML = `view Service`;

        
        processSubtitle.innerHTML = `How we work?`;
        processTitle.innerHTML = `Our process`;
        processDescription.innerHTML = `Discover our process to deliver you a quality service`;
        process1.innerHTML = `<span>01.</span>planning`;
        process2.innerHTML = `<span>02.</span>Design`;
        process3.innerHTML = `<span>03.</span>Construction`;
        process4.innerHTML = `<span>04.</span>Finishing`;

        valuesTitle.innerHTML = `Our values.`;
        valuesDescription.innerHTML = `Core <span>values</span>`;
        saeftyTitle.innerHTML = `Safety`;
        saeftyDescription.innerHTML = `We strive to make projects accident free.`;
        innovationTitle.innerHTML = `Innovation`;
        innovationDescription.innerHTML = `We innovate using the latest machinery and techniques.`;
        qualityTitle.innerHTML = `Quality`;
        qualityDescription.innerHTML = `Quality guaranteed in all our works.`;
        integrityTitle.innerHTML = `Integrity`;
        integrityDescription.innerHTML = `<br/>`;
        strategyTitle.innerHTML = `Strategy`;
        strategyDescription.innerHTML = `<br/>`;
        inclusionTitle.innerHTML = `Inclusion`;
        inclusionDescription.innerHTML = `<br/>`;
    }

    window.dispatchEvent(new Event('resize'));
}

function traduceFooter(leng){
    
    let callus = document.getElementById('callus');
    let phone = document.getElementById('phone');

    let writeUs = document.getElementById('writeUs');
    let email = document.getElementById('email');

    let address = document.getElementById('address');
    let ubi = document.getElementById('ubi')
    let widgetTitle = document.getElementById('widgetTitle');
    let widgetTextDescription = document.getElementById('widgetTextDescription');

    let quickLinks = document.getElementById('quickLinks');
    let footerAcercaDe = document.getElementById('footerAcercaDe');
    let footerServicios = document.getElementById('footerServicios');
    let footerContacto = document.getElementById('footerContacto');

    if (leng == 'ES') {
        callus.innerHTML = `LLámanos`;
        phone.innerHTML = `+1 (970) 470-9245`;
        writeUs.innerHTML = `Escríbenos`;
        email.innerHTML = `carloscalzadillas22@gmail`;
        address.innerHTML = `Dirección`;
        ubi.innerHTML = `04 Edwards, CO 81632 US`;

        widgetTitle.innerHTML = `Sobre ZyC.`;
        widgetTextDescription.innerHTML = `Tenemos experiencia en la construcción, remodelación y reparación de albercas y jacuzzis. Contáctenos y pregunte por nuestros servicios o cotice su proyecto.`
        
        quickLinks.innerHTML = `Páginas`;
        footerAcercaDe.innerHTML = `Acerca de`;
        footerServicios.innerHTML = `Servicios`;
        footerContacto.innerHTML = `Contacto`;
    }else{
        callus.innerHTML = `Call us`;
        phone.innerHTML = `+1 (970) 470-9245`;
        writeUs.innerHTML = `Write to us`;
        email.innerHTML = `carloscalzadillas22@gmail`;
        address.innerHTML = `Address`;
        ubi.innerHTML = `04 Edwards, CO 81632 US`;

        widgetTitle.innerHTML = `About ZyC.`;
        widgetTextDescription.innerHTML = `We have experience in the construction, renovations and repair of swimming pools and jacuzzis. Contact us and ask about our services or quote your project.`;
    
        quickLinks.innerHTML = `Quick Links`;
        footerAcercaDe.innerHTML = `About`;
        footerServicios.innerHTML = `Services`;
        footerContacto.innerHTML = `Contact`;
    }
}

function traduceAbout(leng){
    //banner
    let principalSubtitle = document.getElementById('principalSubtitle');
    let principalTitle = document.getElementById('principalTitle'); 

    //page
    let aboutTitle = document.getElementById('aboutTitle');
    let about1P = document.getElementById('about1P');
    let about2P = document.getElementById('about2P');
    let subtitle1Property = document.getElementById('subtitle1Property');
    let subtitle2Property = document.getElementById('subtitle2Property');
    let subtitle3Property = document.getElementById('subtitle3Property');
    let dialogInnerImage = document.getElementById('dialogInnerImage');

    let valuesTitle = document.getElementById('valuesTitle');
    let valuesDescription = document.getElementById('valuesDescription');
    let saeftyTitle = document.getElementById('saeftyTitle');
    let saeftyDescription = document.getElementById('saeftyDescription');
    let innovationTitle = document.getElementById('innovationTitle');
    let innovationDescription = document.getElementById('innovartionDescription');
    let qualityTitle = document.getElementById('qualityTitle');
    let qualityDescription = document.getElementById('qualityDescription');
    let integrityTitle = document.getElementById('integrityTitle');
    let integrityDescription = document.getElementById('integrityDescription');
    let strategyTitle = document.getElementById('strategyTitle');
    let strategyDescription = document.getElementById('strategyDescription');
    let inclusionTitle = document.getElementById('inclusionTitle');      
    let inclusionDescription = document.getElementById('inclusionDescription');

    let section2Title = document.getElementById('section2Title');
    let section2Description = document.getElementById('section2Description');
    let section1Title = document.getElementById('section1Title');
    let section1Description = document.getElementById('section1Description');



    if (leng == 'ES') {
        //banner
        principalSubtitle.innerHTML = `Construcción de albercas`;
        principalTitle.innerHTML = `Sobre <span>ZyC</span>`;     
    
        //page
        aboutTitle.innerHTML = `¡Calidad en la construcción de albercas garantizada!`;
        about1P.innerHTML = `Nuestra compañía se encuentra comprometida con sus clientes en entregarles  construcciones y servicios de calidad. `;
        about2P.innerHTML = `Buscamos tener la mejor calidad siguiendo los mejores estándares para que nuestros clientes estén satisfechos con nuestro servicio.`;
        subtitle1Property.innerHTML = `Más de3 Años de experiencia`;
        subtitle2Property.innerHTML = `20+ Proyectos entregados con exito`;
        subtitle3Property.innerHTML = `Exelente calidad de trabajo`;
        dialogInnerImage.innerHTML = `Nuestros 3 años de experiencia hacen un trabajo de calidad.`;
        
        valuesTitle.innerHTML = `Nuestros valores.`;
        valuesDescription.innerHTML = `Valores <span>fundamentales</span>`;
        saeftyTitle.innerHTML = `Seguridad`;
        saeftyDescription.innerHTML = `Nos esforzamos por realizar proyectos sin accidentes.`;
        innovationTitle.innerHTML = `Innovación`;
        innovationDescription.innerHTML = `Innovamos usando maquinaria y las tecnicas mas recientes.`;
        qualityTitle.innerHTML = `Calidad`;
        qualityDescription.innerHTML = `Calidad garantizada en todos nuestros trabajos.`;
        integrityTitle.innerHTML = `Integridad`;
        integrityDescription.innerHTML = `<br/>`;
        strategyTitle.innerHTML = `Estrategia`;
        strategyDescription.innerHTML = `<br/>`;
        inclusionTitle.innerHTML = `Inclusión`;
        inclusionDescription.innerHTML = `<br/>`;
        section2Title.innerHTML = `Construcción y servicios de <span>calidad</span>`;
        section2Description.innerHTML = `En ZyC Pool/spa buscamos que nuestros clientes tengan el mejor servicio a la hora del mantenimiento o construcción de sus picisnas.`;
        section1Title.innerHTML = `¿Quienes somos?`;
        section1Description.innerHTML = `Somos una empresa ubicada en Edwars con 3 años de experiencia que garantiza una entrega de calidad en su piscina.`;

    }else{
        //banner
        principalSubtitle.innerHTML = `Pool construction`;
        principalTitle.innerHTML = `About <span>ZyC</span>`
    
        //page
        aboutTitle.innerHTML = `Pool construction quality guaranteed!`;
        about1P.innerHTML = `Our company is committed to its clients in delivering quality construction and services. `;
        about2P.innerHTML = `We seek to have the best quality following the best standards so that our customers are satisfied with our service.`;
        subtitle1Property.innerHTML = `Over 3 years of experience`;
        subtitle2Property.innerHTML = `20+ Projects successfully delivered`;
        subtitle3Property.innerHTML = `Excellent quality work`;
        dialogInnerImage.innerHTML = `Our 3 years of experience make for quality work.`;
    
        valuesTitle.innerHTML = `Our values`;
        valuesDescription.innerHTML = `Core <span>Values</span>`;
        saeftyTitle.innerHTML = `Saefty`;
        saeftyDescription.innerHTML = `Safety will always come first as we strive for accident-free projects.`;
        innovationTitle.innerHTML = `Innovation`;
        innovationDescription.innerHTML = `We innovate using the latest machinery and techniques.`;
        qualityTitle.innerHTML = `Quality`;
        qualityDescription.innerHTML = `Guaranteed quality in all our work.`;
        integrityTitle.innerHTML = `Integrity`;
        integrityDescription.innerHTML = `<br/>`;
        strategyTitle.innerHTML = `Strategy`;
        strategyDescription.innerHTML = `<br/>`;
        inclusionTitle.innerHTML = `Inclusion`;
        inclusionDescription.innerHTML = `<br/>`;
        section2Title.innerHTML = `Quality construction and services`;
        section2Description.innerHTML = `At ZyC Pool/spa we want our clients to have the best service when it comes to the maintenance or construction of their pools.`;
        section1Title.innerHTML = `Who are we?`;
        section1Description.innerHTML = `We are a company located in Edwars with 3 years of experience that guarantees a quality delivery of your pool.`;
    }
}

function traduceServices(leng){

    let principalSubtitle = document.getElementById('principalSubtitle');
    let principalTitle = document.getElementById('principalTitle');

    //services
    let constructionTitle = document.getElementById('constructionTitle');
    let constructionDescription = document.getElementById('constructionDescription');
    let serviceRouteTitle = document.getElementById('serviceRouteTitle');
    let serviceRouteDescription = document.getElementById('serviceRouteDescription');
    let repairTitle = document.getElementById('repairTitle');
    let repairDescription = document.getElementById('repairDescription');
    let renovationTitle = document.getElementById('renovationTitle')
    let renovationDescription = document.getElementById('renovationDescription');
    //let viewService0 = document.getElementById('viewService0');
    //let viewService1 = document.getElementById('viewService1');
    //let viewService2 = document.getElementById('viewService2');
    //let viewService3 = document.getElementById('viewService3');


    //Numbers

    let countProjects = document.getElementById('countProjects');
    let countTitle = document.getElementById('countTitle');
    let countHappyClients = document.getElementById('countHappyClients');
    let happyClientsTitle = document.getElementById('happyClientsTitle');
    let countComProj = document.getElementById('countComProj');
    let comProjTitle = document.getElementById('comProjTitle');

    //values

    let valuesTitle = document.getElementById('valuesTitle');
    let valuesDescription = document.getElementById('valuesDescription');

    let saeftyTitle = document.getElementById('saeftyTitle');
    let saeftyDescription = document.getElementById('saeftyDescription');
    let innovationTitle = document.getElementById('innovationTitle');
    let innovationDescription = document.getElementById('innovartionDescription');
    let qualityTitle = document.getElementById('qualityTitle');
    let qualityDescription = document.getElementById('qualityDescription');
    let integrityTitle = document.getElementById('integrityTitle');
    let integrityDescription = document.getElementById('integrityDescription');
    let strategyTitle = document.getElementById('strategyTitle');
    let strategyDescription = document.getElementById('strategyDescription');
    let inclusionTitle = document.getElementById('inclusionTitle');      
    let inclusionDescription = document.getElementById('inclusionDescription');


    if(leng == 'ES'){
        //Principal
        principalSubtitle.innerHTML = `¿Qué hacemos?`;
        principalTitle.innerHTML = `Nuestros <span>Servicios</span>`;
        
        //servicios

        constructionTitle.innerHTML = `Construcción`;
        constructionDescription.innerHTML = `Construcción de Albercas y Jacuzzis. `;
        serviceRouteTitle.innerHTML = `Ruta de servicio`;
        serviceRouteDescription.innerHTML = `Realizamos una ruta de servicio para dar soporte a todas las albercas y jacuzzis de nuestros clientes.`;
        repairTitle.innerHTML = `Reparación y mantenimiento`;
        repairDescription.innerHTML = `Nos encargamos de cualquier problema o desperfecto con su alberca o jacuzzi, siempre buscando la mejor calidad.`;
        renovationTitle.innerHTML = `Remodelación`;
        renovationDescription.innerHTML = `Mejoramos o readaptamos sus instalaciones de alberca o jacuzzi para su comidad.`;
        //viewService0.innerHTML = `Mirar servicio`;
        //viewService1.innerHTML = `Mirar servicio`;
        //viewService2.innerHTML = `Mirar servicio`;
        //viewService3.innerHTML = `Mirar servicio`;


    
        //Numbers

        countProjects.innerHTML = `25`;
        countTitle.innerHTML = `<span>01.</span> Proyectos diseñados`;
        countHappyClients.innerHTML = `100`;
        happyClientsTitle.innerHTML = `<span>02.</span> Clientes satisfechos`;
        countComProj.innerHTML = `15`;
        comProjTitle.innerHTML = `<span>03.</span> Proyectos completos`;

        //values

        valuesTitle.innerHTML = `Nuestros valores.`;
        valuesDescription.innerHTML = `Valores <span>fundamentales</span>`;
        saeftyTitle.innerHTML = `Seguridad`;
        saeftyDescription.innerHTML = `Nos esforzamos por realizar proyectos sin accidentes.`;
        innovationTitle.innerHTML = `Innovación`;
        innovationDescription.innerHTML = `Innovamos usando maquinaria y las tecnicas mas recientes.`;
        qualityTitle.innerHTML = `Calidad`;
        qualityDescription.innerHTML = `Calidad garantizada en todos nuestros trabajos.`;
        integrityTitle.innerHTML = `Integridad`;
        integrityDescription.innerHTML = `<br/>`;
        strategyTitle.innerHTML = `Estrategia`;
        strategyDescription.innerHTML = `<br/>`;
        inclusionTitle.innerHTML = `Inclusión`;
        inclusionDescription.innerHTML = `<br/>`;

        //

    }else{
        //principal
        principalSubtitle.innerHTML = `What we do?`;
        principalTitle.innerHTML = `Our <span>Services</span>`;
        
        //servicios
        
        constructionTitle.innerHTML = `Construction`;
        constructionDescription.innerHTML = `Construction of pools and Jacuzzis.`;
        serviceRouteTitle.innerHTML = `Service route`;
        serviceRouteDescription.innerHTML = `We make a service route to support all the pools and hot tubs of our customers.`;
        repairTitle.innerHTML = `Repair and maintenance`;
        repairDescription.innerHTML = `We take care of any problem or malfunction with your pool or jacuzzi, always looking for the best quality.`;
        renovationTitle.innerHTML = `Renovation`;
        renovationDescription.innerHTML = `We improve or upgrade your pool or jacuzzi facilities for your community.`;
        //viewService0.innerHTML = `View service`;
        //viewService1.innerHTML = `View service`;
        //viewService2.innerHTML = `View service`;
        //viewService3.innerHTML = `View service`;



        //Numbers

        countProjects.innerHTML = `25`;
        countTitle.innerHTML = `<span>01.</span> Projects Design`;
        countHappyClients.innerHTML = `100`;
        happyClientsTitle.innerHTML = `<span>02.</span> Happy Clients`;
        countComProj.innerHTML = `15`;
        comProjTitle.innerHTML = `<span>03.</span> Completed Projects`;

        //values


        valuesTitle.innerHTML = `Our values`;
        valuesDescription.innerHTML = `Core <span>Values</span>`;
        saeftyTitle.innerHTML = `Saefty`;
        saeftyDescription.innerHTML = `Safety will always come first as we strive for accident-free projects.`;
        innovationTitle.innerHTML = `Innovation`;
        innovationDescription.innerHTML = `We innovate using the latest machinery and techniques.`;
        qualityTitle.innerHTML = `Quality`;
        qualityDescription.innerHTML = `Guaranteed quality in all our work.`;
        integrityTitle.innerHTML = `Integrity`;
        integrityDescription.innerHTML = `<br/>`;
        strategyTitle.innerHTML = `Strategy`;
        strategyDescription.innerHTML = `<br/>`;
        inclusionTitle.innerHTML = `Inclusion`;
        inclusionDescription.innerHTML = `<br/>`;
    }
}

function traduceConstruction(leng){

    //principal
    let principalSubtitle = document.getElementById('principalSubtitle');
    let principalTitle = document.getElementById('principalTitle');

    //container

    let titleContainer = document.getElementById('titleContainer');


    //services

    let servicesSubtitle = document.getElementById('servicesSubtitle');
    let servicesTitle = document.getElementById('servicesTitle');
    if(leng == 'ES'){

        principalSubtitle.innerHTML = `Nuestros servicios`;
        principalTitle.innerHTML = `Construcción de <span>albercas</span>`;
        servicesSubtitle.innerHTML = `¿Qué hacemos?`;
        servicesTitle.innerHTML = `Otros <span>Servicios</span>`;
    }else {

        principalSubtitle.innerHTML = `Our services`;
        principalTitle.innerHTML = `Pool <span>albercas</span>`;
        servicesSubtitle.innerHTML = `What We Do`;
        servicesTitle.innerHTML = `Other <span>Services`;
    }


}

function traduceContact(leng){

    //principal
    let principalSubtitle = document.getElementById('principalSubtitle');
    let pricipalTitle = document.getElementById('pricipalTitle');

    //container

    let containerTitle = document.getElementById('containerTitle');
    let containerDescription = document.getElementById('containerDescription');
    let callUsContainer = document.getElementById('callUsContainer');
    let phoneContainer = document.getElementById('phoneContainer');
    let emailContainer = document.getElementById('emailContainer');
    let contEmailContainer = document.getElementById('contEmailContainer');
    let address = document.getElementById('address');
    let conAddressContainer = document.getElementById('conAddressContainer');

    let titlecontact = document.getElementById('titlecontact');

    //form

    let nameInput = document.getElementById('nameInput');
    let emailInput = document.getElementById('emailInput');
    let phoneInput = document.getElementById('phoneInput');
    let subjectInput = document.getElementById('subjectInput');
    let messageInput = document.getElementById('messageInput');
    let buttonSend = document.getElementById('buttonSend');     

    if(leng == 'ES') {
        //principal
        principalSubtitle.innerHTML = `A un toque de distancia`;
        pricipalTitle.innerHTML = `Contactanos`;

        //container

        containerTitle.innerHTML - `Información de contacto`;
        containerDescription.innerHTML = `Contactanos y realiza cualquier pregunta o aclaración.`;
        callUsContainer.innerHTML = `Llámanos`;
        phoneContainer.innerHTML = `+1 (970) 470-9245`;
        emailContainer.innerHTML = `Escríbenos`;
        contEmailContainer.innerHTML = `carloscalzadillas22@gmail`;
        address.innerHTML = `Dirección`;
        conAddressContainer.innerHTML = `04 Edwards, CO 81632 US`;
         
        //contactContainer
        titlecontact.innerHTML = `Contacto`;
        nameInput.placeholder = `Nombre *`;
        emailInput.placeholder = `correo *`;
        phoneInput.placeholder = `teléfono *`;
        subjectInput.placeholder = `Sujeto *`;
        messageInput.placeholder = `Mensaje *`;
        buttonSend.innerHTML = `Enviar`;


    }else{
        //principal
        principalSubtitle.innerHTML = `Get in touch`;
        pricipalTitle.innerHTML = `Contact <span>Us</span>`;

        //container

        containerTitle.innerHTML - `Contact Information`;
        containerDescription.innerHTML = `Contact us and ask any question or clarification.`;
        callUsContainer.innerHTML = `Call us`;
        phoneContainer.innerHTML = `+1 (970) 470-9245`;
        emailContainer.innerHTML = `Send us an email`;
        contEmailContainer.innerHTML = `carloscalzadillas22@gmail`;
        address.innerHTML = `Visit our office`;
        conAddressContainer.innerHTML = `04 Edwards, CO 81632 US`;
         

        //contactContainer
        titlecontact.innerHTML = `Contact`;
        nameInput.placeholder = `Your Name *`;
        emailInput.placeholder = `Your Email *`;
        phoneInput.placeholder = `Your Number *`;
        subjectInput.placeholder = `Subject *`;
        messageInput.placeholder = `Message *`;
        buttonSend.innerHTML = `Send Message`;

    }
}