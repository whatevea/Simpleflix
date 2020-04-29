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
const hrefs=['',
	'tt0111161',
'tt0068646',
'tt0071562','tt0468569','tt0050083','tt1856010','tt2309295','tt2372162','tt2189461','tt3520702','tt2431438','tt2707408']
const myArray =[...document.querySelectorAll('img')];
myArray.forEach((item,index)=>{
	item.onclick=()=>{location=`series_details.html?imdbcode=${hrefs[index]}`}
})
console.log(myArray);
