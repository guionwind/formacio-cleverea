/* export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }
} */

// This is equivalent to the declaration above
export class Ingredient {
    constructor(public name: string, public amount: number) {
    }
}