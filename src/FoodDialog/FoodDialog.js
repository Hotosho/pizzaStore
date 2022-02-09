import React from "react";
import styled from "styled-components";
import {FoodLabel} from "../Menu/FoodGrid";
import {pizzaRed} from "../Styles/Colors";
import {Title} from "../Styles/Title";
import {formatPrice} from "../Data/FoodData";
import {QuantityInput} from "./QuantityInput";
import {useQuantity} from "../Hooks/useQuantity";


const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({img}) => `background-image: url(${img});`}
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px;

`

export function getPrice(order) {
    return order.quantity * order.price;

}

export const ConfirmButton = styled(Title)`
  magrin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${pizzaRed};
`

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;


export function FoodDialogContainer({openFood, setOpenFood, setOrders, orders}) {
    const quantity = useQuantity(openFood && openFood.quality);
    const isEditing = openFood.index > -1;


    function close() {
        setOpenFood();
    }

    if (!openFood) return null;

    const order = {
        ...openFood,
        quantity: quantity.value
    };

    function editOrder() {
        const newOrders = [...orders];
        newOrders[openFood.index] = order;
        setOrders(newOrders);
        close();
    }

    function addToOrder() {
        setOrders([...orders, order]);
        close();

    }

    if (!openFood) return null;
    return (
        <>
            <DialogShadow onClick={close}/>
            <Dialog>
                <DialogBanner img={openFood.img}>
                    <DialogBannerName>{openFood.name}</DialogBannerName>
                </DialogBanner>
                <DialogContent>
                    <QuantityInput quantity={quantity}/>
                </DialogContent>
                <DialogFooter>
                    <ConfirmButton onClick={isEditing ? editOrder : addToOrder}>
                        {isEditing ? `Update order: ` : `Add to order: `}
                        {formatPrice(getPrice(order))}
                    </ConfirmButton>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export function FoodDialog(props) {
    if (!props.openFood) return null;
    return <FoodDialogContainer {...props}/>
}