class Persona {
    public _name: string;
    public _dob: Date;

    constructor(name: string, dob: Date) {
        this._name = name;
        this._dob = dob;
    }

    set name(name: string) {
        this._name = name;
    }

    set dob(dob: Date) {
        this._dob = dob;
    }

    getInfo(): string {
        const dobString = this._dob.toLocaleDateString(); 
        return `Nombre: ${this._name}, Fecha de Nacimiento: ${dobString}`;
    }
}


const fechaNacimiento = new Date(1990, 5, 15); 
const persona = new Persona("Juan", fechaNacimiento);


persona.name = "Pedro";
persona.dob = new Date(1995, 3, 10); 

const info = persona.getInfo();
console.log(info);
