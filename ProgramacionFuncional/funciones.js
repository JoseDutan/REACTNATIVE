/*ejecutarSumar = function(){
    let valor1 = recuperarTexto("txtValor1");
    let valor2 = recuperarTexto("txtValor2");
    console.log("VALOR 1 >>>>>>>>"+valor1+"VALOR 2>>>>>>>"+valor2);
}*/

//ARROW FUNCTIONS
ejecutarSumar = () =>{
     /*let valor1 = recuperarEntero("txtValor1");
    let valor2 = recuperarEntero("txtValor2");
    let resultadoSuma;
    console.log("VALOR 1 >>>>>>>>"+valor1+"VALOR 2>>>>>>>"+valor2);
    resultadoSuma = sumar(valor1, valor2);
    console.log(resultadoSuma);*/
    ejecutarOperacion(sumar);
}

sumar =(sum1, sum2)=>{
    let resultado = sum1+sum2;
    return resultado;
}

ejecutarRestar = () =>{
    let valor1 = recuperarFloat("txtValor1");
    let valor2 = recuperarFloat("txtValor2");
    console.log("VALOR 1 >>>>>>>>"+valor1+"VALOR 2>>>>>>>"+valor2);
    let resultadoResta;
    resultadoResta = restar(valor1,valor2);
    console.log(resultadoResta);
}

restar = (res1, res2) =>{
    let resultado = res1-res2;
    return resultado;
}

ejecutarOperacion=(operar)=>{
    let valor1 = recuperarEntero("txtValor1");
    let valor2 = recuperarEntero("txtValor2");
    let resulatado = operar(valor1,valor2);
    console.log(resulatado);
}

ejecutar = (fn) => {
    console.log("Estiy ejecutando funciones")
    fn();
}

imprimir = () => {
    console.log("Estoy Imprimiendo");
}

saludar = () => {
    alert("APRENDIEDNO PROGRAMACION FUNCIONAL");
}
testEjecutar = () => {
    ejecutar(imprimir);
    ejecutar(saludar);
    ejecutar(() => {
        alert("Soy una Funcion sin Nombre");
    });
}