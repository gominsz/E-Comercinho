import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  id: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  maker: string;
}
