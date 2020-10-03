export declare enum RequestMethod {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE"
}
export interface IShipstationRequestOptions {
    url: string;
    method: RequestMethod;
    useBaseUrl?: boolean;
    data?: any;
}
export default class Shipstation {
    authorizationToken: string;
    private baseUrl;
    constructor(key?: string | undefined, secret?: string | undefined);
    request: ({ url, method, useBaseUrl, data }: IShipstationRequestOptions) => Promise<import("axios").AxiosResponse<any>>;
}
