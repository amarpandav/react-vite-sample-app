import {ProductDto} from "../models/ProductDto.ts";
import {EntityId} from "../../models/base/EntityId.ts";
import classes from "./Cart.module.css";

interface Props {
    items: ProductDto[];
    onUpdateItemQuantityCallback: (productId: EntityId<string>, quantity: number) => void;
}

export default function Cart({items, onUpdateItemQuantityCallback}: Props) {
    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

    return (
        <div id="cart">
            {items.length === 0 && <p>No items in cart!</p>}
            {items.length > 0 && (
                <ul id="cart-items" className={classes.cartItems}>
                    {items.map((item) => {
                        const formattedPrice = `$${item.price.toFixed(2)}`;

                        return (
                            <li key={item.entityId.uuid}>
                                <div>
                                    <span>{item.title}</span>
                                    <span> ({formattedPrice})</span>
                                </div>
                                <div  className={classes.cartItemActions}>
                                    <button onClick={() => onUpdateItemQuantityCallback(item.entityId, -1)}>
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => onUpdateItemQuantityCallback(item.entityId, 1)}>
                                        +
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
            <p id="cart-total-price">
                Cart Total: <strong>{formattedTotalPrice}</strong>
            </p>
        </div>
    );
}
