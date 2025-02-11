let Repos = require("../../../../../../../../../../Repository/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/ItemNameConsider");

let GetFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFromRepo = await Repos.GetFuncs({
        DataPK: LocalDataPk
    });
    res.json(LocalFromRepo)
};

let PatchFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalReportName = req.body.ReportName;
    let jVarLocalVoucherPk = req.body.VoucherPk;
    let localFolderName = req.body.BodyAsJson.FolderName;
    let localFileName = req.body.BodyAsJson.FileName;
    let localItemName = req.body.BodyAsJson.ItemName;
    let localItemNameConsider = req.body.BodyAsJson.ItemNameConsider;

    let LocalFromRepo = await Repos.Update({
        inDataPK: LocalDataPk,
        inVoucherPk: jVarLocalVoucherPk,
        inReportName: jVarLocalReportName,
        inFolderName: localFolderName,
        inFileName: localFileName,
        inItemName: localItemName,
        inItemNameConsider: localItemNameConsider
    });

    if (LocalFromRepo.KTF) {
        res.sendStatus(200);
    } else {
        res.sendStatus(204);
    };
};

let PostFuncs = async (req, res) => {
    let LocalDataPk = req.KeshavSoft.DataPk;

    let jVarLocalReportName = req.body.ReportName;
    let jVarLocalVoucherPk = req.body.VoucherPk;
    let localFolderName = req.body.BodyAsJson.FolderName;
    let localFileName = req.body.BodyAsJson.FileName;
    let localItemName = req.body.BodyAsJson.ItemName;
    let localItemNameConsider = req.body.BodyAsJson.ItemNameConsider;

    let LocalFromRepo = await Repos.PostFuncs({
        inDataPK: LocalDataPk,
        inVoucherPk: jVarLocalVoucherPk,
        inReportName: jVarLocalReportName,
        inFolderName: localFolderName,
        inFileName: localFileName,
        inItemName: localItemName,
        inItemNameConsider: localItemNameConsider

    });
    res.end(JSON.stringify(LocalFromRepo));
};


module.exports = { GetFuncs, PatchFuncs, PostFuncs };