import { ProductType } from '../entities/product-types.entity';
import { randomUUID } from 'crypto';

class AsyncProductTypeCreator {
  async execute(name: string, description: string): Promise<ProductType> {
    const id = randomUUID();
    const productType = new ProductType({ id, name, description });
    return productType;
  }
}

async function main() {
  const creator = new AsyncProductTypeCreator();
  const productType = await creator.execute(
    'ProdutoType Exemplo',
    'Descrição do produtoType ',
  );
  console.log('ProdutoType criado:', productType);
}

main();
