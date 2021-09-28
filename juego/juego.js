class jugador{
    vida = 100;
     pomada = 100;
    rayos = 20;
    nombre = "";
    revivir = 100;
    


    constructor(nombre){
        this.nombre = nombre;
    }
/**instanciamos  */
curar(jugadorObjetivo){

    if(vida<10){
        console.log('hay que curarte')   
            
        }
    
    jugadorObjetivo.vida +=20;
    this.pomada -=10;//para this para posicionarce 
    //mandar a traer los dos jugadores los estatus de cada uno en metodo 
}


revivir(jugadorObjetivo){
    if (this.vida < 100){
        console.log('nesesitas revivirt');
    }else{
        if (this.vida >= 100){

        }else{
            console.log('estas muy vivo ');
        }
        this.status(jugadorObjetivo);//imprimimos el status
    }
    }

atacar(jugadorObjetivo){
    jugadorObjetivo.vida = 20;
    this.rayos -=40;
    this.status(jugadorObjetivo);//imprimimos el status

}
    

status(jugadorObjetivo){
    console.log(jugadorObjetivo);
    console.log(this);
    this.status(jugadorObjetivo);// ya te nemos el metodo para ver el status de cada avilidad 
}
}
let superman = new jugador('superman');
let batman = new jugador ('batnman');
console.log('superman');
console.log('batman')