class Human {
    vaga:number;
    rost:number;
    constructor(vec:number, zrost:number) {
    this.vaga = vec;
    this.rost = zrost;
    }
}
class deputat extends Human {
    firstname:string;
    lastname:string;
    age:number;
    habarnik:boolean;
    suma:number;
    constructor(vec:number, zrost:number, firstname:string, lastname:string,
                age:number, habarnik:boolean, suma:number) {
        super(vec, zrost);
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.habarnik = habarnik;
        this.suma = suma;
    }
giveHabar() {
        return(this.habarnik === false ? 'NOT' : 'YeS');
}
}
let tkach = new deputat(150,170,'roman','tkach',50,true,100000)
let habar = tkach.giveHabar()
console.log(habar);


class frakcia {
    vaga:number;
    rost:number;
    constructor(vec:number, zrost:number) {
        this.vaga = vec;
        this.rost = zrost;
    }
}