//courtesy to the super coder I can't recall
const $=(q)=>document.getElementById(q);
//Get imdbcode
const queryString = window.location.search;
const imdbcode=queryString.split("?imdbcode=")[1];
console.log(imdbcode)
const apiUrl=`https://forgaming.uc.r.appspot.com/details?imdbcode=${imdbcode}`;
if(imdbcode){loadApiData();
}

function movieOrSeries(season){
if(season){
  season=+season;
 allSeason='<option value="" disabled selected>Select Season</option>';
  for(var i=1;i<=season;i++){
    allSeason+=`<option value="${i}">Season ${i}</option>`
}
$('season_loc').innerHTML=allSeason;
}
else{
  $('season_loc').style.display="none";
  $('movie_loc').style.display="block";
  $('movie_loc').innerHTML=`<a href="watchpage.html?imdbcode=${imdbcode}"><i class="fas fa-play-circle fa-2x"></i>
</a>`;

}
}

function loadApiData(){
  fetch(apiUrl).then((result)=>result.json())
  .then((data)=>{
    console.log(data.Image);
    $('image_loc').src=data.Image;
    $('info_loc').innerText=data.plot;
    $('name_loc').innerText=data.nameYear;
    var season=data.latestSeason;
    movieOrSeries(season);
    loadingornot();
    
  })
}
function loadingornot(){
      if(document.readyState!="complete"){
        loadingornot();
      }
      else{console.log('sds');
      $('maindiv').style.display="block";
      $('gif').style.display="none";
    }}
$('season_loc').onchange=()=>{
seasonNO=document.getElementById('season_loc').value;
console.log(seasonNO);
$('episode_loc').innerHTML='<img src="imgs/loading.gif" id="gif">';
let url=`https://forgaming.uc.r.appspot.com/episodes?imdbcode=${imdbcode}&season=${seasonNO}`;
fetch(url).then((res)=>res.json()).then
((data)=>{
  let result="";
  data.forEach((item,index)=>{result+=`<div class="episode-item">
<strong>S${seasonNO},E${index+1} ${item.title} </strong>
<div class="plot"> ${item.info}</div>
<div class="icons">
<a href="watchpage.html?imdbcode=${imdbcode}&season=${seasonNO}&ep=${index+1}"><i class="fas fa-play-circle fa-2x"></i>
</a><i class="fas fa-check-double fa-2x green"></i>
</div>
</div>`
  })
  $('episode_loc').innerHTML=result;


}).catch(()=>{
    $('episode_loc').innerHTML="API ERROR TRY AGAIN";

})
}
