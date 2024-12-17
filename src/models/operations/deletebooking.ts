/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteBookingRequest = {
  /**
   * The ID of the booking to retrieve.
   */
  bookingId: string;
};

export type DeleteBookingResponse = {
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const DeleteBookingRequest$inboundSchema: z.ZodType<
  DeleteBookingRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  bookingId: z.string(),
});

/** @internal */
export type DeleteBookingRequest$Outbound = {
  bookingId: string;
};

/** @internal */
export const DeleteBookingRequest$outboundSchema: z.ZodType<
  DeleteBookingRequest$Outbound,
  z.ZodTypeDef,
  DeleteBookingRequest
> = z.object({
  bookingId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteBookingRequest$ {
  /** @deprecated use `DeleteBookingRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteBookingRequest$inboundSchema;
  /** @deprecated use `DeleteBookingRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteBookingRequest$outboundSchema;
  /** @deprecated use `DeleteBookingRequest$Outbound` instead. */
  export type Outbound = DeleteBookingRequest$Outbound;
}

export function deleteBookingRequestToJSON(
  deleteBookingRequest: DeleteBookingRequest,
): string {
  return JSON.stringify(
    DeleteBookingRequest$outboundSchema.parse(deleteBookingRequest),
  );
}

export function deleteBookingRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteBookingRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteBookingRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteBookingRequest' from JSON`,
  );
}

/** @internal */
export const DeleteBookingResponse$inboundSchema: z.ZodType<
  DeleteBookingResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
  });
});

/** @internal */
export type DeleteBookingResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const DeleteBookingResponse$outboundSchema: z.ZodType<
  DeleteBookingResponse$Outbound,
  z.ZodTypeDef,
  DeleteBookingResponse
> = z.object({
  headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteBookingResponse$ {
  /** @deprecated use `DeleteBookingResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteBookingResponse$inboundSchema;
  /** @deprecated use `DeleteBookingResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteBookingResponse$outboundSchema;
  /** @deprecated use `DeleteBookingResponse$Outbound` instead. */
  export type Outbound = DeleteBookingResponse$Outbound;
}

export function deleteBookingResponseToJSON(
  deleteBookingResponse: DeleteBookingResponse,
): string {
  return JSON.stringify(
    DeleteBookingResponse$outboundSchema.parse(deleteBookingResponse),
  );
}

export function deleteBookingResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteBookingResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteBookingResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteBookingResponse' from JSON`,
  );
}