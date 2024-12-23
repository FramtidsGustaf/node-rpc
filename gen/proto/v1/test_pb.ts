// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file proto/v1/test.proto (package proto.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto/v1/test.proto.
 */
export const file_proto_v1_test: GenFile = /*@__PURE__*/
  fileDesc("ChNwcm90by92MS90ZXN0LnByb3RvEghwcm90by52MSIiCg9HZXRUZXN0UmVzcG9uc2USDwoHbWVzc2FnZRgBIAEoCSIcCg5HZXRUZXN0UmVxdWVzdBIKCgJpZBgBIAEoCSIlChJVcGRhdGVUZXN0UmVzcG9uc2USDwoHbWVzc2FnZRgBIAEoCSItChFVcGRhdGVUZXN0UmVxdWVzdBIKCgJpZBgBIAEoCRIMCgRuYW1lGAIgASgJMpYBCgtUZXN0U2VydmljZRI+CgdHZXRUZXN0EhgucHJvdG8udjEuR2V0VGVzdFJlcXVlc3QaGS5wcm90by52MS5HZXRUZXN0UmVzcG9uc2USRwoKVXBkYXRlVGVzdBIbLnByb3RvLnYxLlVwZGF0ZVRlc3RSZXF1ZXN0GhwucHJvdG8udjEuVXBkYXRlVGVzdFJlc3BvbnNlYgZwcm90bzM");

/**
 * @generated from message proto.v1.GetTestResponse
 */
export type GetTestResponse = Message<"proto.v1.GetTestResponse"> & {
  /**
   * @generated from field: string message = 1;
   */
  message: string;
};

/**
 * Describes the message proto.v1.GetTestResponse.
 * Use `create(GetTestResponseSchema)` to create a new message.
 */
export const GetTestResponseSchema: GenMessage<GetTestResponse> = /*@__PURE__*/
  messageDesc(file_proto_v1_test, 0);

/**
 * @generated from message proto.v1.GetTestRequest
 */
export type GetTestRequest = Message<"proto.v1.GetTestRequest"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;
};

/**
 * Describes the message proto.v1.GetTestRequest.
 * Use `create(GetTestRequestSchema)` to create a new message.
 */
export const GetTestRequestSchema: GenMessage<GetTestRequest> = /*@__PURE__*/
  messageDesc(file_proto_v1_test, 1);

/**
 * @generated from message proto.v1.UpdateTestResponse
 */
export type UpdateTestResponse = Message<"proto.v1.UpdateTestResponse"> & {
  /**
   * @generated from field: string message = 1;
   */
  message: string;
};

/**
 * Describes the message proto.v1.UpdateTestResponse.
 * Use `create(UpdateTestResponseSchema)` to create a new message.
 */
export const UpdateTestResponseSchema: GenMessage<UpdateTestResponse> = /*@__PURE__*/
  messageDesc(file_proto_v1_test, 2);

/**
 * @generated from message proto.v1.UpdateTestRequest
 */
export type UpdateTestRequest = Message<"proto.v1.UpdateTestRequest"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;
};

/**
 * Describes the message proto.v1.UpdateTestRequest.
 * Use `create(UpdateTestRequestSchema)` to create a new message.
 */
export const UpdateTestRequestSchema: GenMessage<UpdateTestRequest> = /*@__PURE__*/
  messageDesc(file_proto_v1_test, 3);

/**
 * @generated from service proto.v1.TestService
 */
export const TestService: GenService<{
  /**
   * @generated from rpc proto.v1.TestService.GetTest
   */
  getTest: {
    methodKind: "unary";
    input: typeof GetTestRequestSchema;
    output: typeof GetTestResponseSchema;
  },
  /**
   * @generated from rpc proto.v1.TestService.UpdateTest
   */
  updateTest: {
    methodKind: "unary";
    input: typeof UpdateTestRequestSchema;
    output: typeof UpdateTestResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_proto_v1_test, 0);

