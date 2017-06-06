interface IUrlListModel {
    accountId: string;
    urls: [ {
        urlId: number;
        shortUrl: string;
        longUrl: string;
        expirationDate: string;
        isRemoved: boolean;
    }];
}
export default IUrlListModel;
