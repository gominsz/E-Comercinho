import { ProductType } from './product-types.entity';

type ProductProps = {
  id: string;
  name: string;
  price: number;
  type: ProductType;
  maker: string;
};

export class Product {
  id: string;
  name: string;
  price: number;
  type: ProductType;
  maker: string;

  constructor(props: ProductProps) {
    this.name = props.name;
    this.price = props.price;
    this.type = props.type;
    this.maker = props.maker;
  }
}
