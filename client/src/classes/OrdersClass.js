import {makeAutoObservable} from "mobx";

export default class OrdersClass {
    constructor() {
        this._types = [
            {id: 1, name: "type num 1"},
            {id: 2, name: "type num 2"},
        ]
        this._orders = [
            {id: 1, name: "orders num 1", littleDisc: "littleDisc num 1", fullDisc: "fullDisc num 1", price: 100},
            {id: 2, name: "orders num 2", littleDisc: "littleDisc num 2", fullDisc: "fullDisc num 2", price: 200},
        ]
        this._selectedOrder = {}
        this._selectedType = {}
        makeAutoObservable(this)
    }
    setOrders(orders) {
        this._orders = orders;
    }
    setType(type) {
        this._types = type;
    }
    setSelectedOrder(selectedOrder) {
        this._selectedOrder = selectedOrder;
    }
    setSelectedType(type) {
        this._selectedType = type;
    }
    get selectedType() {
        return this._selectedType;
    }
    get selectedOrder() {
        return this._selectedOrder;
    }
    get orders() {
        return this._orders;
    }
    get types(){
        return this._types;
    }
}