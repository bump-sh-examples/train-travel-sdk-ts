/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Bookings } from "./bookings.js";
import { Stations } from "./stations.js";
import { Trips } from "./trips.js";

export class TrainTravelSDK extends ClientSDK {
  private _stations?: Stations;
  get stations(): Stations {
    return (this._stations ??= new Stations(this._options));
  }

  private _trips?: Trips;
  get trips(): Trips {
    return (this._trips ??= new Trips(this._options));
  }

  private _bookings?: Bookings;
  get bookings(): Bookings {
    return (this._bookings ??= new Bookings(this._options));
  }
}