let Dal = require("../../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/FromFolderOnly");

exports.GetFuncs = async ({ DataPK }) => {
    return await Dal.GetFuncs({ DataPK });
};

exports.PostFuncs = async ({ DataPK,  ItemName, voucher, BodyAsJson }) => {
    return await Dal.PostFuncs({  DataPK,  ItemName, voucher, BodyAsJson })
};

exports.Update = async ({ DataPK,  ItemName, voucher, BodyAsJson }) => {
    return await Dal.Update({  DataPK,  ItemName, voucher, BodyAsJson })
};
