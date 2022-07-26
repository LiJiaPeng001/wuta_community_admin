import { SearchPayload, RecordItem, CheckParams, AutoLikeParams, ResolveRecord, RejectRecord, FindRecord } from "#/api/work/index";
import { RequestRecord } from "#/api/index";
import request from "~/utils/request/index";

enum Api {
  list = "/api/works/list",
  detail = "/api/works/detail",
  edit = "/api/works/save",
  check = "/api/works/list_check",
  autolike = "/api/works/auto_like",
  stopautolike = "/api/works/stop_auto_like",
  resolve = "/api/works/alone_check",
  reject = "/api/works/review_fail",
  award = "/api/works/award",
  find = "/api/works/restore_images",
  cameraTag = "/api/works/set_work_camera_tag",
  choiceness = "/api/works/compile_choiceness",
  moveTopic = "/api/works/migrate_dynamic",
}

export function list(data: SearchPayload): Promise<RequestRecord<RecordItem>> {
  return request({
    url: Api.list,
    method: "post",
    data,
  });
}
export function detail(data: { id: number }): Promise<RecordItem> {
  return request({
    url: Api.detail,
    method: "post",
    data,
  });
}
export function edit(data: RecordItem): Promise<void> {
  return request({
    url: Api.edit,
    method: "post",
    data,
  });
}
export function check(data: CheckParams): Promise<void> {
  return request({
    url: Api.check,
    method: "post",
    data,
  });
}
export function autolike(data: AutoLikeParams): Promise<void> {
  return request({
    url: Api.autolike,
    method: "post",
    data,
  });
}
export function stopautolike(data: { id: number }): Promise<void> {
  return request({
    url: Api.stopautolike,
    method: "post",
    data,
  });
}
export function resolve(data: ResolveRecord): Promise<void> {
  return request({
    url: Api.resolve,
    method: "post",
    data,
  });
}
export function reject(data: RejectRecord): Promise<void> {
  return request({
    url: Api.reject,
    method: "post",
    data,
  });
}
export function award(data: RecordItem): Promise<void> {
  return request({
    url: Api.award,
    method: "post",
    data,
  });
}
export function find(data: FindRecord): Promise<void> {
  return request({
    url: Api.find,
    method: "post",
    data,
  });
}
export function cameraTag(data: RecordItem): Promise<void> {
  return request({
    url: Api.cameraTag,
    method: "post",
    data,
  });
}
export function choiceness(data: RecordItem): Promise<void> {
  return request({
    url: Api.choiceness,
    method: "post",
    data,
  });
}
export function moveTopic(data: RecordItem): Promise<void> {
  return request({
    url: Api.moveTopic,
    method: "post",
    data,
  });
}
