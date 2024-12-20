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

export type GetStationsRequest = {
  /**
   * The page number to return
   */
  page?: number | undefined;
  /**
   * The number of items to return per page
   */
  limit?: number | undefined;
  /**
   * The latitude and longitude of the user's location, to narrow down the search results to sites within a proximity of this location.
   *
   * @remarks
   */
  coordinates?: string | undefined;
  /**
   * A search term to filter the list of stations by name or address.
   *
   * @remarks
   */
  search?: string | undefined;
  /**
   * Filter stations by country code
   */
  country?: string | undefined;
};

export type GetStationsLinks = {
  self?: string | undefined;
  next?: string | undefined;
  prev?: string | undefined;
};

/**
 * This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).
 */
export type GetStationsStationsResponseBody = {
  data?: Array<components.Station> | undefined;
  links?: GetStationsLinks | undefined;
};

export type Links = {
  self?: string | undefined;
  next?: string | undefined;
  prev?: string | undefined;
};

/**
 * This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).
 */
export type GetStationsResponseBody = {
  data?: Array<components.Station> | undefined;
  links?: Links | undefined;
};

export type GetStationsResponseResult =
  | GetStationsResponseBody
  | Uint8Array
  | string;

export type GetStationsResponse = {
  headers: { [k: string]: Array<string> };
  result: GetStationsResponseBody | Uint8Array | string;
};

/** @internal */
export const GetStationsRequest$inboundSchema: z.ZodType<
  GetStationsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
  coordinates: z.string().optional(),
  search: z.string().optional(),
  country: z.string().optional(),
});

/** @internal */
export type GetStationsRequest$Outbound = {
  page: number;
  limit: number;
  coordinates?: string | undefined;
  search?: string | undefined;
  country?: string | undefined;
};

/** @internal */
export const GetStationsRequest$outboundSchema: z.ZodType<
  GetStationsRequest$Outbound,
  z.ZodTypeDef,
  GetStationsRequest
> = z.object({
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
  coordinates: z.string().optional(),
  search: z.string().optional(),
  country: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStationsRequest$ {
  /** @deprecated use `GetStationsRequest$inboundSchema` instead. */
  export const inboundSchema = GetStationsRequest$inboundSchema;
  /** @deprecated use `GetStationsRequest$outboundSchema` instead. */
  export const outboundSchema = GetStationsRequest$outboundSchema;
  /** @deprecated use `GetStationsRequest$Outbound` instead. */
  export type Outbound = GetStationsRequest$Outbound;
}

export function getStationsRequestToJSON(
  getStationsRequest: GetStationsRequest,
): string {
  return JSON.stringify(
    GetStationsRequest$outboundSchema.parse(getStationsRequest),
  );
}

export function getStationsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetStationsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetStationsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStationsRequest' from JSON`,
  );
}

/** @internal */
export const GetStationsLinks$inboundSchema: z.ZodType<
  GetStationsLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  self: z.string().optional(),
  next: z.string().optional(),
  prev: z.string().optional(),
});

/** @internal */
export type GetStationsLinks$Outbound = {
  self?: string | undefined;
  next?: string | undefined;
  prev?: string | undefined;
};

/** @internal */
export const GetStationsLinks$outboundSchema: z.ZodType<
  GetStationsLinks$Outbound,
  z.ZodTypeDef,
  GetStationsLinks
> = z.object({
  self: z.string().optional(),
  next: z.string().optional(),
  prev: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStationsLinks$ {
  /** @deprecated use `GetStationsLinks$inboundSchema` instead. */
  export const inboundSchema = GetStationsLinks$inboundSchema;
  /** @deprecated use `GetStationsLinks$outboundSchema` instead. */
  export const outboundSchema = GetStationsLinks$outboundSchema;
  /** @deprecated use `GetStationsLinks$Outbound` instead. */
  export type Outbound = GetStationsLinks$Outbound;
}

export function getStationsLinksToJSON(
  getStationsLinks: GetStationsLinks,
): string {
  return JSON.stringify(
    GetStationsLinks$outboundSchema.parse(getStationsLinks),
  );
}

export function getStationsLinksFromJSON(
  jsonString: string,
): SafeParseResult<GetStationsLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetStationsLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStationsLinks' from JSON`,
  );
}

/** @internal */
export const GetStationsStationsResponseBody$inboundSchema: z.ZodType<
  GetStationsStationsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(components.Station$inboundSchema).optional(),
  links: z.lazy(() => GetStationsLinks$inboundSchema).optional(),
});

/** @internal */
export type GetStationsStationsResponseBody$Outbound = {
  data?: Array<components.Station$Outbound> | undefined;
  links?: GetStationsLinks$Outbound | undefined;
};

/** @internal */
export const GetStationsStationsResponseBody$outboundSchema: z.ZodType<
  GetStationsStationsResponseBody$Outbound,
  z.ZodTypeDef,
  GetStationsStationsResponseBody
