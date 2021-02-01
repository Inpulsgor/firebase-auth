import { createAction } from "@reduxjs/toolkit";

export const loaderActive = createAction("loader/SET_LOADER_ACTIVE");
export const loaderDisabled = createAction("loader/SET_LOADER_DISABLED");
