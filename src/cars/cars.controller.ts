import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';



@Controller('cars')
@UsePipes( ValidationPipe )
export class CarsController {
    
    constructor(
        private readonly carsService:CarsService
    ){}

    @Get()
    getAllCArs(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseUUIDPipe ) id:string){
        console.log ({id})
        return this.carsService.findoneById( id ); 
        
     }

    
    @Post()
    createCar( @Body() createCarDto:CreateCarDto){
        return createCarDto;
        
    } 

    @Patch(':id')
    updateCar(
        @Param('id') id:string,
        @Body() body:any)
    {
        return body;
    } 

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe) id:string){
        return {
            methodo: 'delete',
            id
        };
        
    } 



}
