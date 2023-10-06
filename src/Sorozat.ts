export class Sorozat
{
    cim: string;
    epizodokDb: number;
    rendezoNev: string;

    constructor(cim: string, epizodokDb: number, rendezoNev: string)
    {
        if(cim.trim() == ""){
            throw new Error("Cím nem lehet üres.");
        }else if(epizodokDb <= 0 || isNaN(epizodokDb)){
            throw new Error("Epizódok száma nem lehet kevesebb mint egy, valamint szám típusúnak kell lennie.");
        }else if(rendezoNev.trim() == ""){
            throw new Error("Rendező neve nem lehet üres.");
        }else{
            this.cim = cim;
            this.epizodokDb = epizodokDb;
            this.rendezoNev = rendezoNev;
        }
    }

    /*constructor(public title: string, public epizodokDb:number, public rendezoNev: string)
    {

    }*/

    toString() : string
    {
        return `${this.cim};${this.epizodokDb};${this.rendezoNev}`
    }
}