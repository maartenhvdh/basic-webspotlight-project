import {DeliveryClient, TypeResolver } from "@kentico/kontent-delivery";
import { Homepage } from '../models/homepage';

export const deliveryClient = new DeliveryClient({
  // Tip: Use your own sample project ID instead of the Sample Project ID
  projectId: "7fe16acf-6a3e-0106-78c6-677b67f73847",
  previewApiKey: 'ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogImJjZjk1MzllYjQxNjQ5M2Q5MzUyMzY0MDU4Yzk2OGMyIiwNCiAgImlhdCI6ICIxNjI0NDM3OTgyIiwNCiAgImV4cCI6ICIxOTcwMDM3OTgyIiwNCiAgInByb2plY3RfaWQiOiAiN2ZlMTZhY2Y2YTNlMDEwNjc4YzY2NzdiNjdmNzM4NDciLA0KICAidmVyIjogIjEuMC4wIiwNCiAgImF1ZCI6ICJwcmV2aWV3LmRlbGl2ZXIua2VudGljb2Nsb3VkLmNvbSINCn0.twhtdWDF5l4Rm5AH9b9hce-HqasHO5zLyrWCQMYSOg4',
  globalQueryConfig: {
    usePreviewMode: true, // Queries the Delivery Preview API.
  },
  typeResolvers: [
    new TypeResolver('Homepage', (rawData) => new Homepage)
  ]
});