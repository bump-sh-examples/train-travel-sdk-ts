/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Trip = {
  /**
   * Unique identifier for the trip
   */
  id?: string | undefined;
  /**
   * The starting station of the trip
   */
  origin?: string | undefined;
  /**
   * The destination station of the trip
   */
  destination?: string | undefined;
  /**
   * The date and time when the trip departs
   */
  departureTime?: Date | undefined;
  /**
   * The date and time when the trip arrives
   */
  arrivalTime?: Date | undefined;
  /**
   * The name of the operator of the trip
   */
  operator?: string | undefined;
  /**
   * The cost of the trip
   */
  price?: number | undefined;
  /**
   * Indicates whether bicycles are allowed on the trip
   */
  bicyclesAllowed?: boolean | undefined;
  /**
   * Indicates whether dogs are allowed on the trip
   */
  dogsAllowed?: boolean | undefined;
};

/** @internal */
export const Trip$inboundSchema: z.ZodType<Trip, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string().optional(),
    origin: z.string().optional(),
    destination: z.string().optional(),
    departure_time: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    arrival_time: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    operator: z.string().optional(),
    price: z.number().optional(),
    bicycles_allowed: z.boolean().optional(),
    dogs_allowed: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      "departure_time": "departureTime",
      "arrival_time": "arrivalTime",
      "bicycles_allowed": "bicyclesAllowed",
      "dogs_allowed": "dogsAllowed",
    });
  });

/** @internal */
export type Trip$Outbound = {
  id?: string | undefined;
  origin?: string | undefined;
  destination?: string | undefined;
  departure_time?: string | undefined;
  arrival_time?: string | undefined;
  operator?: string | undefined;
  price?: number | undefined;
  bicycles_allowed?: boolean | undefined;
  dogs_allowed?: boolean | undefined;
};

/** @internal */
export const Trip$outboundSchema: z.ZodType<Trip$Outbound, z.ZodTypeDef, Trip> =
  z.object({
    id: z.string().optional(),
    origin: z.string().optional(),
    destination: z.string().optional(),
    departureTime: z.date().transform(v => v.toISOString()).optional(),
    arrivalTime: z.date().transform(v => v.toISOString()).optional(),
    operator: z.string().optional(),
    price: z.number().optional(),
    bicyclesAllowed: z.boolean().optional(),
    dogsAllowed: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      departureTime: "departure_time",
      arrivalTime: "arrival_time",
      bicyclesAllowed: "bicycles_allowed",
      dogsAllowed: "dogs_allowed",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Trip$ {
  /** @deprecated use `Trip$inboundSchema` instead. */
  export const inboundSchema = Trip$inboundSchema;
  /** @deprecated use `Trip$outboundSchema` instead. */
  export const outboundSchema = Trip$outboundSchema;
  /** @deprecated use `Trip$Outbound` instead. */
  export type Outbound = Trip$Outbound;
}

export function tripToJSON(trip: Trip): string {
  return JSON.stringify(Trip$outboundSchema.parse(trip));
}

export function tripFromJSON(
  jsonString: string,
): SafeParseResult<Trip, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Trip$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Trip' from JSON`,
  );
}
