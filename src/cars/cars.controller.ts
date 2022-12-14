import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './interfaces/car.interface';



@Controller('cars')
@UsePipes( ValidationPipe )
export class CarsController {
    cars: Car[];
    
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
        return this.carsService.create(createCarDto);
        
    } 

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id:string,
        @Body() updateCarDto:UpdateCarDto)
    {
        return this.carsService.update(id, updateCarDto);
    } 

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe) id:string){
        return this.carsService.delete(id);
        
    } 

    fillCarsWithSeedData( cars: Car[] ) {
        this.cars = cars;
    }



}
