import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
    private cars: Car [] = [
        {
        id : uuid(),
        'brand' : 'toyota',
        'model' : 'corolla'
        
    },
    {
        id : uuid(),
        'brand' : 'jac',
        'model' : 's2'
        
    },
    {
        id : uuid(),
        'brand' : 'ford',
        'model' : 'raptor'
        
    },
];

findAll(){
    return this.cars
}

findoneById( id: string){
    const car = this.cars.find( car=> car.id === id)

    if (!car){
        throw new NotFoundException();
    }

    return car
}



}
