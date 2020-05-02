
var characters = [
	"ramon-humanidade",
	"rafael-humanidade",
	"anthony-humanidade",
	"bacteria-humanidade",
	"ramon-besta",
	"rafael-besta",
	"anthony-besta",
	"bacteria-besta",
];

$("#char_form").submit( function(event){

	var value = $("#char_select").val(),
		name = value.toLowerCase(),
		isValid = characters.includes(name),
		currentUrl =  window.location.href,
		lastIndex = currentUrl.lastIndexOf("/"),
		path = currentUrl.substring(0, lastIndex),
		newUrl = path + "/epilogue/" + name + ".html";

	event.preventDefault();

	if ( isValid )  {
		window.location.assign(newUrl);
	} else {
		alert("Nome inválido")
		return false
	}
})