function copyCode(element) {
	// var temp_textarea_element = document.createElement("TEXTAREA");
	var $temp = $("<textarea>");
	
	// document.body.appendChild(temp_textarea_element);
	$("body").append($temp);
	
	// var copyText = document.getElementById("beginningHTML").textContent;
	// temp_textarea_element.value = copyText.select();
	$temp.val($(element).text()).select();
	
	document.execCommand("copy");
	
	//temp_textarea_element.remove();
	$temp.remove();
}

