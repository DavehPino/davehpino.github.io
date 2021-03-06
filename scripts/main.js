$(document).ready(function(){


setTimeout(function(){alert("For english content click the left side button 'Eng'")},1000);

// ANIMACION MENU DEL RESPONSIVE DESIGN 
var oMenu = $('.ocultar-menu');
var bMenu = $('#menuicon');
var menuUl = $('#menu ul');

bMenu.click(function(){

    if(oMenu.css('display') == 'none'){
        oMenu.css('display','block');
        menuUl.css('place-items','center');
        menuUl.css('display','grid');
        $('#menu').css('width','70%');
       
    }
    else if(oMenu.css('display') == 'block'){
        oMenu.css('display','none');
        $('#menu').css('width','50%');
    }
})


// Boton para mostrar info de la pagina inicial

var boton= $('#boton');
var p = $('#p');
var titulo = $('#titulo');
boton.click(function(){
    
    if(boton.text() == "Show more information..." || boton.text() == "Show less..."){
            p.toggle('scale', 500);
        if(boton.html().length > 14){
            boton.html("Show less...");
            animador.animate({
                scrollTop: titulo.offset().top
            }, 1); 

        }
        else if(boton.html().length < 14){
            boton.html("Show more information...");
            animador.delay(200).animate({
                scrollTop: titulo.offset().top
            }, 400); 
            
        }   
    }
    else if(boton.text() == "Mostrar más información..." || boton.text() == "Ocultar información..."){
            p.toggle('scale', 500);
        if(boton.html().length > 24){
            boton.html("Ocultar información...");
            animador.animate({
                scrollTop: titulo.offset().top
            }, 1); 

        }
        else if(boton.html().length < 24){
            boton.html("Mostrar más información...");
            animador.delay(200).animate({
                scrollTop: titulo.offset().top
            }, 400); 
            
        }   
    }
})


/*  No tenia planeado utilizar jQuery para la elaboración de esta pagina
    Sin embargo a partir de este punto me dieron ganas de utilizar algunas funcionalidades de jQuery
    Por esta razon el codigo previo a este comentario fue hecho con JavaScript nativo*/


// Propiedades JSON del Slider
    $('#bxslider').bxSlider({
      mode: 'fade',
      slideWidth: 400,
      captions: false,
      
    });


// Responsive design del portafolio
    $('#botonEXP').click(function(){
        window.open('resources/video1.mp4');
    })
    $('#botonEXP2').click(function(){
        window.open('resources/video2.mp4');
    })
// Cambiador de tema


var color = $('#tema');
if(localStorage.getItem('red') == "rojo"){
    color.attr("href","css/rojo.css");
    
}
if(localStorage.getItem('blue') == "azul"){
    color.attr("href","css/azul.css");
  
}
if(localStorage.getItem('golden') == "dorado"){
    color.attr("href","css/dorado.css");
    
}
    
    $('#R').click(function(){
    localStorage.clear();
    localStorage.setItem('red','rojo');
      color.attr("href","css/rojo.css");
      }
  )
    $('#G').click(function(){    
    localStorage.clear();
    localStorage.setItem('golden','dorado');  
        color.attr("href","css/dorado.css");
    }
)
    $('#B').click(function(){
    localStorage.clear();
    localStorage.setItem('blue','azul');      
        color.attr("href","css/azul.css");
    }
)

// Validaciones del formulario

    $.validate({
        lang: 'es'
    })

// Animacion del boton UP

    $("#Up").click(function(){
        
        
        animador.animate({
            scrollTop: $("#Bsuperior").offset().top
        }, 300);
    })

// Animacion al clickear opciones del header

    var animador = $('html,body');
    var header = [$("#headerEx"), $("#headerCo"), $("#headerE"), $("#headerC")];
    var bheader = [$("#bheaderEx"), $("#bheaderCo"), $("#bheaderE"),$("#bheaderC") ];

    bheader.forEach((element,index) =>{
        element.click(function(){
        
        
            animador.animate({
                scrollTop: header[index].offset().top
            }, 500);
        })
    })
   
// Acordeon de seccion conocimientos

    var acordion = $(".acord");
        acordion.accordion({
        active: false,  
        collapsible: true,
        heightStyle: "content",
     
        
    });
    var acordionA = $('.click');
    var boxT= $('#boxT'); 
    var acc = [$('#ui-id-1'), $('#ui-id-3'), $('#ui-id-5'), $('#ui-id-7'), $('#ui-id-9')];
    var active = [];
    acc.forEach((elementos, index)=>{
        active[index] = elementos.attr('aria-selected');        
    })
        acordionA.click(function(){
            acc.forEach((elementos, index)=>{
                active[index] = elementos.attr('aria-selected');               
            })
            if(boxT.css('height') == '400px'){
                if(active[0] == 'false' && active[1] == 'false' && active[2] == 'false' && active[3] == 'false' && active[4] == 'false' ){
                    boxT.animate({height:'330'});
                }
            }                
            else if(boxT.css('height') == '330px'){  
                boxT.animate({height: '400'});                     
            }
        })

// Animacion Certificados
     var certificados = [document.querySelector('#sqlc'), document.querySelector('#python'), document.querySelector('#micro'), document.querySelector('#javascript'), document.querySelector('#bootstrap')];
    certificados.forEach((element)=>{
        element.addEventListener('click',(e)=>{
        
            if(element.style.width == "750px"){
                element.style.width = "50px";                
            }
            else{
                element.style.width = "750px";
            }
        })
    })
   // ------------------ TRADUCTOR ------------------
   
    var language = $('#language');
    var titule = $('#titule');
    language.click(function(){
            language.css({background: 'linear-gradient(to bottom, #AA151B 5px, #F1BF00, #AA151B 45px)'});
        if(titule.text() != 'RESUME'){
            $('#language').text('Esp');
            $('#titule').text('RESUME');
            $('#pdescarga').text('Download Resume ');
            $('#bheaderS').text('About me');
            $('#bheaderEx').text('PORTFOLIO');
            $('#bheaderCo').text('Knowledge');
            $('#bheaderE').text('Education');
            $('#bheaderC').text('Contact');
            $('#titulo').text('A bit about me');
            $('#p2').text("Hi, my name is David Pino, I am a passionated tech guy, specifically in computing technology. I'm a front-end web developer and I'm looking forward to be part of new projects in which I could develop my skills as a programmer and to gain much needed experience in the field. If you find yourself interested in working with me, feel free to get in touch with me.");
            $('#p').text("I'm 26 years old, I was born on December 21th, 1994 in Caracas, Venezuela, and today I live in Buenos Aires, Argentina, I'm currently working on my associate's degree (Systems analysis), although I also dedicate much of my free time to learn and study independently");
            $('#boton').text('Show more information...');
            $('#headerEx').text('PORTFOLIO');
            $('#prep').text('Website developed with BOOTSTRAP + JavaScript');
            $('#prep2').text('Tic-tac-toe game developed with JavaScript');
            $('.botonEXP').text('Watch video');
            $('#headerCo').text('KNOWLEDGE');
            $('#tech').text('Programming skills');
            $('#j1').text('Level: Intermediate');
            $('#j2').text('jQuery: Intermediate');
            $('#j4').text('NodeJS: Basic');
            $('#t1').text('Level: Basic');
            $('#h').text('Level: Advanced');
            $('#c1').text('Level: Intermediate');
            $('#c2').text('Bootstrap: Intermediate');
            $('#c3').text('FlexBox: Basic');
            $('#o').text('Other programming languages');
            $('#o1').text('C++: Basic');
            $('#o2').text('Python: Basic');      
            $('#otech').text('Other Skills');
            $('#i').text('Languages');
            $('#i1').text('Spanish: Native');
            $('#i2').text('English(Oral level): Advanced');
            $('#i3').text('English(Writting level): Advanced');
            $('#b').text('DataBases');
            $('#b1').text('MySQL: Intermediate');
            $('#b2').text('MongoDB: Basic');
            $('#po').text('Office Package');
            $('#po1').text('MS Word: Intermediate');
            $('#po2').text('MS Excel: Intermediate');
            $('#po3').text('MS Powerpoint: Intermediate');
            $('#a').text('Adobe Technologies');
            $('#a1').text('Photoshop: Basic');
            $('#headerE').text('EDUCATION');
            $('#l').text('BACHELOR DEGREE (BIOCHEMISTRY)');
            $('#l2').text('JAN 2014 - JAN 2018 (Incomplete)');
            $('#l1').text('House of studies: UCV(Venezuela)');
            $('#t').text('ASSOCIATE DEGREE (SYSTEM ANALYSIS)');
            $('#tt2').text('MARCH 2020 Current');
            $('#tt1').text('House of studies: IFTS 5(Argentina)');
            $('#cp').text('COURSE: PYTHON + HTML, CSS, Flask y MySQL');
            $('#cp2').text('Hours: 16 Year: 2020');
            $('#cp1').text('House of studies: UDEMY(Online)');
            $('#btrap').text('COURSE: BOOTSTRAP, RESPONSIVE WEBSITES');
            $('#btrap1').text('House of studies: CREHANA(Online)');
            $('#btrap2').text('Hourse: 7 Year: 2020');
            $('#cj').text('COURSE: JavaScript + jQuery, Angular, NodeJS');
            $('#cj2').text('Hours: 31 Year: 2020');
            $('#cj1').text('House of studies: UDEMY(Online)');
            $('#sql').text('COURSE: SQL with exercises');
            $('#sql1').text('House of studies: UDEMY(Online)');
            $('#sql2').text('Hourse: 1.5 Year: 2020');
            $('#ct').text('COURSE:  PC TECHNICIAN');
            $('#ct2').text('Hours: 60 Year: 2018');
            $('#ct1').text('House of studies: ITELCA(Venezuela)');
            $('#headerC').text('CONTACT');
            $('#iname').attr('placeholder','Name*'); 
            $('#ilastname').attr('placeholder','Last Name*'); 
            $('#icompany').attr('placeholder','Company*'); 
            $('#text-area').attr('placeholder','Comment*'); 
            $('#mcontact').text('CONTACT ME');
            $('#enviar').attr('Value','Send');
        }
        else{
            location.reload();
        }
    })

});
