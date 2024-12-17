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

export type GetBookingRequest = {
  /**
   * The ID of the booking to retrieve.
   */
  bookingId: string;
};

/**
 * The booking details
 */
export type GetBookingBookingsResponseBody = {
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
 * The booking details
 */
export type GetBookingResponseBody = {
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

export type GetBookingResponseResult =
  | GetBookingResponseBody
  | Uint8Array
  | string;

export type GetBookingResponse = {
  headers: { [k: string]: Array<string> };
  result: GetBookingResponseBody | Uint8Array | string;
};

/** @internal */
export const GetBookingRequest$inboundSchema: z.ZodType<
  GetBookingRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  bookingId: z.string(),
});

/** @internal */
export type GetBookingRequest$Outbound = {
  bookingId: string;
};

/** @internal */
export const GetBookingRequest$outboundSchema: z.ZodType<
  GetBookingRequest$Outbound,
  z.ZodTypeDef,
  GetBookingRequest
> = z.object({
  bookingId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBookingRequest$ {
  /** @deprecated use `GetBookingRequest$inboundSchema` instead. */
  export const inboundSchema = GetBookingRequest$inboundSchema;
  /** @deprecated use `GetBookingRequest$outboundSchema` instead. */
  export const outboundSchema = GetBookingRequest$outboundSchema;
  /** @deprecated use `GetBookingRequest$Outbound` instead. */
  export type Outbound = GetBookingRequest$Outbound;
}

export function getBookingRequestToJSON(
  getBookingRequest: GetBookingRequest,
): string {
  return JSON.stringify(
    GetBookingRequest$outboundSchema.parse(getBookingRequest),
  );
}

export function getBookingRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetBookingRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBookingRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBookingRequest' from JSON`,
  );
}

/** @internal */
export const GetBookingBookingsResponseBody$inboundSchema: z.ZodType<
  GetBookingBookingsResponseBody,
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
export type GetBookingBookingsResponseBody$Outbound = {
  id?: string | undefined;
  trip_id?: string | undefined;
  passenger_name?: string | undefined;
  has_bicycle?: boolean | undefined;
  has_dog?: boolean | undefined;
  links?: components.LinksSelf$Outbound | undefined;
};

/** @internal */
export const GetBookingBookingsResponseBody$outboundSchema: z.ZodType<
  GetBookingBookingsResponseBody$Outbound,
  z.ZodTypeDef,
  GetBookingBookingsResponseBody
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
export namespace GetBookingBookingsResponseBody$ {
  /** @deprecated use `GetBookingBookingsResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetBookingBookingsResponseBody$inboundSchema;
  /** @deprecated use `GetBookingBookingsResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetBookingBookingsResponseBody$outboundSchema;
  /** @deprecated use `GetBookingBookingsResponseBody$Outbound` instead. */
  export type Outbound = GetBookingBookingsResponseBody$Outbound;
}

export function getBookingBookingsResponseBodyToJSON(
  getBookingBookingsResponseBody: GetBookingBookingsResponseBody,
): string {
  return JSON.stringify(
    GetBookingBookingsResponseBody$outboundSchema.parse(
      getBookingBookingsResponseBody,
    ),
  );
}

export function getBookingBookingsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetBookingBookingsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBookingBookingsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBookingBookingsResponseBody' from JSON`,
  );
}

/** @internal */
export const GetBookingResponseBody$inboundSchema: z.ZodType<
  GetBookingResponseBody,
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
export type GetBookingResponseBody$Outbound = {
  id?: string | undefined;
  trip_id?: string | undefined;
  passenger_name?: string | undefined;
  has_bicycle?: boolean | undefined;
  has_dog?: boolean | undefined;
  links?: components.LinksSelf$Outbound | undefined;
};

/** @internal */
export const GetBookingResponseBody$outboundSchema: z.ZodType<
  GetBookingResponseBody$Outbound,
  z.ZodTypeDef,
  GetBookingResponseBody
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
export namespace GetBookingResponseBody$ {
  /** @deprecated use `GetBookingResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetBookingResponseBody$inboundSchema;
  /** @deprecated use `GetBookingResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetBookingResponseBody$outboundSchema;
  /** @deprecated use `GetBookingResponseBody$Outbound` instead. */
  export type Outbound = GetBookingResponseBody$Outbound;
}

export function getBookingResponseBodyToJSON(
  getBookingResponseBody: GetBookingResponseBody,
): string {
  return JSON.stringify(
    GetBookingResponseBody$outboundSchema.parse(getBookingResponseBody),
  );
}

export function getBookingResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetBookingResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBookingResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBookingResponseBody' from JSON`,
  );
}

/** @internal */
export const GetBookingResponseResult$inboundSchema: z.ZodType<
  GetBookingResponseResult,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => GetBookingResponseBody$inboundSchema),
  b64$.zodInbound,
]);

/** @internal */
export type GetBookingResponseResult$Outbound =
  | GetBookingResponseBody$Outbound
  | Uint8Array;

/** @internal */
export const GetBookingResponseResult$outboundSchema: z.ZodType<
  GetBookingResponseResult$Outbound,
  z.ZodTypeDef,
  GetBookingResponseResult
> = z.union([
  z.lazy(() => GetBookingResponseBody$outboundSchema),
  b64$.zodOutbound,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBookingResponseResult$ {
  /** @deprecated use `GetBookingResponseResult$inboundSchema` instead. */
  export const inboundSchema = GetBookingResponseResult$inboundSchema;
  /** @deprecated use `GetBookingResponseResult$outboundSchema` instead. */
  export const outboundSchema = GetBookingResponseResult$outboundSchema;
  /** @deprecated use `GetBookingResponseResult$Outbound` instead. */
  export type Outbound = GetBookingResponseResult$Outbound;
}

export function getBookingResponseResultToJSON(
  getBookingResponseResult: GetBookingResponseResult,
): string {
  return JSON.stringify(
    GetBookingResponseResult$outboundSchema.parse(getBookingResponseResult),
  );
}

export function getBookingResponseResultFromJSON(
  jsonString: string,
): SafeParseResult<GetBookingResponseResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBookingResponseResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBookingResponseResult' from JSON`,
  );
}

/** @internal */
export const GetBookingResponse$inboundSchema: z.ZodType<
  GetBookingResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.union([
    z.lazy(() => GetBookingResponseBody$inboundSchema),
    b64$.zodInbound,
  ]),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type GetBookingResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: GetBookingResponseBody$Outbound | Uint8Array;
};

/** @internal */
export const GetBookingResponse$outboundSchema: z.ZodType<
  GetBookingResponse$Outbound,
  z.ZodTypeDef,
  GetBookingResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.union([
    z.lazy(() => GetBookingResponseBody$outboundSchema),
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
export namespace GetBookingResponse$ {
  /** @deprecated use `GetBookingResponse$inboundSchema` instead. */
  export const inboundSchema = GetBookingResponse$inboundSchema;
  /** @deprecated use `GetBookingResponse$outboundSchema` instead. */
  export const outboundSchema = GetBookingResponse$outboundSchema;
  /** @deprecated use `GetBookingResponse$Outbound` instead. */
  export type Outbound = GetBookingResponse$Outbound;
}

export function getBookingResponseToJSON(
  getBookingResponse: GetBookingResponse,
): string {
  return JSON.stringify(
    GetBookingResponse$outboundSchema.parse(getBookingResponse),
  );
}

export function getBookingResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetBookingResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBookingResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBookingResponse' from JSON`,
  );
}
