//script home palabras
var typed = new Typed('.type', {
  strings: ['Goole ads', 'Facebook ads','Redes Sociales','Captar Lead','Diseño Web','Branding','Seo','Diseño a la medida','Experiencia de usuario','Interfaz de usuario','remarketing'],
  typeSpeed:100,
  backSpeed:70,
  loop:true,
});

//modal
$(document).ready(function(){
      $('#show-modal-embudo').on('click', function(){
        $('.modal-embudo').css({'visibility': 'visible', 'opacity': '1'});
      });
      $('#show-modal-posicionamiento').on('click', function(){
        $('.modal-posicionamiento').css({'visibility': 'visible', 'opacity': '1'});
      });
      $('#show-modal-ads').on('click', function(){
        $('.modal-ads').css({'visibility': 'visible', 'opacity': '1'});
      });
      $('#show-modal-design').on('click', function(){
        $('.modal-design').css({'visibility': 'visible', 'opacity': '1'});
      });
      $('.modal .modal-box .icon i').on('click', function(){
        $('.modal').css({'visibility': 'hidden', 'opacity': '0'});
      });
        $('.modal .modal-box .content .modal-links a').on('click', function(){
        $('.modal').css({'visibility': 'hidden', 'opacity': '0'});
      });
    });


//script sroll y menu
$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      if($(window).scrollTop() > 0){
        $('.scroll-top').show();
      }else{
        $('.scroll-top').hide();
      }

      // scroll spy 

      
    $('section').each(function(){

      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');
      let top = $(window).scrollTop();

      if(top > offset && top < offset + height){
        $('.navbar ul li a').removeClass('active')
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }

    });

    });

    // smooth scrolling

    $('a[href*="#"]').on('click',function(e){

      e.preventDefault();

      $('html, body').animate({

        scrollTop : $($(this).attr('href')).offset().top,

      },
      500,
      'linear'
      )

    })

});




// seccion pagina web

//Get All Value
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');

//Now Work
one.addEventListener('click', () => {
    document.querySelector('.first').style.display = "block";
    document.querySelector('.second').style.display = "none";
    document.querySelector('.third').style.display = "none";
    one.classList.add('active');
    two.classList.remove('active');
    three.classList.remove('active');
});

two.addEventListener('click', () => {
    document.querySelector('.second').style.display = "block";
    document.querySelector('.first').style.display = "none";
    document.querySelector('.third').style.display = "none";
    two.classList.add('active');
    one.classList.remove('active');
    three.classList.remove('active');
});

three.addEventListener('click', () => {
    document.querySelector('.second').style.display = "none";
    document.querySelector('.first').style.display = "none";
    document.querySelector('.third').style.display = "block";
    one.classList.remove('active');
    two.classList.remove('active');
    three.classList.add('active');
});



// PORTAFOLIO GRID

const grid = new Muuri('.grid', {
  layout: {
    rounding: false
  }
});

window.addEventListener('load', () => {
  grid.refreshItems().layout();
  document.getElementById('grid').classList.add('imagenes-cargadas');

  // Agregamos los listener de los enlaces para filtrar por categoria.
  const enlaces = document.querySelectorAll('#categorias a');
  enlaces.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
      evento.preventDefault();
      enlaces.forEach((enlace) => enlace.classList.remove('activo'));
      evento.target.classList.add('activo');

      const categoria = evento.target.innerHTML.toLowerCase();
      categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
    });
  });

  // Agregamos el listener para la barra de busqueda
  document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
    const busqueda = evento.target.value;
    grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
  });

  // Agregamos listener para las imagenes
  const overlay = document.getElementById('overlay');
  document.querySelectorAll('.grid .item img').forEach((elemento) => {
    elemento.addEventListener('click', () => {
      const ruta = elemento.getAttribute('src');
      const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

      overlay.classList.add('activo');
      document.querySelector('#overlay img').src = ruta;
      document.querySelector('#overlay .descripcion').innerHTML = descripcion;
    });
  });

  // Eventlistener del boton de cerrar
  document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
    overlay.classList.remove('activo');
  });

  // Eventlistener del overlay
  overlay.addEventListener('click', (evento) => {
    evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
  });
});


// formulario guia gratis 

window.REQUIRED_CODE_ERROR_MESSAGE = 'Elija un código de país';

  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "La información que ha proporcionado no es válida. Compruebe el formato del campo e inténtelo de nuevo.";

  window.REQUIRED_ERROR_MESSAGE = "Este campo no puede quedarse vacío. ";

  window.GENERIC_INVALID_MESSAGE = "La información que ha proporcionado no es válida. Compruebe el formato del campo e inténtelo de nuevo.";




  window.translation = {
    common: {
      selectedList: '{quantity} lista seleccionada',
      selectedLists: '{quantity} listas seleccionadas'
    }
  };

  var AUTOHIDE = Boolean(0);



















