
const url = 'https://restcountries.com/v3.1/all'
fetch(url)
.then(res => res.json())
.then(data => getData(data))
const main =document.querySelector('.main')
function getData(data){
  console.log(data)
  for(let count of data){
    const div =document.createElement('div')
    div.classList.add('item')
    div.innerHTML=`
    <h1>Country</h1>
    <h3>Name : ${count.name.common}</h3>
    <h2>Capital : ${count.capital}</h2>
    <button onclick="upDate('${count.cca2}')">Detailes</button>
    `
    main.appendChild(div)
  }
}

function upDate(count){
const url =`https://restcountries.com/v3.1/alpha/${count}`
fetch(url)
.then(res => res.json())
.then(data => getDetailesData(data))
}

const detailes = document.querySelector('.detailes')
function getDetailesData(data){
    clare();
  const div = document.createElement('div')
  div.classList.add('top')
  div.innerHTML=`
  <h2>Country Detailes</h2>
  <img src="${data[0].flags.png}" alt="">
  <h3>Map : ${data[0].maps.googleMaps}</h3>
  <h3>Continents : ${data[0].continents}</h3>
  <h3>Population : ${data[0].population}</h3>
  <h3>Region : ${data[0].region}</h3>
  <h3>StartOfWeek : ${data[0].startOfWeek}</h3>
  <h3>Subregion :${data[0].subregion}</h3>
  <h3>Timezones : ${data[0].timezones}</h3>
  <h3>Tld : ${data[0].tld[0]}</h3>
  `
  detailes.appendChild(div)
}

function clare(){
  while(detailes.firstChild){
    detailes.removeChild(detailes.firstChild)
  }
}    

