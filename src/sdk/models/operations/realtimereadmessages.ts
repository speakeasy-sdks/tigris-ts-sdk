import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class RealtimeReadMessagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=channel",
  })
  channel: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;
}

export class RealtimeReadMessagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event" })
  event?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=session_id",
  })
  sessionId?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=socket_id",
  })
  socketId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: string;
}

export class RealtimeReadMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RealtimeReadMessagesPathParams;

  @SpeakeasyMetadata()
  queryParams: RealtimeReadMessagesQueryParams;
}

export class RealtimeReadMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  readMessagesResponse?: shared.ReadMessagesResponse;

  @SpeakeasyMetadata()
  status?: shared.Status;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
