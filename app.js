
/////////Selection of entity
var e = document.querySelector(".unitToConvert"); 
//var strUser = e.options[e.selectedIndex].value
// console.log(e);
  e.addEventListener("change", doConversion);
const temperatureUnits = ["Celsius", "Fahrenheit", "Kelvin"];
const lengthUnits = ["Meter", "Centimeter", "Millimeters", "Yard"];

 function doConversion(){

 	function changeUnits(unitArray){
 			var oldSel= document.querySelector("#unitSelect");
 		 oldSel.remove();
 		var select=document.createElement("select");
 		select.setAttribute("id", "unitSelect");
 		document.querySelector("#unitSelectionDiv").appendChild(select);

 		function addOption(val){
	 		var option = document.createElement(`option`);
	 		option.setAttribute("value", val);
	 		option.innerHTML= val
	 		select.appendChild(option);
	 	}

	 	unitArray.forEach(unitName => addOption(unitName))

 		}

 	var measurement = document.querySelector(".unitToConvert").value;
 	switch (measurement) {
 		case "Area": 
 		console.log("tonnes");
 		break;

 		case "Energy":
 		console.log("Joule");
 		break;

 		case "Length": 
 		 		 changeUnits(lengthUnits);
		break;

 		case "Mass":
 		console.log("Joule");
 		break;

 		case "Speed": 
 		console.log("tonnes");
 		break;

 		case "Temperature":
 		
 		 
 		 changeUnits(temperatureUnits);
 		
 		

 		break;

 		case "Time": 
 		console.log("tonnes");
 		break;

 		case "Volume":
 		console.log("Joule");
 		break;


 		default: 
 		console.log("Nothing to see");
 	}

 	// 	if (document.querySelector(".unitToConvert").value == "Area"){
		// 	console.log("tonnes");
		// }

		// else if (document.querySelector(".unitToConvert").value == "Energy"){
		// 	console.log("Energy");
		// }

		// else if (document.querySelector(".unitToConvert").value == "Length"){
		// 	console.log("Length");
		// }

		
 }
// optionValue(element);


// optionValue(option);

/////Dropdown menu: assign the right Unit to the type
// switch (option[i].value){
// 	case "area" :
// 		console.log(option[3].value);
// 		break;
// 	default:
// 		console.log("nothing to see");
// }




// ////////////////// Mass conversion
document.querySelector("input").addEventListener("input", (e)=>{
	let lbs = e.target.value;
	
	document.querySelector("#tonnes").innerHTML = lbs*0.000453592;
	document.querySelector("#kilograms").innerHTML = lbs*0.453592;
	document.querySelector("#grams").innerHTML = lbs*453.592;
	document.querySelector("#milligrams").innerHTML = lbs*453592;
	document.querySelector("#milligrams").innerHTML = lbs*453592;
	document.querySelector("#microgram").innerHTML = lbs*4.536e+8;
	document.querySelector("#imperial").innerHTML = lbs*0.000446429;
	

})

////// Just random color of the title
let changeColorHeader = document.querySelector("h1");

addEventListener("mousemove", (e)=>{
	// console.log(e.clientX);
	// console.log(e.clientY);
	changeColorHeader.style.background = `rgba(${e.clientX}, ${e.clientY}, ${e.clientY}, 0.7)`;

})

