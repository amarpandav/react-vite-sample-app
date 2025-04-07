import { DUMMY_PRODUCTS } from '../../testData/elegantContextProductsTestdata.ts';
import classes from "./Shop.module.css";
import {ProductDto} from "../models/ProductDto.ts";
import {EntityId} from "../../models/base/EntityId.ts";
import Product from "./Product.tsx";

interface Props {
    onAddToCartCallback: (entityId: EntityId<string>) => void;
}

export default function Shop({ onAddToCartCallback }: Props) {
  return (
    <section id="shop" className={classes.shop}>
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products" className={classes.products}>
        {DUMMY_PRODUCTS.map((product: ProductDto) => (
          <li key={product.entityId.uuid}>
            <Product productDto={product} onAddToCartCallback={onAddToCartCallback} />
          </li>
        ))}
      </ul>
    </section>
  );
}
