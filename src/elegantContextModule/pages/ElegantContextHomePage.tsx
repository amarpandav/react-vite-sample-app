import {useState} from "react";
import {DUMMY_PRODUCTS} from "../../testData/elegantContextProductsTestdata.ts";
import {EntityId} from "../../models/base/EntityId.ts";
import {ProductDto} from "../models/ProductDto.ts";
import Header from "../components/Header.tsx";
import Shop from "../components/Shop.tsx";
import classes from "./ElegantContextHomePage.module.css";

export interface ShoppingCart {
    items: ProductDto[];
}
export default function ElegantContextHomePage() {
    /*const [shoppingCart, setShoppingCart] = useState<{items: ProductDto[]}>({
        items: [] ,
    });*/
    const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({
        items: [] ,
    });

    function handleAddItemToCartCallback(productEntityId: EntityId<string>) {
        setShoppingCart((prevShoppingCart) => {
            const updatedItems = [...prevShoppingCart.items];

            const existingCartItemIndex = updatedItems.findIndex(
                (cartItem) => cartItem.entityId.uuid === productEntityId.uuid
            );
            const existingCartItem = updatedItems[existingCartItemIndex];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1,
                };
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                const product = DUMMY_PRODUCTS.find((product) => product.entityId.uuid === productEntityId.uuid);
                if (!product) {
                    throw new Error("Product not found");
                }
                updatedItems.push(new ProductDto(
                    productEntityId,
                    product.image,
                    product.title,
                    product.price,
                    1, // quantity
                    product.description
                ));
            }

            return {
                items: updatedItems,
            };
        });
    }

    function handleUpdateCartItemQuantityCallBack(productId: EntityId<string>, amount: number) {
        setShoppingCart((prevShoppingCart) => {
            const updatedItems = [...prevShoppingCart.items];
            const updatedItemIndex = updatedItems.findIndex(
                (item) => item.entityId.uuid === productId.uuid
            );

            const updatedItem = {
                ...updatedItems[updatedItemIndex],
            };

            updatedItem.quantity += amount;

            if (updatedItem.quantity <= 0) {
                updatedItems.splice(updatedItemIndex, 1);
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            }

            return {
                items: updatedItems,
            };
        });
    }

    return (
        <div className={classes.ecHomePage}>
            <Header
                cart={shoppingCart}
                onUpdateCartItemQuantityCallback={handleUpdateCartItemQuantityCallBack}
            />
            <Shop onAddToCartCallback={handleAddItemToCartCallback} />
        </div>
    );
}
