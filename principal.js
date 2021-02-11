

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++)
{
	var paciente = pacientes[i];

	var tdAltura = paciente.querySelector(".info-altura");
	var altura =  tdAltura.textContent;

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;


	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = true;
	var alturaValido = true;


	if(peso < 0 || peso > 1000)
	{
		pesoValido = false;
		tdImc.textContent = "Peso Invalido";
		paciente.classList.add("paciente-invalido");
	}
	if(altura < 0 || altura > 3)
	{
		alturaValido = false;
		tdImc.textContent = "Altura Invalida";
		paciente.classList.add("paciente-invalido");
	}
	if(pesoValido && alturaValido)
	{
		var imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2);
	}
	console.log(imc);

}

