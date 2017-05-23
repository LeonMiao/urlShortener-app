interface IUrlModel {
    accountId: number;
    urls: [ {
        urlId: number;
        shortUrl: string;
        longUrl: string;
        expirationDate: string;
        isRemoved: boolean;
    }];
}
export default IUrlModel;
