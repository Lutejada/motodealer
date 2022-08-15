import { Car } from "./../../cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';


export const CARS_SEED : Car[] = [
    {
        id: uuid(),
        brand:'toyota',
        model:'Civic'

    },
    {
        id: uuid(),
        brand:'jac',
        model:'S2'

    }


]