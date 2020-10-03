import { IShipment, IShipmentLabel,IVoidShipment,IVoidShipmentStatus } from '../models'
import Shipstation, { RequestMethod } from '../shipstation'
import { BaseResource } from './Base'

export class Shipments extends BaseResource<IShipment> {
  constructor(protected shipstation: Shipstation) {
    super(shipstation, 'shipments')
  }

  public async getAll(opts?: object): Promise<IShipment[]> {
    const query = this.buildQueryStringFromParams(opts)
    const url = `${this.baseUrl}` + query;

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET
    })
    return response.data as IShipment[]
  }

  public async createLabel(labelObject:IShipmentLabel): Promise<IShipment> {
    const query = this.buildQueryStringFromParams({})
    const url = `${this.baseUrl}/createlabel`+ query;

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.POST,
      data: labelObject
    })
    return response.data as IShipment;
  }

  public async voidShipment(shipment: IVoidShipment): Promise<IVoidShipmentStatus> {
    const query = this.buildQueryStringFromParams({})
    const url = `${this.baseUrl}/voidlabel`+ query;

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.POST,
      data: shipment
    })
    return response.data as IVoidShipmentStatus;
  }
}
