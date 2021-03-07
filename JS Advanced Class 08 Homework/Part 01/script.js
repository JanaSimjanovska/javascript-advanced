// The user should insert code of a regional bloc. From the response you get, show every country that has more than one and less than four alternative spellings ("altSpellings"). Use Promise with AJAX in the function where you should send the value from the inserted regional bloc and Promise in the function where you will get all the countries with specific number of alternative spellings defined above. Also provide solution with fetch() inside asynchronous function and await both request and function where you do the check and returns every countries with specific alternative spellings.


let blocCode = document.getElementById("regBlocCode");
let baseUrl = `https://restcountries.eu/rest/v2/regionalbloc/`;

// Solution with AJAX 

let getDataBtnAjax = document.getElementById("dataBtnAjax");


getRegionalBloc = (code) => {
    return new Promise((resolved, rejected) => {
        $.ajax({
            url: baseUrl + code,
            success: (response) => {
                // resolved(response); Zakomentirano mi e, zasto ne mi e skroz jasno koja mu e ulogata, bidejkji funkcionira i vaka zadacata;
                checkData(response);
                getCountriesWithAltSpellings(response);
                console.log(response);
                
            },
            error: (error) => {
                rejected(error);
            }
        })
    })
}


checkData = data => {
    if(!data || typeof(data) !== "object"){
        throw new Error("Problem with the data!")
    }
    if(data.length === 0){
        throw new Error("No data")
    }
    return data
}


getCountriesWithAltSpellings = data => {

    let resultCountries = data.filter(country => country.altSpellings.length > 1 && country.altSpellings.length < 4) ;

    return new Promise((resolved, rejected) => {
        if(resultCountries.length === 0){
            rejected("There are no countries with more than 1 and less than 4 alternative spellings!")
        }
        else {
            resolved((resultCountries.forEach((country, index) => {
                console.log(`${index + 1}. ${country.name} - Number of alternative spellings ${country.altSpellings.length}`);
            })))
        }
    })
}

getDataBtnAjax.addEventListener("click", function(){
    getRegionalBloc(blocCode.value);
    blocCode.value = "";
})




// Solution with fetch

let getDataBtnFetch = document.getElementById("dataBtnFetch");


async function getRegionalBlocAsync (code){
    let response = await fetch(baseUrl + code);
    let data = await response.json();
    console.log(data);
    checkData(data); // Ja koristam istata proverka od reshenieto so ajax
    getCountriesWithAltSpellings2(data);
}


getCountriesWithAltSpellings2 = (data) => {
    let resultCountries = data.filter(country => country.altSpellings.length > 1 && country.altSpellings.length < 4)

    if(resultCountries.length === 0) {
        console.log("There are no countries with more than 1 and less than 4 alternative spellings!");
    }
    else{
        resultCountries.forEach((country, index) => {
            console.log(`${index + 1}. ${country.name} - Number of alternative spellings ${country.altSpellings.length}`);
        })
    }
}

getDataBtnFetch.addEventListener("click", function(){
    getRegionalBlocAsync(blocCode.value);
    blocCode.value = "";
})


