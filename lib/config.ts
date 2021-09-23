import {DeliveryClient, TypeResolver } from "@kentico/kontent-delivery";
import { Homepage } from '../models/homepage';

export const deliveryClient = new DeliveryClient({
  // Tip: Use your own sample project ID instead of the Sample Project ID
  projectId: "3b4e3f40-edce-017e-8b28-93376249bc93",
  previewApiKey: 'ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjgwZDgwMmMwMmMwMDRmNjRiZDQ5MTFjYzJkMTIyMTY0IiwNCiAgImlhdCI6ICIxNjMyNDI4MTM0IiwNCiAgImV4cCI6ICIxOTc4MDI4MTM0IiwNCiAgInByb2plY3RfaWQiOiAiM2I0ZTNmNDBlZGNlMDE3ZThiMjg5MzM3NjI0OWJjOTMiLA0KICAidmVyIjogIjEuMC4wIiwNCiAgImF1ZCI6ICJwcmV2aWV3LmRlbGl2ZXIua2VudGljb2Nsb3VkLmNvbSINCn0.qQoAlZYKulFfPHe4bID4M0qsrOb23EeACruGhHhz43U',
  globalQueryConfig: {
    usePreviewMode: true, // Queries the Delivery Preview API.
  },
  typeResolvers: [
    new TypeResolver('Homepage', (rawData) => new Homepage)
  ]
});