/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type BookingInput = {
  /**
   * Identifier of the booked trip
   */
  tripId?: string | undefined;
  /**
   * Name of the passenger
   */
  passengerName?: string | undefined;
  /**
   * Indicates whether the passenger has a bicycle.
   */
  hasBicycle?: boolean | undefined;
  /**
   * Indicates whether the passenger has a dog.
   */
  hasDog?: boolean | undefined;
};

/** @internal */
export const BookingInput$inboundSchema: z.ZodType<
  BookingInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  trip_id: z.string().optional(),
  passenger_name: z.string().optional(),
  has_bicycle: z.boolean().optional(),
  has_dog: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "trip_id": "tripId",
    "passenger_name": "passengerName",
    "has_bicycle": "hasBicycle",
    "has_dog": "hasDog",
  });
});

/** @internal */
export type BookingInput$Outbound = {
  trip_id?: string | undefined;
  passenger_name?: string | undefined;
  has_bicycle?: boolean | undefined;
  has_dog?: boolean | undefined;
};

/** @internal */
export const BookingInput$outboundSchema: z.ZodType<
  BookingInput$Outbound,
  z.ZodTypeDef,
  BookingInput
> = z.object({
  tripId: z.string().optional(),
  passengerName: z.string().optional(),
  hasBicycle: z.boolean().optional(),
  hasDog: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    tripId: "trip_id",
    passengerName: "passenger_name",
    hasBicycle: "has_bicycle",
    hasDog: "has_dog",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BookingInput$ {
  /** @deprecated use `BookingInput$inboundSchema` instead. */
  export const inboundSchema = BookingInput$inboundSchema;
  /** @deprecated use `BookingInput$outboundSchema` instead. */
  export const outboundSchema = BookingInput$outboundSchema;
  /** @deprecated use `BookingInput$Outbound` instead. */
  export type Outbound = BookingInput$Outbound;
}

export function bookingInputToJSON(bookingInput: BookingInput): string {
  return JSON.stringify(BookingInput$outboundSchema.parse(bookingInput));
}

export function bookingInputFromJSON(
  jsonString: string,
): SafeParseResult<BookingInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BookingInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BookingInput' from JSON`,
  );
}