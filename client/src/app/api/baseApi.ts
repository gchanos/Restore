import { BaseQueryApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layout/uiSlice";

const customBaseQuery = fetchBaseQuery({
    baseUrl: 'https://localhost:5001/api'
})

const sleep = () => new Promise(resolve => setTimeout(resolve, 1000))

export const baseQueryWithErrHandling = async (
    args: string | FetchArgs, 
    api: BaseQueryApi, 
    extraOptions: object
) => {
    api.dispatch(startLoading())
    // Start loading
    await sleep();
    const result = await customBaseQuery(args, api, extraOptions);

    // Stop loading (if applicable)
    api.dispatch(stopLoading())
    if (result.error) {
        const { status, data } = result.error;
        console.log({ status, data });
    }

    return result
};
