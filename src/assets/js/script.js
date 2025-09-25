
// haeder
let open = document.querySelector('.btnmenu');
let close = document.querySelector('.close');
let side = document.querySelector('.menu'); 

open.onclick = () => {
  side.classList.add('open');
}

close.onclick = () => {
  side.classList.remove('open');
}

// backTop
const btn_ = document.querySelector('#backTop');
console.log(btn_);
if (btn_) {
  
window.onscroll = function() {
  if (window.scrollY >= 300) {
    btn_.style.opacity = '1'
    console.log('show');
  }else{
    btn_.style.opacity = '0'
    console.log('hide');
  }
}
btn_.onclick = () => {
  window.scroll(
    {
      top : 0,
      behavior : 'smooth'
    }
  )
}
}

// modal
$(document).ready(function() {
    
    $('.menuBtn').on('click', function(e) {
      e.preventDefault();
        $('.modal-parent').fadeIn();
    });

    $('.modalClose').on('click', function() {
        $('.modal-parent').fadeOut(); 
    });

    $('.modal-parent').on('click', function(e) {
        $(this).fadeOut();
});
    $('.modal').click((e)=>{
      e.stopPropagation();
    })
});







