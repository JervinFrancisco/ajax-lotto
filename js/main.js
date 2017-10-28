/***************************************
wait for DOMContentLoaded
call init function
add listeners for click
*******************/
document.addEventListener('DOMContentLoaded', init);

function init() {
  
    let btn = document.querySelector("#btnSend");
    btn.addEventListener('click', getNum);
    let btn2 = document.querySelector("#btnBack");
    btn.addEventListener('click', getNum2);
    

}

function getNum(ev) {
    
    let digit = document.getElementById("digits").value;
    let maxx = document.getElementById("max").value;
    let link = ("https://griffis.edumedia.ca/mad9014/lotto/nums.php");

    let dData = new FormData();
    dData.append("digits", digit);
    dData.append("max", maxx);

    let req = new Request(link, {method:"Post", body:dData});

    fetch(req)
        .then(function (response) {
            console.log("response from server ", response.status);
            return response.json();
        })
        .then(function (data) {
            data.numbers.forEach(function (item, index) {
                let ranNumber = document.createElement("li");
                ranNumber.className = "num_list";
                ranNumber.innerHTML = item;
                document.querySelector('.num_list').appendChild(ranNumber);
            })

        })
        .catch(function (err) {
            console.log("ERROR: ", err.message);
        });
  document.querySelector('.num_list').innerHTML = "";
  document.getElementById('list').classList.toggle('active');
  document.getElementById('home').classList.toggle('active');
}


function getNum2(ev) {
    let nums = document.querySelector('.num_list');
 
  
}




//
//function jet(ev) {
//    //    alert(ev.type);
//    let num = Math.floor(Math.random() * quotes.length);
//    // always have to round down with an array
//    ev.currentTarget.textContent = quotes[num];
//    klack(ev);
//    australia(ev);
//    // pass the ev object from this function
//    // to the other functions
//}


//let btn = document.getElementById("btn");

/* when this event happens--V, V--- make this function run */
//btn.addEventListener("click", myfunc);
/*btn.addEventListener("click", func(){  another way of writing
}

^ ---- add all the other event listeners 
                                                "*" we will be using most of the time
images/files - *load */







//document.addEventListener("DOMContentLoaded", function () {
//    let btn = document.querySelector("#btnSend");
//    btn.addEventListener("click", ranNumbers);
//    let btn = document.querySelector("#btnBack");
//    btn.addEventListener("click", ranNumber2)
//
//});
//
//function ranNumbers(ev) {
//    ev.preventDefault();
//    console.log("button clicked");
//
//    let req = new Request("https://griffis.edumedia.ca/mad9014/lotto/nums.php");
//    let digits = document.getElementById("#digits");
//    let max = document.getElementById("#max");
//
//    let myData = new FormData();
//    myData.append("digits", "digits");
//    myData.append("max", "max");
//
//    let opts = {
//        method: 'post',
//        mode: 'cors',
//        body: myData
//    };
//    fetch(req, opts)
//        .then(function (response) {
//            console.log("response from server ", response.status);
//            return response.json();
//        })
//}
//.then(function (data)) {
//            data.nums.forEach(function (item, index) {
//            let num = document.createElement("li");
//            num.className = "num_list";
//            num.innerHTML = item;
//            document.querySelector('.num_list').appendChild(num);
//            });
//            .catch(function (err) {
//                console.log("ERROR: ", err.message);
//            });
//
//        }
//      
//function refresh() {
//  document.querySelector('.num_list').innerHTML = "";
//  document.getElementById('list').classList.toggle('active');
//  document.getElementById('home').classList.toggle('active');
//}
