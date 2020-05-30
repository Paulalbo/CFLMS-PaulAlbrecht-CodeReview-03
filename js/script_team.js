function showteam (){

  var teamMembers = [
      {name:"Fran", email:"fran@index.com",image:"img/person1.jpg", personality:"crazy"},
      {name:"Bill", email:"bill@index.com",image:"img/person2.jpg", personality:"happy"},
      {name:"Fritz", email:"fritz@index.com",image:"img/person3.jpg", personality:"always tired"},
      {name:"Olivia", email:"olivia@index.com",image:"img/person4.jpg", personality:"obsessed with the devil"}
  ];


container = document.getElementById("teamcontainer");

for (var i = 0; i < teamMembers.length; i++) {
      var name = teamMembers[i].name;
      var email = teamMembers[i].email;
      var image = teamMembers[i].image;
      var personality = teamMembers[i].personality;

      let containerstart = "<div class=\"containerteam\">"
      let containerend = "</p></div>"

      container.innerHTML += containerstart + "<img src=\"" + image + "\"><br><p>" + "Name: " + name + "<br> E-mail: " + email + "<br>" + "<br> <div>" + personality +"</div>" + containerend;
}
      
}



