import { IAddress } from './Address';
import { IAdvancedOptions } from './AdvancedOptions';
import { IDimensions } from './Dimensions';
import { IInsuranceOptions } from './InsuranceOptions';
import { IWeight } from './Weight';
import { IInternationalOptions } from './InternationalOptions';
import { IOrderItem } from './Order';

export interface IShipment {
  shipmentId: number
  orderId: number
  orderKey: string
  userId: string
  customerEmail: string
  orderNumber: string
  createDate: string
  shipDate: string
  shipmentCost: number
  insuranceCost: number
  trackingNumber: string
  isReturnLabel: boolean
  batchNumber: string | null
  carrierCode: string
  serviceCode: string
  packageCode: string
  confirmation: string
  warehouseId: number
  voided: boolean
  voidDate: string | null
  marketplaceNotified: boolean
  notifyErrorMessage: string | null
  shipTo: IAddress
  weight: IWeight
  dimensions: IDimensions | null
  insuranceOptions: IInsuranceOptions[]
  advancedOptions: IAdvancedOptions[]
  shipmentItems: IOrderItem[] | null
  labelData: any | null
  formData: any | null
};

export interface IShipmentLabel {
  carrierCode: string;
  serviceCode: string;
  packageCode: string;
  confirmation?: string;
  shipDate: string;
  weight: IWeight;
  dimensions?: IDimensions;
  shipFrom: IAddress;
  shipTo: IAddress;
  insuranceOptions?: IInsuranceOptions;
  internationalOptions?: IInternationalOptions;
  advancedOptions?: IAdvancedOptions;
  testLabel?: boolean;

};

export interface IVoidShipment {
  shipmentId: number;
};

export interface IVoidShipmentStatus {
  approved: boolean;
  message: string;
};

