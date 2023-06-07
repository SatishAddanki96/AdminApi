
exports.PostFunc = (req, res, next) => {
    if (("DataPk" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "DataPk not found in Request" })
        return;
    };
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                FolderName: "",
                FileName: "",
                ItemName: "",
                ScreenName: "",
                ColumnName: ""
            },
        });
        return;
    };
    if (("FolderName" in req.body) === false) {
        res.json({ KTF: false, KReason: "FolderName not found in body" })
        return;
    };
    if (("FileName" in req.body) === false) {
        res.json({ KTF: false, KReason: "FileName not found in body" })
        return;
    };
    if (("ItemName" in req.body) === false) {
        res.json({ KTF: false, KReason: "ItemName not found in body" })
        return;
    };
    if (("ScreenName" in req.body) === false) {
        res.json({ KTF: false, KReason: "ScreenName not found in body" })
        return;
    };
    if (("NewColumnName" in req.body) === false) {
        res.json({ KTF: false, KReason: "NewColumnName not found in body" })
        return;
    };

    next();
};