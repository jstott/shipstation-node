import { IShipment, IShipmentLabel, IVoidShipment, IVoidShipmentStatus } from '../models';
import Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Shipments extends BaseResource<IShipment> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(opts?: object): Promise<IShipment[]>;
    createLabel(labelObject: IShipmentLabel): Promise<IShipment>;
    voidShipment(shipment: IVoidShipment): Promise<IVoidShipmentStatus>;
}
