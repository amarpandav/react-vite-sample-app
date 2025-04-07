import {forwardRef, useImperativeHandle, useRef} from 'react';
import {createPortal} from 'react-dom';
import Cart from './Cart';
import {ProductDto} from "../models/ProductDto.ts";
import {EntityId} from "../../models/base/EntityId.ts";
import classes from "./CartModal.module.css";

interface Props {
    cartItems: ProductDto[];
    title: string;
    actions: React.ReactNode;
    onUpdateCartItemQuantityCallback: (productId: EntityId<string>, quantity: number) => void;
}

// Define what the parent will be able to call via ref
export interface CartModalHandle {
    open: () => void;
}

const CartModal = forwardRef<CartModalHandle, Props>(function Modal(
    {cartItems, title, actions, onUpdateCartItemQuantityCallback}: Props,
    ref
) {
    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current?.showModal();
            },
        };
    });

    return createPortal(
        <dialog id="modal" ref={dialog} className={classes.modal}>
            <h2>{title}</h2>
            <Cart items={cartItems} onUpdateItemQuantityCallback={onUpdateCartItemQuantityCallback}/>
            <form method="dialog" id="modal-actions" >
                {actions}
            </form>
        </dialog>,
        document.getElementById('modal') as HTMLDivElement
    );
});

export default CartModal;
