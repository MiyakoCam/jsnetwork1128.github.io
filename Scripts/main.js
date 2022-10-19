//
// main.js | JSnetwork Official site
//
// (c) 2022 JSnetwork | Source code by よね/Yone
//
// No modification or reproduction of any kind is permitted.
// 改変や複製を一切禁じます。
//

// ---------- Init var ---------- //

const name_site = "JSnetwork公式ページ";

let isActive_headerLink = false;

// ---------- Main ---------- //
document.addEventListener('DOMContentLoaded', function(){
  init_page();
});

// ---------- Functions ---------- //

// ----- Page ----- //
function init_page(){
  init_commonElements();
};

// --- Init common elements --- //
function init_commonElements(){
  init_commonElements_header();
  init_commonElements_footer();
};

// header
function init_commonElements_header(){

  $("header").load("./elements/header.html");

  // header link button
  $(document).on('click', 'header .btn_link', function(){
    if(!isActive_headerLink){
      isActive_headerLink = true;

      $('header .btn_link>.open').removeClass('active');
      $('header .btn_link>.close').addClass('active');

      $('header nav').addClass('active');
    } else if(isActive_headerLink){
      isActive_headerLink = false;

      $('header .btn_link>.close').removeClass('active');
      $('header .btn_link>.open').addClass('active');

      $('header nav').removeClass('active');
    }
  });

};

// footer
function init_commonElements_footer(){
  $("footer").load("./elements/footer.html");
};
