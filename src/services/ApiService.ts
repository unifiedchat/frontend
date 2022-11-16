import Http from './HttpService';

export const createConnectionForYoutube = async (code: string) => {
    return await Http.Post('/connection/youtube', {code});
}