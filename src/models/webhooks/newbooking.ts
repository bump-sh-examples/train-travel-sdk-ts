/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Links = {
  self?: string | undefined;
  next?: string | undefined;
  prev?: string | undefined;
};

export type NewBookingRequestBody = {
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
  links?: Links | undefined;
};

/** @internal */
export const Links$inboundSchema: z.ZodType<Links, z.ZodTypeDef, unknown> = z
  .object({
    self: z.string().optional(),
    next: z.string().optional(),
    prev: z.string().optional(),
  });

/** @internal */
export type Links$Outbound = {
  self?: string | undefined;
  next?: string | undefined;
  prev?: string | undefined;
};

/** @internal */
export const Links$outboundSchema: z.ZodType<
  Links$Outbound,
  z.ZodTypeDef,
  Links
> = z.object({
  self: z.string().optional(),
  next: z.string().optional(),
  prev: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Links$ {
  /** @deprecated use `Links$inboundSchema` instead. */
  export const inboundSchema = Links$inboundSchema;
  /** @deprecated use `Links$outboundSchema` instead. */
  export const outboundSchema = Links$outboundSchema;
  /** @deprecated use `Links$Outbound` instead. */
  export type Outbound = Links$Outbound;
}

export function linksToJSON(links: Links): string {
  return JSON.stringify(Links$outboundSchema.parse(links));
}

export function linksFromJSON(
  jsonString: string,
): SafeParseResult<Links, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Links$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Links' from JSON`,
  );
}

/** @internal */
export const NewBookingRequestBody$inboundSchema: z.ZodType<
  NewBookingRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  trip_id: z.string().optional(),
  passenger_name: z.string().optional(),
  has_bicycle: z.boolean().optional(),
  has_dog: z.boolean().optional(),
  links: z.lazy(() => Links$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "trip_id": "tripId",
    "passenger_name": "passengerName",
    "has_bicycle": "hasBicycle",
    "has_dog": "hasDog",
  });
});

/** @internal */
export type NewBookingRequestBody$Outbound = {
  trip_id?: string | undefined;
  passenger_name?: string | undefined;
  has_bicycle?: boolean | undefined;
  has_dog?: boolean | undefined;
  links?: Links$Outbound | undefined;
};

/** @internal */
export const NewBookingRequestBody$outboundSchema: z.ZodType<
  NewBookingRequestBody$Outbound,
  z.ZodTypeDef,
  NewBookingRequestBody
> = z.object({
  tripId: z.string().optional(),
  passengerName: z.string().optional(),
  hasBicycle: z.boolean().optional(),
  hasDog: z.boolean().optional(),
  links: z.lazy(() => Links$outboundSchema).optional(),
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
export namespace NewBookingRequestBody$ {
  /** @deprecated use `NewBookingRequestBody$inboundSchema` instead. */
  export const inboundSchema = NewBookingRequestBody$inboundSchema;
  /** @deprecated use `NewBookingRequestBody$outboundSchema` instead. */
  export const outboundSchema = NewBookingRequestBody$outboundSchema;
  /** @deprecated use `NewBookingRequestBody$Outbound` instead. */
  export type Outbound = NewBookingRequestBody$Outbound;
}

export function newBookingRequestBodyToJSON(
  newBookingRequestBody: NewBookingRequestBody,
): string {
  return JSON.stringify(
    NewBookingRequestBody$outboundSchema.parse(newBookingRequestBody),
  );
}

export function newBookingRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<NewBookingRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NewBookingRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NewBookingRequestBody' from JSON`,
  );
}