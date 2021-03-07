// The user should insert ISO 3166-1 2-letter country code. From the response you get, log every country name that has the same currency as the country from the response. Use Promise with AJAX in every function that you want to receive some response from the api-endpoints. Also provide solution with fetch() when you send requests. The function that supposed to log every country name should be asynchronous and you shall await the call for specific country data.


let isoInput = document.getElementById("isoCode");
let baseUrl = 'https://restcountries.eu/rest/v2/'


//Solution with Ajax

let getCountriesAjaxBtn = document.getElementById("dataBtnAjax");

let getCountryAjax = (code) => {
    return new Promise((resolved, rejected) => {
        $.ajax({
            url: baseUrl + "alpha/" + code,
            success: (response) => {
                resolved(response)
                console.log(response.currencies[0].code) 
                getCountriesWithSameCurrenciesAjax(response.currencies[0].code)   
            },
            error: (error) => {
                rejected(error);
                console.error('Please enter a valid 2-letter alpha ISO code!')
            }
        })
    })
}

async function getCountriesWithSameCurrenciesAjax(currency){
    let currencyCode = await currency
    return new Promise((resolved, rejected) => {
        $.ajax({
            url: baseUrl + "currency/" + currencyCode,
            success: (response) => {
                resolved(response)
                console.log(`Countries with the ${currencyCode} currency:`);
                response.forEach((country, index) => console.log(`${index + 1}. ${country.name}`));
            },
            error: (error) => {
                rejected(error);
            }
        })
    })
}

getCountriesAjaxBtn.addEventListener('click', function(){
    getCountryAjax(isoInput.value);
    isoInput.value = "";
})


// Solution with Fetch

let getCountriesFetchBtn = document.getElementById("dataBtnFetch");

let getCountryFetch = (code, callbackFunction) => {
    fetch(baseUrl + "alpha/" + code)
        .then(response => response.json())
        .then(result => {
            console.log("The request was successful.");
            console.log(result);
            callbackFunction(result.currencies[0].code);
        })
        .catch(error => {
            console.log("Please enter a valid 2-letter alpha ISO code!")
            console.error(error);
        })
}

async function getCountriesWithSameCurrenciesFetch(currency){
    let currencyCode = await currency;
    fetch(baseUrl + "currency/" + currencyCode)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            console.log(`Countries with the ${currencyCode} currency:`);
                result.forEach((country, index) => console.log(`${index + 1}. ${country.name}`));
        })
        .catch(error => {
            console.log("The request failed!")
            console.error(error);
        })
}

getCountriesFetchBtn.addEventListener("click", function(){
    getCountryFetch(isoInput.value, getCountriesWithSameCurrenciesFetch)
})

