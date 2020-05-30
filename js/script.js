
function calculateInsurance(){
        let yourName = document.getElementById("name").value;
        let yourAge = parseInt(document.getElementById("age").value);
        let yourCar = document.getElementById("cars").value;
        let yourHp = parseInt(document.getElementById("hp").value);


        if (document.getElementById('cars').value == "austria") {
          var total = Math.round(yourHp * 100 / yourAge + 50);
        }
        
        
        if (document.getElementById('cars').value == "hungary") {
          var total = Math.round(yourHp * 120 / yourAge + 100);
        }
        
        
        if (document.getElementById('cars').value == "greece") {
          var total = Math.round(yourHp * 150 / (yourAge + 3) + 50);
        }


        document.getElementById("showresult").innerHTML = "Dear <strong>" + yourName + "</strong> your Insurance will come to a total of <strong>" + total + " €</strong>.<br>";

}
