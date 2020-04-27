const $=(q)=>document.getElementById(q);

window.onload=()=>{var mySwiper= new Swiper('.swiper-container',{
  slidesPerView:3,
  spaceBetween:5,
  preventClicks:true,
  loop:true
}
    )}
document.addEventListener('keydown',(e)=>{
	console.log(e);
	if(e.keyCode==13){query=$('query').value;
		window.location=`searchresult.html?query=${query}`;}
})
