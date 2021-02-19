// Exercise 01 - Return and print every property with their values from 23 user (bidejkji ima samo 10 user objekti vo apito, go isprintav 9tiot, znam deka odma posle cas Darko go menuvase baranjeto od zadacata, pa go smeni od 23rd post vo 23rd user, zaboravi deka ima samo 10 users :) 

let getUserBtn = document.getElementById('printUser9');
let user9ResPar = document.getElementById('user9');

console.log(getUserBtn, user9ResPar);

// function printUser(response, element){
//     if(response !== undefined && response.length > 0){
//         element.innerHTML += 
//         `Name: ${response.name};<br />
//         Username: ${response.username};<br />
//         Email: ${response.email};<br />
//         Address:
//             <ul>
//                 <li>Street: ${response.address.street};</li>
//                 <li>Suite: ${response.address.suite};</li>
//                 <li>City: ${response.address.city};</li>
//                 <li>Zip Code: ${response.address.zipcode};</li>
//                 <li>
//                     Geo:
//                         <ul>
//                             <li>Latitude: ${response.address.geo.lat}</li>
//                             <li>Longitude: ${response.address.geo.lng}</li>
//                         </ul>
//                 </li>        
//             </ul>
//         Phone: ${response.phone};<br />Website: ${response.website};<br />
//         Company:
//             <ul>
//                 <li>Company name: ${response.company.name};</li>
//                 <li>Company catch phrase: ${response.company.catchPhrase};</li>
//                 <li>Company bs: ${response.company.bs};</li>
//             </ul>`;
//     }
// }

 
getUserBtn.addEventListener("click", function(){
    fetch('https://jsonplaceholder.typicode.com/users/9')
        .then(response => response.json()) 
        .then(user => {
            // printUser(user, user9ResPar); - Funkcijava raboti samo bez proverkata, bez ifot if(response !== undefined && response.length > 0) - ne znam zosto. Inaku probav i drugi nacini, so forin na primer, i isto mi raboti, ama sekojpat proverkata ne mi raboti, dotolku povekje sto so forin ne mi trebase samo edna proverka, tuku i dali vnatre vo objektot ima objekt, ili duri i objekt vo objekt vo objekt, kako sto e slucaj so geo od user - povtorno, ne mi rabotea ni tie proverki a gi postavuvav vaka (if typeof property === "object" && property !== null) pa uste eden forin (const key of property) za da mi go izlista i vakviot objekt, i uste edna proverka vgnezdiv so istava logika, samo razlicno imenuvani privremenite varijabli, neli sledstveno narednata proverka bese (if typeof key === "object" && key !== null). Koristev debugger, i voopsto ne mi vleguvase vo tie uslovi ciklusot, iako koga gi logirav typeof i koga proveruvav dali soodvetnite objekti !== null, sekojpat  mi vrakjase object i true, takasto, ne sfakjam kade ja utinjam rabotava so proverkite. Izvinete na referatot, ako ne me sfakjate sto prasuvam, kazete, kje probam poubavo da objasnam.

            user9ResPar.innerHTML += 
            `Name: ${user.name};<br />
            Username: ${user.username};<br />
            Email: ${user.email};<br />
            Address:
                <ul>
                    <li>Street: ${user.address.street};</li>
                    <li>Suite: ${user.address.suite};</li>
                    <li>City: ${user.address.city};</li>
                    <li>Zip Code: ${user.address.zipcode};</li>
                    <li>
                    Geo:
                        <ul>
                            <li>Latitude: ${user.address.geo.lat}</li>
                            <li>Longitude: ${user.address.geo.lng}</li>
                        </ul>
                </li>        
            </ul>
            Phone: ${user.phone};<br />Website: ${user.website};<br />
            Company:
            <ul>
                <li>Company name: ${user.company.name};</li>
                <li>Company catch phrase: ${user.company.catchPhrase};</li>
                <li>Company bs: ${user.company.bs};</li>
            </ul>`;
        })
        .catch(error => console.error(error));
})


