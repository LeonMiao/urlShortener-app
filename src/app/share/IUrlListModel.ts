interface IUrlListModel {
    accountId: number;
    urls: [ {
        urlId: number;
        shortUrl: string;
        longUrl: string;
        expirationDate: string;
        isRemoved: boolean;
    }];
}
export default IUrlListModel;
