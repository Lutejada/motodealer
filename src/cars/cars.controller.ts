import { Controller, Get } from '@nestjs/common';


@Controller('cars')
export class CarsController {

    @Get()
    getAllCArs(){
        return ['toyota','jac'];
    }
}
