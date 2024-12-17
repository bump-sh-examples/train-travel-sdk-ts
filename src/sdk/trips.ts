/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ListAcceptEnum, tripsList } from "../funcs/tripsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export { ListAcceptEnum } from "../funcs/tripsList.js";

export class Trips extends ClientSDK {
  /**
   * Get available train trips
   *
   * @remarks
   * Returns a list of available train trips between the specified origin and destination stations on the given date, and allows for filtering by bicycle and dog allowances.
   */
  async list(
    request: operations.GetTripsRequest,
    options?: RequestOptions & { acceptHeaderOverride?: ListAcceptEnum },
  ): Promise<operations.GetTripsResponse> {
    return unwrapAsync(tripsList(
      this,
      request,
      options,
    ));
  }
}