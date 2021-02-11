
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++)
{
	var paciente = pacientes[i];

	var tdAltura = paciente.querySelector(".info-altura");
	var altura =  tdAltura.textContent;

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;


	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = validaPeso(peso);
	var alturaValido = validaAltura(altura);



	if(!pesoValido)
	{
		pesoValido = false;
		tdImc.textContent = "Peso Invalido";
		paciente.classList.add("paciente-invalido");
	}
	if(!alturaValido)
	{
		alturaValido = false;
		tdImc.textContent = "Altura Invalido";
		paciente.classList.add("paciente-invalido");
	}
	if(pesoValido && alturaValido)
	{
		var imc = calcularImc(peso, altura);
		tdImc.textContent = imc;
	}
	console.log(imc);

}
function validaPeso(peso)
{
	if(peso >= 0 && peso < 1000)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function validaAltura(altura)
{
	if(altura >= 0 && altura <= 3)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function calcularImc(peso, altura)
{
	var imc = 0;
	imc = peso / (altura * altura);

	return imc.toFixed(2);
}
