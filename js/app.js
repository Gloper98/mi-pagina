var submenu = document.getElementsByClassName('submenu');
for (var i= 0; i < submenu.length; i++) {
	submenu[i].addEventListener("mouseover", showMenu);
}

function showMenu() {
	var listMenu = this.getElementsByClassName('itemList')[0];
	if(listMenu.classList.contains("hide")) {
		listMenu.classList.remove("hide");
		listMenu.classList.add("show");
	} 
}

var itemList = document.getElementsByClassName('itemList');
for (var i=0; i < itemList.length; i++) {
	itemList[i].addEventListener("mouseout", hideMenu);
	itemList[i].addEventListener("click", hideMenu);
}

function hideMenu() {
	var shows = document.getElementById("shows");
	var music = document.getElementById("music");
	var news = document.getElementById("news");
	var movies = document.getElementById("movies");
	var politics = document.getElementById("politics");
	shows.setAttribute("class", "hide itemList");
	music.setAttribute("class", "hide itemList");
	news.setAttribute("class", "hide itemList");
	movies.setAttribute("class", "hide itemList");
	politics.setAttribute("class", "hide itemList");
}