type ProductTypeProps = {
  id: string;
  name: string;
  description: string;
};

export class ProductType {
  id: string;
  name: string;
  description: string;

  constructor(props: ProductTypeProps) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
  }
}
