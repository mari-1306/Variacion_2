let tiempoTotal = 120;
let tiempoRestante = tiempoTotal;
let ciclo = 0;


for (let tiempo = 0; tiempo < tiempoTotal; tiempo += 25) {
    ciclo++;
    if (ciclo % 2 === 1) {
        // Trabajo
        tiempoRestante -= 25;
        console.log(`Ciclo ${Math.ceil(ciclo/2)}: Trabajar 25 minutos, Tiempo restante: ${tiempoRestante} minutos`);
    } else {
        // Descanso
        let descanso = ciclo <= 6 ? 5 : 15;
        tiempoRestante -= descanso;
        console.log(`Ciclo ${ciclo/2}: Descansar ${descanso} minutos, Tiempo restante: ${tiempoRestante} minutos`);
    }
}
// Salida:
// Ciclo 1: Trabajar 25 minutos, Tiempo restante: 95 minutos
// Ciclo 1: Descansar 5 minutos, Tiempo restante: 90 minutos
// Ciclo 2: Trabajar 25 minutos, Tiempo restante: 65 minutos
// Ciclo 2: Descansar 5 minutos, Tiempo restante: 60 minutos
// Ciclo 3: Trabajar 25 minutos, Tiempo restante: 35 minutos
// Ciclo 3: Descansar 5 minutos, Tiempo restante: 30 minutos
// Ciclo 4: Trabajar 25 minutos, Tiempo restante: 5 minutos
// Ciclo 4: Descansar 15 minutos, Tiempo restante: -10 minutos
