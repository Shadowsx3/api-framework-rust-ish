/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface JsResponse {
  data: any
  status: number
  headers: Record<string, string>
  responseTime: bigint
}
export interface BookingModel {
  id?: number
  firstname: string
  lastname: string
  totalprice: number
  depositpaid: boolean
  bookingdates: BookingDates
  additionalneeds: string
}
export interface BookingDates {
  checkin: string
  checkout: string
}
export declare class BookingService {
  constructor()
  getBooking(id: string): Promise<JsResponse>
  addBooking(booking: BookingModel): Promise<JsResponse>
}
