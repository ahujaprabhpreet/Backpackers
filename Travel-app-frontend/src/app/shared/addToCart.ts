export class Travel {
    id:string;
    name: string;
    description: string;
    price:number;
    quantity:number;
    image:string;
}

export const travels: Travel[] = [
    {
        id:"1234",
        name: "Paris",
        description: "Eiffel Tower",
        price:1200,
        quantity:0,
        image:"../images/example.jpg",
    }
];
