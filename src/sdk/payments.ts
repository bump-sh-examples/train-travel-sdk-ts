/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { bookingsPaymentsCreate } from "../funcs/bookingsPaymentsCreate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Payments extends ClientSDK {
  /**
   * Pay for a Booking
   *
   * @remarks
   * A payment is an attempt to pay for the booking, which will confirm the booking for the user and enable them to get their tickets.
   */
  async create(
    request: operations.CreateBookingPaymentRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateBookingPaymentResponse> {
    return unwrapAsync(bookingsPaymentsCreate(
      this,
      request,
      options,
    ));
  }
}
