// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';
// console.log(typeof patientId);
// console.log(typeof isEnrolled);
// console.log(typeof patientInfo);
// console.log(typeof patientEmail);


// calculo perímetro
// const base = 6;
// const height = 8;
// const area = base * height;
// console.log("base: " + base);
// console.log("height: " + height);
// console.log("area: " + area);

// let perimeter = 0;
// perimeter = (height * 2) + (base * 2);
// console.log("perimeter: " + perimeter);



// let currentHour = 5;
// let message = '';
// if (currentHour >= 22){
//     message = "Não deveríamos comer nada, é hora de dormir";
// } else if (currentHour >= 18 && currentHour < 22){
//     message = "Rango da noite, vamos jantar :D";
// } else if (currentHour >= 14 && currentHour < 18){
//     message = "Vamos fazer um bolo pro café da tarde?";
// } else if (currentHour >= 11 && currentHour < 14){
//     message = "Hora do almoço!!!";
// } else if (currentHour >= 4 && currentHour < 11){
//     message = "Hmmm, cheiro de café recém passado";
// }
// console.log(message);

// let weekDay = "domingo";
// if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
//     console.log("Oba, mais um dia de aprendizado na Trybe >:D");
// } else {
//     console.log("FINALMENTE, descanso merecido UwU");
// }

// condição aprovação processo seletivo
// let nota = 50;
// let statusProcesso = '';
// if (nota >= 80){
//     console.log("Parabéns, você foi aprovada(o)!");
//     statusProcesso = "aprovada";
// } else if (nota < 80 && nota >=60){
//     console.log("Você está na nossa lista de espera");
//     statusProcesso = "lista";
// } else if (nota < 60){
//     console.log("Você foi reprovada(o)");
//     statusProcesso = "reprovada";
// }

let nota = 75;
switch (nota){
    case (nota >= 80):
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case (nota < 80 && nota >=60):
        console.log("Você está na nossa lista de espera");
        break;
    case (nota < 60):
        console.log("Você foi reprovada(o)");
        break;
    default:
        console.log("não se aplica");
}