// Exercise 02 -Show all albums that have "omnis" in their title

let titlePar = document.getElementById("printTitle");
let getTitleWithOmnisBtn = document.getElementById("getTitleWithOmnis");

// Raboti i zakomentiranava funkcija, ama ja napraiv i popeski, kako taa podole, zasto sakam da si go kompliciram zivotot haha :) Funkcijata podole mi bese interesna za pravenje, i si raboti, pa ja ostaviv. 

// function getOmnis(array, resultPar){
//     for (const element of array) {
//         if(element.title.includes("omnis")){
            
//             resultPar.innerHTML += `Album № ${element.id} - title content: "${element.title}"<br />`;
//         }
//     }
// }


function getOmnis(array, resultPar){
    for (const element of array) {
        for(i = 0; i < element.title.length; i++){
            if(element.title[i] === 'o'){
                if(element.title[i+1] === 'm'){
                    if(element.title[i+2] === 'n'){
                        if(element.title[i+3] === 'i'){
                            if(element.title[i+4] === 's'){
                                resultPar.innerHTML += `Album № ${element.id} - title content: "${element.title}"<br />`;
                            }
                        }
                    }
                }
            }
        }
    }   
}


getTitleWithOmnisBtn.addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(albums => {
            getOmnis(albums, titlePar);
        })
        .catch(error => console.error(error));
})


// Exercise 03 - Create new user

function createNewUser(name, userName, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs){
    if (name !== "" && userName !== "" && email !== "" && street !== "" && suite !== "" && city !== "" && zipcode !== "" && lat !== "" && lng !== "" && phone !== "" && website !== "" &&  companyName !== "" && catchPhrase !== "" && bs !== ""){
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: "POST",
            body: JSON.stringify({
                name: name,
                userName: userName,
                email: email,
                address: {
                    street: street,
                    suite: suite,
                    city: city,
                    zipcode: zipcode,
                    geo: {
                        lat: lat,
                        lng: lng
                    }
                },
                phone: phone,
                website: website,
                company: {
                    name: companyName,
                    catchPhrase: catchPhrase,
                    bs: bs
                }
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then(response => response.json())
        .then(function(convertedJson)  {
            console.log("Successfully created user", convertedJson)
        })
        .catch(function(error) {console.error(error)});
    }    
}


document.getElementById("createNewUser").addEventListener('click', function(){
    let nameValue = document.getElementById("name").value;
    let userNameValue = document.getElementById("userName").value;
    let emailValue = document.getElementById("emailAddress").value;
    let phoneNumberValue = document.getElementById("phoneNumber").value;
    let websiteValue = document.getElementById("website").value;
    let streetValue = document.getElementById("street").value;
    let suiteValue = document.getElementById("suite").value;
    let cityValue = document.getElementById("city").value;
    let zipCodeValue = document.getElementById("zipCode").value;
    let latValue = document.getElementById("latitude").value;
    let lngValue = document.getElementById("longitude").value;
    let companyNameValue = document.getElementById("companyName").value;
    let companyCatchPhraseValue = document.getElementById("catchPhrase").value;
    let companyActivityValue = document.getElementById("companyActivity").value;

    createNewUser(nameValue, userNameValue, emailValue, streetValue, suiteValue, cityValue, zipCodeValue, latValue, lngValue, phoneNumberValue, websiteValue, companyNameValue, companyCatchPhraseValue, companyActivityValue);
})


// Exercise 04 - Delete random ToDo

let deleteToDoBtn = document.getElementById("deleteToDoBtn");


deleteToDoBtn.addEventListener('click', function() {
    // Math.random() returns values from 0 to 0.99999999 (never 1)
    let randomNumber = Math.floor(Math.random() * 200) + 1;

    fetch(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(deletedPost => console.log(`The randomNumber is ${randomNumber}, and will delete the post`, deletedPost))
    .catch(error => console.error(error));
})

