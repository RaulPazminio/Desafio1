var fraseCruda=document.querySelector("#textoEscribir");
var frase=document.querySelector("#textoCopiar");
var btnE=document.querySelector("#botonEncriptar");
var btnD=document.querySelector("#botonDesencriptar");
var btnC=document.querySelector("#botonCopiar"); 
var advertencia=document.querySelector(".cajaExclamacion");
var muñeco=document.querySelector(".muñeco");
var msgVacio=document.querySelector(".muñecoTexto");
//var textoNoEncontrado=document.querySelector(".cajaAdvertencia label");
var palabra="";
var copia="";
function convertirPalabra(vector){
	var palabraE="";
	//alert(vector);
	for(let i=0;i<vector.length;i++){
		palabraE=palabraE+vector[i];
	}
	//alert(palabra);
	return palabraE;
	//frase.value=palabraE;
}
function textoVacio(texto){
	if(texto!=""){
		btnC.style.display="block";
		muñeco.style.display="none";
		msgVacio.style.display="none";
		frase.style.fontSize="24px";
		/*frase.style.top="72";/*
		frase.style.font-size="24px";*/
//		textoNoEncontrado.style.display="none";
	}
	if(texto==""){
		var anchoPantalla=window.innerWidth;

		btnC.style.display="none";
		if(anchoPantalla<768){
			muñeco.style.display="none";
		}
		else{
			muñeco.style.display="block";
		}
		msgVacio.style.display="";
		frase.style.fontSize="";
//		textoNoEncontrado.style.display="block";
	}
}
function encriptar(){
	palabra=fraseCruda.value;
	var textoEncriptado=[];
	//alert(validar(palabra));
	textoVacio(palabra);
	if(validar(palabra)){
		advertencia.style.backgroundColor="transparent";
		for(let i=0;i<palabra.length;i++){
			switch(palabra[i]){
				case "a":
					textoEncriptado.push("ai");
					break;
				case "e":
					textoEncriptado.push("enter");
					break;
				case "i":
					textoEncriptado.push("imes");
					break;
				case "o":
					textoEncriptado.push("ober");
					break;
				case "u":
					textoEncriptado.push("ufat");
					break;
				default:
					textoEncriptado.push(palabra[i]);
			}
		}
		frase.value=convertirPalabra(textoEncriptado);
		fraseCruda.value="";
	}
	else{
		alert("Sin Mayusculas, sin acentos");
		advertencia.style.backgroundColor="pink";
		fraseCruda.value="";
		frase.value="";
	}
}
function desencriptar(){	
	palabra=fraseCruda.value;
	textoVacio(palabra);
	if(validar(palabra)){
		var sinU=convertirPalabra(modificaU(palabra));
		var sinO=convertirPalabra(modificaO(sinU));
		var sinI=convertirPalabra(modificaI(sinO));
		var sinE=convertirPalabra(modificaE(sinI));
		var sinA=convertirPalabra(modificaA(sinE));
		frase.value=sinA;
		fraseCruda.value="";
	}
	else{
		alert("Sin Mayusculas, sin acentos");
		advertencia.style.backgroundColor="pink";
		fraseCruda.value="";
		frase.value="";
	}
}
function modificaU(letra){
	var cont=0;
	//var letra=palabra.value;	
	var textoCorregido=[];
	for(let i=0;i<letra.length;i++){
		//alert(i+": "+"se cumplio la condicion "+cont);
		if(letra[i]=="u" && cont==0){
			cont=1;
			//alert("entro una u");
			if(i==letra.length-1){
				textoCorregido.push("u");
			}
		}
		else if(letra[i]=="f" && cont==1){
			cont=2;
			//alert("entro una f y antes una u");
			if(i==letra.length-1){
				textoCorregido.push("u");
				textoCorregido.push("f");
			}
		}
		else if(letra[i]=="a" && cont==2){
			cont=3;
			//alert("entro una a y antes una uf");
			if(i==letra.length-1){
				textoCorregido.push("u");
				textoCorregido.push("f");
				textoCorregido.push("a");
			}
		}
		else if(letra[i]=="t" && cont==3){
			textoCorregido.push("u");
			//alert("entro ufat y guardo una u")
			cont=0;
		}
		else if(letra[i]!="u" && cont==0){
			textoCorregido.push(letra[i]);
			cont=0;
		}
		else if(letra[i]!="f" && cont==1){
			textoCorregido.push("u");
			textoCorregido.push(letra[i]);
			cont=0;
		}
		else if(letra[i]!="a" && cont==2){
			textoCorregido.push("u");
			textoCorregido.push("f");
			textoCorregido.push(letra[i]);
			cont=0;
		}
		else if(letra[i]!="t" && cont==3){
			textoCorregido.push("u");
			textoCorregido.push("f");
			textoCorregido.push("a");
			textoCorregido.push(letra[i]);
			cont=0;
		}
	}
	//alert("El texto corregido es "+textoCorregido);

	return(textoCorregido);
}
function modificaO(letra){
	var cont=0;
//	var letra=palabra.value;
	var textoCorregido=[];
	for(let i=0;i<letra.length;i++){
//		alert(i+": "+"se cumplio la condicion "+cont);
		if(letra[i]=="o" && cont==0){
			cont=1;
//			alert("entro una o");
			if(i==letra.length-1){
				textoCorregido.push("o");
			}
		}
		else if(letra[i]=="b" && cont==1){
			cont=2;
//			alert("entro una b y antes una o");
			if(i==letra.length-1){
				textoCorregido.push("o");
				textoCorregido.push("b");
			}
		}
		else if(letra[i]=="o" && cont==1){
			textoCorregido.push("o");
//			alert("entro una o y antes una o se guardo o");
			cont=1;
		}
		else if(letra[i]=="e" && cont==2){
			cont=3;
//			alert("entro una e y antes una ob");
			if(i==letra.length-1){
				textoCorregido.push("o");
				textoCorregido.push("b");
				textoCorregido.push("e");
			}
		}
		else if(letra[i]=="r" && cont==3){
			textoCorregido.push("o");
//			alert("entro ober y guardo una o")
			cont=0;
		}
		else if(letra[i]!="o" && cont==0){
			textoCorregido.push(letra[i]);
			cont=0;
		}
		else if(letra[i]!="b" && cont==1){
			textoCorregido.push("o");
			textoCorregido.push(letra[i]);
			cont=0;
		}
		else if(letra[i]!="e" && cont==2){
			textoCorregido.push("o");
			textoCorregido.push("b");
			textoCorregido.push(letra[i]);
			cont=0;
		}
		else if(letra[i]!="r" && cont==3){
			textoCorregido.push("o");
			textoCorregido.push("b");
			textoCorregido.push("e");
			textoCorregido.push(letra[i]);
			cont=0;
		}
	}
//	alert("El texto corregido es "+textoCorregido);

	return(textoCorregido);
}//oobober
function modificaI(letra){	
	var cont=0;
	//var letra=palabra.value;
	var textoCorregido=[];
	for(let i=0;i<letra.length;i++){
	//	alert(i+": "+"se cumplio la condicion "+cont);
		if(letra[i]=="i" && cont==0){
			cont=1;
	//		alert("entro una i");
			if(i==letra.length-1){
				textoCorregido.push("i");
			}
		}
		else if(letra[i]=="m" && cont==1){
			cont=2;
	//		alert("entro una m y antes una i");
			if(i==letra.length-1){
				textoCorregido.push("i");
				textoCorregido.push("m");
			}
		}
		else if(letra[i]=="e" && cont==2){
			cont=3;
	//		alert("entro una e y antes una im")
			if(i==letra.length-1){
				textoCorregido.push("i");
				textoCorregido.push("m");
				textoCorregido.push("e");
			}
		}
		else if(letra[i]=="s" && cont==3){
			textoCorregido.push("i");
	//		alert("entro imes y guardo una i")
			cont=0;
		}
		else if(letra[i]!="i" && cont==0){
			textoCorregido.push(letra[i]);
			cont=0;
	//		alert("entro una letra cualquiera, no hay una formacion")
		}
		else if(letra[i]!="m" && letra[i]!="i" && cont==1){
			textoCorregido.push("i");
			textoCorregido.push(letra[i]);
			cont=0;
	//		alert("entro una letra cualquiera, hay una formacion de i ")
		}
		else if(letra[i]=="i" && cont==1){
			textoCorregido.push("i");
			cont=1;
	//		alert("entro una i despues de una i guardo una i");
			if(i==letra.length-1){
				textoCorregido.push("i");
			}
		}
		else if(letra[i]!="e" && cont==2){
			textoCorregido.push("i");
			textoCorregido.push("m");
			textoCorregido.push(letra[i]);
			cont=0;
	//		alert("entro una letra cualquiera, hay una formacion de im ")
		}
		else if(letra[i]!="s" && cont==3){
			textoCorregido.push("i");
			textoCorregido.push("m");
			textoCorregido.push("e");
			textoCorregido.push(letra[i]);
			cont=0;
	//		alert("entro una letra cualquiera, hay una formacion de ime ")
		}
	}
	//alert("El texto corregido es "+textoCorregido);

	return(textoCorregido);
}//esta perfecto sin correcciones
function modificaE(letra){
	var cont=0;
	//var letra=palabra.value; //palabra es el input
	var textoCorregido=[];
	for(let i=0;i<letra.length;i++){
	//	alert(i+": "+"se cumplio la condicion "+cont);
		if(letra[i]=="e" && cont==0){
			cont=1;
//			alert("entro una e");
			if(i==letra.length-1){
				textoCorregido.push("e");
			}
		}
		else if(letra[i]=="n" && cont==1){
			cont=2;
	//		alert("entro una n y antes una e");
			if(i==letra.length-1){
				textoCorregido.push("e");
				textoCorregido.push("n");
			}
		}
		else if(letra[i]=="e" && cont==1){
			cont=1;
			textoCorregido.push("e");
		}
		else if(letra[i]=="t" && cont==2){
			cont=3;
//			alert("entro una t y antes una en")
			if(i==letra.length-1){
				textoCorregido.push("e");
				textoCorregido.push("n");
				textoCorregido.push("t");
			}
		}
		else if(letra[i]=="e" && cont==3){
			cont=4;
//			alert("entro e y antes una ent")
			if(i==letra.length-1){
				textoCorregido.push("e");
				textoCorregido.push("n");
				textoCorregido.push("t");
				textoCorregido.push("e");
			}
		}
		else if(letra[i]=="r" && cont==4){
			textoCorregido.push("e");
//			alert("entro enter y guarda una e")
			cont=0;
		}
		else if(letra[i]!="e" && cont==0){
			textoCorregido.push(letra[i]);
			cont=0;
		}
		else if(letra[i]!="n" && cont==1){
			textoCorregido.push("e");
			textoCorregido.push(letra[i]);
			cont=0;
		}
		else if(letra[i]!="t" && cont==2){
			textoCorregido.push("e");
			textoCorregido.push("n");
			textoCorregido.push(letra[i]);
			cont=0;
		}
		else if(letra[i]!="e" && cont==3){
			textoCorregido.push("e");
			textoCorregido.push("n");
			textoCorregido.push("t");
			textoCorregido.push(letra[i]);
			cont=0;
		}
		else if(letra[i]!="r" && cont==4){
			textoCorregido.push("e");
			textoCorregido.push("n");
			textoCorregido.push("t");
			textoCorregido.push("e");
			textoCorregido.push(letra[i]);
			cont=0;
		}
	}
	//alert("El texto corregido es "+textoCorregido);

	return(textoCorregido);
}
function modificaA(letra){
	var cont=false;
	//var letra=palabra.value;
	var textoCorregido=[];
	for(let i=0;i<letra.length;i++){
	//	alert(i+": "+cont);
		if(letra[i]=="a" && cont==false){
			cont=true;
	//		alert("entro una a");
			if(i==letra.length-1){
				textoCorregido.push("a");
			}
		}
		else if(letra[i]=="i" && cont==true){
			textoCorregido.push("a");
	//		alert("entro una ai, guardo una a");
			cont=false;
		}
		else if(((letra[i]!="a"&&letra[i]!="i")||(letra[i]=="i" ))&& cont==false){
			textoCorregido.push(letra[i]);
	//			alert("entro una letra");
			cont=false;
		}
		else if(((letra[i]!="a"&&letra[i]!="i")||(letra[i]=="a"))&& cont==true){
			textoCorregido.push("a");
			textoCorregido.push(letra[i]);
	//		alert("entro una letra y antes una a");
			cont=false;
		}
	}
	//	alert("El texto corregido es "+textoCorregido);
	return(textoCorregido);
}//esta perfecto sin correcciones
function copiar(){
	frase.select();
	copia=document.execCommand("copy");
}
function validar(palabra){
	//palabra=fraseCruda.value;
	var habilitado=true;
	for(let i=0;i<palabra.length;i++){
	if((palabra[i]>="A" && palabra[i]<="Z")||(palabra[i]>=160 && palabra[i]<=163)||(palabra[i]=="Ñ")||(palabra[i]=="é")||(palabra[i]=="Á")||(palabra[i]=="É")||(palabra[i]=="Í")||(palabra[i]=="Ó")||(palabra[i]=="Ú")){			//alert("entró una letra prohibida: "+palabra[i]);
			habilitado=false;
		}
	}
	/*if(deshabilitado){
		alert("Habilitado");
	}
	else{
		alert("Sin Mayusculas, sin acentos");
		fraseCruda.value="";
	}*/
	return habilitado;
}
btnC.onclick=copiar;
btnE.onclick=encriptar ;//validar
btnD.onclick=desencriptar;
//btnE.onclick=(frase.value=(function() {convertirPalabra(encriptar()); }));
//btnD.onclick=(frase.value=(function() { convertirPalabra(desencriptar()); }));