import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ErrorCodeEnum {
  Ok = "OK",
  Cancelled = "CANCELLED",
  Unknown = "UNKNOWN",
  InvalidArgument = "INVALID_ARGUMENT",
  DeadlineExceeded = "DEADLINE_EXCEEDED",
  NotFound = "NOT_FOUND",
  AlreadyExists = "ALREADY_EXISTS",
  PermissionDenied = "PERMISSION_DENIED",
  ResourceExhausted = "RESOURCE_EXHAUSTED",
  FailedPrecondition = "FAILED_PRECONDITION",
  Aborted = "ABORTED",
  OutOfRange = "OUT_OF_RANGE",
  Unimplemented = "UNIMPLEMENTED",
  Internal = "INTERNAL",
  Unavailable = "UNAVAILABLE",
  DataLoss = "DATA_LOSS",
  Unauthenticated = "UNAUTHENTICATED",
  Conflict = "CONFLICT",
  BadGateway = "BAD_GATEWAY",
  MethodNotAllowed = "METHOD_NOT_ALLOWED",
}

// ErrorT
/**
 * The Error type defines a logical error model
 **/
export class ErrorT extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: ErrorCodeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}
