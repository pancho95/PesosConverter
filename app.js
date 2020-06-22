var datos;
//API
fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
      .then(res => res.json())
	  .then(data => datos = data)
	  .then(() => console.log(datos))



	  	const value = document.getElementById('MyInput');

		value.addEventListener('input', function(event){

		let converted = event.target.value;

		let dollarValue = document.getElementById('dollarId');

		dollarValue.innerHTML = converted * parseInt(datos[0].casa.venta);

		let dollarBlueValue = document.getElementById('dollarBlueId');

		dollarBlueValue.innerHTML = converted * parseInt(datos[1].casa.venta);

		let euroValue = document.getElementById('euroId');

		euroValue.innerHTML = converted * parseInt(datos[3].casa.venta);

		let euroBlueValue = document.getElementById('euroBlueId');

		euroBlueValue.innerHTML = converted * parseInt(datos[4].casa.venta);
})



	  	
//parseInt(datos[0].casa.venta)


      