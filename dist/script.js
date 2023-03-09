$(".option").click(function () {
   $(".option").removeClass("active");
   $(this).addClass("active");
});

/*
<div class="option" style="--optionBackground:url(BACKGROUND IMAGE URL);">
      <div class="shadow"></div>
      <div class="label">
         <div class="icon">
   <svg>ICON FROM ASSETS</svg>
         </div>
         <div class="info">
            <div class="main">TITTLE</div>
            <div class="sub">SUBTEXT</div>
         </div>
      </div>
   </div>
*/