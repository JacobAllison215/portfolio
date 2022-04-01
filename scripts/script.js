/*
Student Name: Jacob Allison
File Name: script.js
Date: 04/01/2022
*/

//Hamburger function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var icon = document.getElementById("menu-icon");
	if (menu.style.display === "block") {
		menu.style.display = "none";
		icon.setAttribute("style", "transform: rotate(0deg)");
	} else {
		menu.style.display = "block";
		icon.setAttribute("style", "transform: rotate(90deg)");
	}
}


