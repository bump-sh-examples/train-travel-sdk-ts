/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as b64$ from "../../lib/base64.js";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Booking successful
 */
export type CreateBookingJsonBookingsResponseBody = {
  /**
   * Unique identifier for the booking
   */
  id?: string | undefined;
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
  links?: components.LinksSelf | undefined;
};

/**
 * Booking successful
 */
export type CreateBookingJsonResponseBody = {
  /**
   * Unique identifier for the booking
   */
  id?: string | undefined;
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
  links?: components.LinksSelf | undefined;
};

export type CreateBookingJsonResponseResult =
  | CreateBookingJsonResponseBody
  | Uint8Array
  | string;

export type CreateBookingJsonResponse = {
  headers: { [k: string]: Array<string> };
  result: CreateBookingJsonResponseBody | Uint8Array | string;
};

/** @internal */
export const CreateBookingJsonBookingsResponseBody$inboundSchema: z.ZodType<
  CreateBookingJsonBookingsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  trip_id: z.string().optional(),
  passenger_name: z.string().optional(),
  has_bicycle: z.boolean().optional(),
  has_dog: z.boolean().optional(),
  links: components.LinksSelf$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "trip_id": "tripId",
    "passenger_name": "passengerName",
    "has_bicycle": "hasBicycle",
    "has_dog": "hasDog",
  });
});

/** @internal */
export type CreateBookingJsonBookingsResponseBody$Outbound = {
  id?: string | undefined;
  trip_id?: string | undefined;
  passenger_name?: string | undefined;
  has_bicycle?: boolean | undefined;
  has_dog?: boolean | undefined;
  links?: components.LinksSelf$Outbound | undefined;
};

/** @internal */
export const CreateBookingJsonBookingsResponseBody$outboundSchema: z.ZodType<
  CreateBookingJsonBookingsResponseBody$Outbound,
  z.ZodTypeDef,
  CreateBookingJsonBookingsResponseBody
> = z.object({
  id: z.string().optional(),
  tripId: z.string().optional(),
  passengerName: z.string().optional(),
  hasBicycle: z.boolean().optional(),
  hasDog: z.boolean().optional(),
  links: components.LinksSelf$outboundSchema.optional(),
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
export namespace CreateBookingJsonBookingsResponseBody$ {
  /** @deprecated use `CreateBookingJsonBookingsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    CreateBookingJsonBookingsResponseBody$inboundSchema;
  /** @deprecated use `CreateBookingJsonBookingsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateBookingJsonBookingsResponseBody$outboundSchema;
  /** @deprecated use `CreateBookingJsonBookingsResponseBody$Outbound` instead. */
  export type Outbound = CreateBookingJsonBookingsResponseBody$Outbound;
}

export function createBookingJsonBookingsResponseBodyToJSON(
  createBookingJsonBookingsResponseBody: CreateBookingJsonBookingsResponseBody,
): string {
  return JSON.stringify(
    CreateBookingJsonBookingsResponseBody$outboundSchema.parse(
      createBookingJsonBookingsResponseBody,
    ),
  );
}

export function createBookingJsonBookingsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateBookingJsonBookingsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateBookingJsonBookingsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateBookingJsonBookingsResponseBody' from JSON`,
  );
}

/** @internal */
export const CreateBookingJsonResponseBody$inboundSchema: z.ZodType<
  CreateBookingJsonResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  trip_id: z.string().optional(),
  passenger_name: z.string().optional(),
  has_bicycle: z.boolean().optional(),
  has_dog: z.boolean().optional(),
  links: components.LinksSelf$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "trip_id": "tripId",
    "passenger_name": "passengerName",
    "has_bicycle": "hasBicycle",
    "has_dog": "hasDog",
  });
});

/** @internal */
export type CreateBookingJsonResponseBody$Outbound = {
  id?: string | undefined;
  trip_id?: string | undefined;
  passenger_name?: string | undefined;
  has_bicycle?: boolean | undefined;
  has_dog?: boolean | undefined;
  links?: components.LinksSelf$Outbound | undefined;
};

/** @internal */
export const CreateBookingJsonResponseBody$outboundSchema: z.ZodType<
  CreateBookingJsonResponseBody$Outbound,
  z.ZodTypeDef,
  CreateBookingJsonResponseBody
