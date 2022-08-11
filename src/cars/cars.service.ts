import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

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

create(createCarDto:CreateCarDto){

    const car: Car = {
        id:uuid(),
        ...createCarDto,
    }
    this.cars.push( car);
    return car
}

update( id: string, updateCarDto:UpdateCarDto ){

    let carDb = this.findoneById(id);

    this.cars = this.cars.map( car=> {
        if(car.id === id){
            carDb= {
            ...carDb,
            ...updateCarDto,
            id}
            return carDb
        }
            return car;
        
    });

    return carDb;

}

delete( id: string){
    const car = this.findoneById(id);
    this.cars = this.cars.filter(car => car.id !== id)
    

};

}
