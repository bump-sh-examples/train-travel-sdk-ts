/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { TrainTravelSDKCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

export enum GetAcceptEnum {
  applicationJson = "application/json",
  applicationXml = "application/xml",
}

/**
 * Get a booking
 *
 * @remarks
 * Returns the details of a specific booking.
 */
export async function bookingsGet(
  client: TrainTravelSDKCore,
  request: operations.GetBookingRequest,
  options?: RequestOptions & { acceptHeaderOverride?: GetAcceptEnum },
): Promise<
  Result<
    operations.GetBookingResponse,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) => operations.GetBookingRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    bookingId: encodeSimple("bookingId", payload.bookingId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/bookings/{bookingId}")(pathParams);

  const headers = new Headers({
    Accept: options?.acceptHeaderOverride
      || "application/json;q=1, application/xml;q=0",
  });

  const secConfig = await extractSecurity(client._options.oAuth2);
  const securityInput = secConfig == null ? {} : { oAuth2: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "get-booking",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.oAuth2,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "403", "404", "429", "4XX", "500", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    operations.GetBookingResponse,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.GetBookingResponse$inboundSchema, {
      hdrs: true,
      key: "Result",
    }),
    M.bytes(200, operations.GetBookingResponse$inboundSchema, {
      ctype: "application/xml",
      hdrs: true,
      key: "Result",
    }),
    M.fail([400, 401, 403, 404, 429, 500]),
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
