import {ProductDto} from "../models/ProductDto.ts";
import {EntityId} from "../../models/base/EntityId.ts";
import classes from "./Product.module.css";

interface Props {
    productDto: ProductDto,
    onAddToCartCallback: (entityId: EntityId<string>) => void;
    //callback: (inputIdentifier: string, newValue: number) => void;
}

export default function Product({productDto, onAddToCartCallback}: Props) {
    return (
        <article className={classes.products}>
            <img src={productDto.image} alt={productDto.title}/>
            <div className={classes.productContent}>
                <div>
                    <h3>{productDto.title}</h3>
                    <p className={classes.productPrice}>${productDto.price}</p>
                    <p>{productDto.description}</p>
                </div>
                <p className={classes.productActions}>
                    <button onClick={() => onAddToCartCallback(productDto.entityId)}>Add to Cart</button>
                </p>
            </div>
        </article>
    );
}
