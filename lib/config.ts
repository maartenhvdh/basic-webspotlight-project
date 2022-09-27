import {camelCasePropertyNameResolver, DeliveryClient } from "@kontent-ai/delivery-sdk";
import { Homepage } from '../models/homepage';

export const deliveryClient = new DeliveryClient({
  // Tip: Use your own sample project ID instead of the Sample Project ID
  projectId: "d0e757a2-f5db-01e2-4c92-6b329bdc77a9",
  previewApiKey: 'ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogImE5MDQzNmRkOGIwMjRmMDBiMWFjMGYxZGU0ZDk0NDY5IiwNCiAgImlhdCI6ICIxNjY0Mjg4MzEwIiwNCiAgImV4cCI6ICIyMDA5ODg4MzEwIiwNCiAgInZlciI6ICIxLjAuMCIsDQogICJwcm9qZWN0X2lkIjogImQwZTc1N2EyZjVkYjAxZTI0YzkyNmIzMjliZGM3N2E5IiwNCiAgImF1ZCI6ICJwcmV2aWV3LmRlbGl2ZXIua2VudGljb2Nsb3VkLmNvbSINCn0.wDfFpcAG0rNXfWtE2bca7x2QTZ-H9Ewapa72kSLPlQI',
  defaultQueryConfig: {
    usePreviewMode: true, // Queries the Delivery Preview API.,
    waitForLoadingNewContent: true
  },
  propertyNameResolver: camelCasePropertyNameResolver
});