> = z.object({
  id: z.string().optional(),
  tripId: z.string().optional(),
  passengerName: z.string().optional(),
  hasBicycle: z.boolean().optional(),
  hasDog: z.boolean().optional(),
  links: components.LinksSelf$outboundSchema.optional(),
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
export namespace CreateBookingJsonResponseBody$ {
  /** @deprecated use `CreateBookingJsonResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateBookingJsonResponseBody$inboundSchema;
  /** @deprecated use `CreateBookingJsonResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateBookingJsonResponseBody$outboundSchema;
  /** @deprecated use `CreateBookingJsonResponseBody$Outbound` instead. */
  export type Outbound = CreateBookingJsonResponseBody$Outbound;
}

export function createBookingJsonResponseBodyToJSON(
  createBookingJsonResponseBody: CreateBookingJsonResponseBody,
): string {
  return JSON.stringify(
    CreateBookingJsonResponseBody$outboundSchema.parse(
      createBookingJsonResponseBody,
    ),
  );
}

export function createBookingJsonResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateBookingJsonResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateBookingJsonResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateBookingJsonResponseBody' from JSON`,
  );
}

/** @internal */
export const CreateBookingJsonResponseResult$inboundSchema: z.ZodType<
  CreateBookingJsonResponseResult,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => CreateBookingJsonResponseBody$inboundSchema),
  b64$.zodInbound,
]);

/** @internal */
export type CreateBookingJsonResponseResult$Outbound =
  | CreateBookingJsonResponseBody$Outbound
  | Uint8Array;

/** @internal */
export const CreateBookingJsonResponseResult$outboundSchema: z.ZodType<
  CreateBookingJsonResponseResult$Outbound,
  z.ZodTypeDef,
  CreateBookingJsonResponseResult
> = z.union([
  z.lazy(() => CreateBookingJsonResponseBody$outboundSchema),
  b64$.zodOutbound,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBookingJsonResponseResult$ {
  /** @deprecated use `CreateBookingJsonResponseResult$inboundSchema` instead. */
  export const inboundSchema = CreateBookingJsonResponseResult$inboundSchema;
  /** @deprecated use `CreateBookingJsonResponseResult$outboundSchema` instead. */
  export const outboundSchema = CreateBookingJsonResponseResult$outboundSchema;
  /** @deprecated use `CreateBookingJsonResponseResult$Outbound` instead. */
  export type Outbound = CreateBookingJsonResponseResult$Outbound;
}

export function createBookingJsonResponseResultToJSON(
  createBookingJsonResponseResult: CreateBookingJsonResponseResult,
): string {
  return JSON.stringify(
    CreateBookingJsonResponseResult$outboundSchema.parse(
      createBookingJsonResponseResult,
    ),
  );
}

export function createBookingJsonResponseResultFromJSON(
  jsonString: string,
): SafeParseResult<CreateBookingJsonResponseResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateBookingJsonResponseResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateBookingJsonResponseResult' from JSON`,
  );
}

/** @internal */
export const CreateBookingJsonResponse$inboundSchema: z.ZodType<
  CreateBookingJsonResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.union([
    z.lazy(() => CreateBookingJsonResponseBody$inboundSchema),
    b64$.zodInbound,
  ]),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type CreateBookingJsonResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: CreateBookingJsonResponseBody$Outbound | Uint8Array;
};

/** @internal */
export const CreateBookingJsonResponse$outboundSchema: z.ZodType<
  CreateBookingJsonResponse$Outbound,
  z.ZodTypeDef,
  CreateBookingJsonResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.union([
    z.lazy(() => CreateBookingJsonResponseBody$outboundSchema),
    b64$.zodOutbound,
  ]),
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBookingJsonResponse$ {
  /** @deprecated use `CreateBookingJsonResponse$inboundSchema` instead. */
  export const inboundSchema = CreateBookingJsonResponse$inboundSchema;
  /** @deprecated use `CreateBookingJsonResponse$outboundSchema` instead. */
  export const outboundSchema = CreateBookingJsonResponse$outboundSchema;
  /** @deprecated use `CreateBookingJsonResponse$Outbound` instead. */
  export type Outbound = CreateBookingJsonResponse$Outbound;
}

export function createBookingJsonResponseToJSON(
  createBookingJsonResponse: CreateBookingJsonResponse,
): string {
  return JSON.stringify(
    CreateBookingJsonResponse$outboundSchema.parse(createBookingJsonResponse),
  );
}

export function createBookingJsonResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateBookingJsonResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateBookingJsonResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateBookingJsonResponse' from JSON`,
  );
}