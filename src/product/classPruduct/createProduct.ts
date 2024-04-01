import { randomUUID } from 'crypto';
import { Product } from '../entities/product.entity';
import { ProductType } from '../entities/product-types.entity';

class AsyncProductCreator {
  async execute(
    name: string,
    price: number,
    type: ProductType,
    maker: string,
  ): Promise<Product> {
    const id = randomUUID();
    const product = new Product({ id, name, price, type, maker });
    return product;
  }
}

async function main() {
  const creator = new AsyncProductCreator();
  const product = creator.execute;
  console.log('Produto criado:', product);
}

main();
