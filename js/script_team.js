function showteam (){

  var teamMembers = [
      {name:"Fran", email:"fran@index.com",image:"img/person1.jpg"},
      {name:"Bill", email:"bill@index.com",image:"img/person2.jpg"},
      {name:"Fritz", email:"fritz@index.com",image:"img/person3.jpg"},
      {name:"Olivia", email:"olivia@index.com",image:"img/person4.jpg"}
  ];


container = document.getElementById("teamcontainer");

for (var i = 0; i < teamMembers.length; i++) {
      var name = teamMembers[i].name;
      var email = teamMembers[i].email;
      var image = teamMembers[i].image;

      let containerstart = "<div class=\"containerteam\">"
      let containerend = "</p></div>"

      container.innerHTML += containerstart + "<img src=\"" + image + "\"><br><p>" + "Name: " + name + "<br> E-mail: " + email + "<br>" + containerend;
      
 }
}
