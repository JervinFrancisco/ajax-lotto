/***************************************
wait for DOMContentLoaded
call init function
add listeners for click
*******************/


function init() {

    let btn = document.querySelector("#btnSend");
    btn.addEventListener('click', getNum);
    let btn2 = document.querySelector("#btnBack");
    btn2.addEventListener('click', getNum2);

}

document.addEventListener('DOMContentLoaded', init);

function getNum(ev) {
    ev.preventDefault();
    console.log("button clicked");

    let digit = document.getElementById("digits").value;
    let maxx = document.getElementById("max").value;
    let link = ("https://griffis.edumedia.ca/mad9014/lotto/nums.php");

    let dData = new FormData();
    dData.append("digits", digit);
    dData.append("max", maxx);

    let opts = {
        method: 'post',
        mode: 'cors',
        body: dData
    };


    fetch(link, opts)
        .then(function (response) {
            console.log("response from server ", response.status);
            return response.json();
        })
        .then(function (data) {
            console.log("data parsed", data);
            data.numbers.forEach(function (item, index) {
                let ranNumber = document.createElement("li");
                ranNumber.className = "num_list";
                ranNumber.innerHTML = item;
                document.querySelector('.num_list').appendChild(ranNumber);
                document.getElementById('list').classList.add('active');
                document.getElementById('home').classList.remove('active');
            })

        })


        .catch(function (err) {
            console.log("ERROR: ", err.message);
        });


}


function getNum2(ev) {
    let reload = document.querySelector('.num_list').innerHTML = "";
    reload = document.getElementById('list').classList.toggle('active');
    reload = document.getElementById('home').classList.toggle('active');


}
