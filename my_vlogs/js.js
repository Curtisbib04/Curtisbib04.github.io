function click(e){
	if (e.target.value == 1) {
		// alert("Светлая тема выбрана!");
		document.getElementById('navBar').className = "navbar navbar-light bg-light";


		document.getElementById('this').className = "baclGroundLight colorDark";
		document.getElementById('id_H2_1').className = "baclGroundLight colorDark";
		document.getElementById('id_H2_2').className = "baclGroundLight colorDark";
		document.getElementById('id_H2_3').className = "baclGroundLight colorDark";

		document.getElementById('id_Div_1').className = "baclGroundLight colorDark";
		document.getElementById('id_Div_2').className = "baclGroundLight colorDark";
		document.getElementById('id_Div_3').className = "baclGroundLight colorDark";

	}else if(e.target.value == 2) {
		// alert("Темная тема выбрана!");
		document.getElementById('navBar').className = "navbar navbar-dark bg-dark";

		document.getElementById('this').className = "baclGroundDark colorLight";
		document.getElementById('id_H2_1').className = "baclGroundDark colorLight";
		document.getElementById('id_H2_2').className = "baclGroundDark colorLight";
		document.getElementById('id_H2_3').className = "baclGroundDark colorLight";

		document.getElementById('id_Div_1').className = "baclGroundDark colorLight";
		document.getElementById('id_Div_2').className = "baclGroundDark colorLight";
		document.getElementById('id_Div_3').className = "baclGroundDark colorLight";
	}
    
    var enabled = e.target.value;
}

for (var i = 0; i < myForm.enabled.length; i++) {
    myForm.enabled[i].addEventListener("click", click);
}
