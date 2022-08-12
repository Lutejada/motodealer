import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid} from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  remove(id: string) {
    this.brands = this.brands.filter( brand => brand.id !== id);
    
  }

  private brands : Brand[] = 
  [ {
  id: uuid(),
  name: 'toyota',
  createAt: new Date().getTime(),
    } ]

  create(createBrandDto: CreateBrandDto) {
    const { name } = CreateBrandDto;

    const brand:Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      createAt: new Date().getTime(),
    }

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if(!brand){
      throw new NotFoundException( `This action returns a #${id} brand`)
    }

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {

    let brandDb = this.findOne(id);

    this.brands = this.brands.map( brand => {
        if(brand.id === id){
            brandDb.updateAt = new Date().getTime();
            brandDb = 
            {
            ...brandDb,
            ...updateBrandDto,
            }
            return brandDb;
        }
            return brand;
    
  }
 
}
};