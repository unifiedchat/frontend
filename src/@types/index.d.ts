export {}

declare global {
    interface IAuth {
        username: string;
        password: string;
        email?: string;
    }

    interface IResponseData {
        message: string | any[];
    }

    interface IResponse {
        data: IResponseData;
    }

    interface IRResponseError {
        statusCode: number;
        message: string;
        response: IResponse;
    }
}