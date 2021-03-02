
var arrCatFacts = [];
fetchCat();
function fetchCat() {
    const url = "https://cat-fact.herokuapp.com/facts";
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then((res) => res.json())
        .then((res) => {
            arrCatFacts = res;
            console.log(arrCatFacts)
        })
        .catch((err) => console.log(err))

}

// get random facts using promise
function GetRandomCatfacts() {
    let myPromise = new Promise(function (resolve, reject) {
        const randomArr = arrCatFacts[Math.floor(Math.random() * arrCatFacts.length)];
        if (randomArr) {
            resolve(randomArr);
        } else {
            reject("Error");
        }
    });

    myPromise.then(
        function (value) { console.log(value); },
        function (error) { console.log(error); }
    );
}

// get random facts using async
async function GetRandomCatfacts_async() {
    await fetch("https://cat-fact.herokuapp.com/facts/random", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
        })
        .catch((err) => console.log(err))
}
