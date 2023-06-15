let Dal = require("../../../../../../../../../Dal/AdminApi/AsTree/Json/UserFolders/AdminFolder/PreloadJsonFile/FromKeys/ConfigKey/DataListInfoKey");

exports.PostFunc = async ({ DataPK, inKeyName, inBodyAsJson }) => {
    let localinKeyName = inKeyName;
    let LocalBodyAsJson = inBodyAsJson;

    return await Dal.PostFunc({
        DataPK,
        inKeyName: localinKeyName,
        inBodyAsJson: LocalBodyAsJson
    });
};

exports.DeleteFunc = async ({ DataPK, inFolderName }) => {
    let LocalFolderName = inFolderName;

    return await Dal.DeleteFunc({
        DataPK, inFolderName: LocalFolderName
    });
};

exports.GetFunc = async ({ DataPK }) => {
    return await Dal.GetFunc({
        DataPK
    });
};
