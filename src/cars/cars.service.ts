import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
        'id' : 1,
        'brand' : 'toyota',
        'model' : 'corolla'
        
    },
    {
        'id' : 2,
        'brand' : 'jac',
        'model' : 's2'
        
    },
    {
        'id' : 3,
        'brand' : 'ford',
        'model' : 'raptor'
        
    },
];

findAll(){
    return this.cars
}

findoneById( id: number){
    const car = this.cars.find( car=> car.id === id)

    if (!car){
        throw new NotFoundException();
    }

    return car
}



}
