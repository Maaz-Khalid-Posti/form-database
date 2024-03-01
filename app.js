const firebaseConfig = {
    apiKey: "AIzaSyDG2FrlysNwKuLlWrdkSESP0pipigIfB78",
    authDomain: "form-d0525.firebaseapp.com",
    databaseURL: "https://form-d0525-default-rtdb.firebaseio.com",
    projectId: "form-d0525",
    storageBucket: "form-d0525.appspot.com",
    messagingSenderId: "543283937553",
    appId: "1:543283937553:web:806ba98405405ce6168cb0"
  };

// Initialize Firebase 
let frb = firebase.initializeApp(firebaseConfig);

// console.log(key);
function Subbtn() {
    var key = firebase.database().ref('informations').push().key;

    var city = document.getElementById("city").value;
    var course = document.getElementById("course").value;
    var name = document.getElementById("Name").value;
    var father = document.getElementById("Father").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var cnic = document.getElementById("CNIC").value;
    var fathercnic = document.getElementById("fatherCNIC").value;
    var birth = document.getElementById("Birth").value;
    var address = document.getElementById("Address").value;
    var qualification = document.getElementById("qualification").value;
    var laptop = document.getElementById("laptop").value;

    var obj = {
        key: key,
        city:city,
        course: course,
        name: name,
        father: father,
        email:email,
        phone:phone,
        cnic:cnic,
        fathercnic:fathercnic,
        birth:birth,
        address:address,
        qualification:qualification,
        laptop:laptop

    };
    firebase.database().ref('informations').child(key).set(obj)

        
}
