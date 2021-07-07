class Ninja{
    constructor(name, health)
    {
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;
    }

    SayName(){
        console.log(this.name)
    }
    ShowStats(){
        console.log("****************************")
        console.log(`Name of the ninja is: ${this.name}`)
        console.log(`Health of the ninja is: ${this.health}`)
        console.log(`Speed of the ninja is: ${this.speed}`)
        console.log(`Strength of the ninja is: ${this.strength}`)
        console.log("****************************")
    }
    DrinkSakee(){
        this.health+=10;
    }
}
const Wolf= new Ninja("Wolf", 100)
Wolf.SayName();
Wolf.ShowStats();
Wolf.DrinkSakee();
Wolf.ShowStats();
