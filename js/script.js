let searchInput= document.getElementById("search");
var days = ['Friday', 'Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ];
searchInput.addEventListener("keyup", function(){
    let searchCountry= searchInput.value;
    get_forecast(searchCountry);
    console.log(searchCountry);
});

async function get_forecast(location="cairo"){
    let apiResponse =await fetch(`http://api.weatherapi.com/v1/forecast.json?key=5b4c7c3eb7a142a1a06210139211409&q=
    ${location}&days=3`);
    let apiJsonRespone= await apiResponse.json()
    console.log(apiJsonRespone);
    if(apiJsonRespone.error){
        console.log(apiJsonRespone.error);
        return;
    }
    console.log("Heloo");
    let container=`
    <div class="col-lg-4 p-0  text-center text-lg-start">
    <div class="day d-flex justify-content-between align-items-center  px-4 py-1 ">
        <p class=" "></p>
        <p>${(apiJsonRespone.forecast.forecastday[0].date) }</p>
    </div>
    <div class="forcastDetails px-4 py-3">
        <p id="location">${apiJsonRespone.location.name},${apiJsonRespone.location.country}  </p>
        <p id="degree" class=" text-white pe-2" >${apiJsonRespone.current.temp_c} <sup>o</sup>C <img src="https:${apiJsonRespone.current.condition.icon}" alt="">  </p>
  <p id="forcastStatus" class="text-primary ">${apiJsonRespone.current.condition.text} </p>
    </div>
</div>`;
let c="";
for(let i=1;i<3;i++)
container+=`  <div class="col-lg-4 p-0 text-center">
<div class="day d-flex justify-content-center align-items-center  px-4 py-1 ">
    <p class=" ">Thuresday</p>
</div>
<div class="forcastDetails p  px-4 py-5">
   <img src="https:${apiJsonRespone.forecast.forecastday[i].day.condition.icon}"   alt="ads">
    <p id="degree" class=" text-white pe-2 fs-4 py-1"   > ${apiJsonRespone.forecast.forecastday[i].day.maxtemp_c}<sup>o</sup>C    </p>
    <small class="py-2 fs-5">${apiJsonRespone.forecast.forecastday[i].day.mintemp_c}<sup>o</sup></small>
<p id="forcastStatus" class="py-3 text-primary ">${apiJsonRespone.forecast.forecastday[i].day.condition.text}</p>
</div>
</div>`;
document.getElementById("forecastContainer").innerHTML=container;

}
get_forecast();
// ${ days[ new Date(apiJsonRespone.forecast.forecastday[0].date).getDay] }
// let da= new Date("2021-09-19");
//  alert(new Date(apiJsonRespone.forecast.forecastday[0].date).getDay() +"  hello");
// alert(da.getDay());