> = z.object({
  data: z.array(components.Station$outboundSchema).optional(),
  links: z.lazy(() => GetStationsLinks$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStationsStationsResponseBody$ {
  /** @deprecated use `GetStationsStationsResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetStationsStationsResponseBody$inboundSchema;
  /** @deprecated use `GetStationsStationsResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetStationsStationsResponseBody$outboundSchema;
  /** @deprecated use `GetStationsStationsResponseBody$Outbound` instead. */
  export type Outbound = GetStationsStationsResponseBody$Outbound;
}

export function getStationsStationsResponseBodyToJSON(
  getStationsStationsResponseBody: GetStationsStationsResponseBody,
): string {
  return JSON.stringify(
    GetStationsStationsResponseBody$outboundSchema.parse(
      getStationsStationsResponseBody,
    ),
  );
}

export function getStationsStationsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetStationsStationsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetStationsStationsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStationsStationsResponseBody' from JSON`,
  );
}

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
export const GetStationsResponseBody$inboundSchema: z.ZodType<
  GetStationsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(components.Station$inboundSchema).optional(),
  links: z.lazy(() => Links$inboundSchema).optional(),
});

/** @internal */
export type GetStationsResponseBody$Outbound = {
  data?: Array<components.Station$Outbound> | undefined;
  links?: Links$Outbound | undefined;
};

/** @internal */
export const GetStationsResponseBody$outboundSchema: z.ZodType<
  GetStationsResponseBody$Outbound,
  z.ZodTypeDef,
  GetStationsResponseBody
> = z.object({
  data: z.array(components.Station$outboundSchema).optional(),
  links: z.lazy(() => Links$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStationsResponseBody$ {
  /** @deprecated use `GetStationsResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetStationsResponseBody$inboundSchema;
  /** @deprecated use `GetStationsResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetStationsResponseBody$outboundSchema;
  /** @deprecated use `GetStationsResponseBody$Outbound` instead. */
  export type Outbound = GetStationsResponseBody$Outbound;
}

export function getStationsResponseBodyToJSON(
  getStationsResponseBody: GetStationsResponseBody,
): string {
  return JSON.stringify(
    GetStationsResponseBody$outboundSchema.parse(getStationsResponseBody),
  );
}

export function getStationsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetStationsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetStationsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStationsResponseBody' from JSON`,
  );
}

/** @internal */
export const GetStationsResponseResult$inboundSchema: z.ZodType<
  GetStationsResponseResult,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => GetStationsResponseBody$inboundSchema),
  b64$.zodInbound,
]);

/** @internal */
export type GetStationsResponseResult$Outbound =
  | GetStationsResponseBody$Outbound
  | Uint8Array;

/** @internal */
export const GetStationsResponseResult$outboundSchema: z.ZodType<
  GetStationsResponseResult$Outbound,
  z.ZodTypeDef,
  GetStationsResponseResult
> = z.union([
  z.lazy(() => GetStationsResponseBody$outboundSchema),
  b64$.zodOutbound,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStationsResponseResult$ {
  /** @deprecated use `GetStationsResponseResult$inboundSchema` instead. */
  export const inboundSchema = GetStationsResponseResult$inboundSchema;
  /** @deprecated use `GetStationsResponseResult$outboundSchema` instead. */
  export const outboundSchema = GetStationsResponseResult$outboundSchema;
  /** @deprecated use `GetStationsResponseResult$Outbound` instead. */
  export type Outbound = GetStationsResponseResult$Outbound;
}

export function getStationsResponseResultToJSON(
  getStationsResponseResult: GetStationsResponseResult,
): string {
  return JSON.stringify(
    GetStationsResponseResult$outboundSchema.parse(getStationsResponseResult),
  );
}

export function getStationsResponseResultFromJSON(
  jsonString: string,
): SafeParseResult<GetStationsResponseResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetStationsResponseResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStationsResponseResult' from JSON`,
  );
}

/** @internal */
export const GetStationsResponse$inboundSchema: z.ZodType<
  GetStationsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: z.union([
    z.lazy(() => GetStationsResponseBody$inboundSchema),
    b64$.zodInbound,
  ]),
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type GetStationsResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: GetStationsResponseBody$Outbound | Uint8Array;
};

/** @internal */
export const GetStationsResponse$outboundSchema: z.ZodType<
  GetStationsResponse$Outbound,
  z.ZodTypeDef,
  GetStationsResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: z.union([
    z.lazy(() => GetStationsResponseBody$outboundSchema),
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
export namespace GetStationsResponse$ {
  /** @deprecated use `GetStationsResponse$inboundSchema` instead. */
  export const inboundSchema = GetStationsResponse$inboundSchema;
  /** @deprecated use `GetStationsResponse$outboundSchema` instead. */
  export const outboundSchema = GetStationsResponse$outboundSchema;
  /** @deprecated use `GetStationsResponse$Outbound` instead. */
  export type Outbound = GetStationsResponse$Outbound;
}

export function getStationsResponseToJSON(
  getStationsResponse: GetStationsResponse,
): string {
  return JSON.stringify(
    GetStationsResponse$outboundSchema.parse(getStationsResponse),
  );
}

export function getStationsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetStationsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetStationsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetStationsResponse' from JSON`,
  );
}
