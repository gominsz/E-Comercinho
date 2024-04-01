import { CreateProductDto } from '../dto/create-product.dto';

export class ProductService {
  async create(createProductDto: CreateProductDto) {
    const product = await this.createProduct({
      name: createProductDto.name,
      price: createProductDto.price,
      type: createProductDto.type,
      maker: createProductDto.maker,
    });
    return product;
  }

  private async createProduct(productData: any) {
    // Aqui você iria implementar a lógica para criar um produto no seu sistema
    // Por enquanto, vamos apenas retornar os dados do produto para demonstração
    return productData;
  }
}
