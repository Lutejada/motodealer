import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';


@Controller('cars')
export class CarsController {
    
    constructor(
        private readonly carsService:CarsService
    ){}

    @Get()
    getAllCArs(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id') id:string){
        console.log ({id})
        return this.carsService.findoneById( +id ); 
        
     }
}
