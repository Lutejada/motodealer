import { Controller, Get, Param } from '@nestjs/common';


@Controller('cars')
export class CarsController {
    private cars = ['toyota','jac'];

    @Get()
    getAllCArs(){
        return this.cars;
    }

    @Get(':id')
    getCarById( @Param('id') id:string){
        console.log ({id})
        return this.cars[id]; 
        
    }
}
