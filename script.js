const $=(q)=>document.getElementById(q);

window.onload=()=>{var mySwiper= new Swiper('.swiper-container',{
  slidesPerView:3,
  spaceBetween:5,
  preventClicks:true,
  loop:true
}
    )}
$('buttonelem').onclick=()=>{
	query=$('query').value;
	window.location=`searchresult.html?query=${query}`;
}