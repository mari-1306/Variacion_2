
let tiempoTotal = 240;  
let tiempoRestante = tiempoTotal;  
let ciclo = 0;  

console.log("Iniciando planificación de la jornada laboral de " + tiempoTotal + " minutos");
console.log("-------------------------------------------------");


for (let i = 0; i <= tiempoTotal && tiempoRestante > 0; i += 50) {
    ciclo++;
    
    
    if (ciclo % 2 !== 0) {
        
        let numCicloTrabajo = Math.ceil(ciclo / 2);
        tiempoRestante -= 50;
        
        let tiempoRealTrabajo = tiempoRestante < 0 ? 50 + tiempoRestante : 50;
        
        console.log(`Ciclo ${numCicloTrabajo}: Trabajar ${tiempoRealTrabajo} minutos, Tiempo restante: ${Math.max(0, tiempoRestante)} minutos`);
    } else {
        
        let numCicloPausa = ciclo / 2;
        
        let duracionPausa = numCicloPausa <= 3 ? 10 : 20;
        tiempoRestante -= duracionPausa;
        
        let tiempoRealPausa = tiempoRestante < 0 ? duracionPausa + tiempoRestante : duracionPausa;
        
        console.log(`Ciclo ${numCicloPausa}: Pausa de ${tiempoRealPausa} minutos, Tiempo restante: ${Math.max(0, tiempoRestante)} minutos`);
        
        i += duracionPausa - 50;
    }
}

console.log("-------------------------------------------------");
console.log("Jornada laboral completada");