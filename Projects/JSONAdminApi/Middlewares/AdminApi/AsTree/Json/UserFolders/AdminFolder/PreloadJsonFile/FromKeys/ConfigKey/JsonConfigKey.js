
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
                  KeyName:"",
                  BodyAsJson:{
                    
                  }      
            },
        });
        return;
    };
    
    if (("NewFolderName" in req.body) === false) {
        res.json({ KTF: false, KReason: "NewFolderName not found in body" })
        return;
    };   
    next();
};

exports.DeleteFunc = (req, res, next) => {
    if (("DataPk" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "DataPk not found in Request" })
        return;
    };

    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                DeleteFolderName: ""           
            },
        });
        return;
    };
    
    if (("DeleteFolderName" in req.body) === false) {
        res.json({ KTF: false, KReason: "DeleteFolderName not found in body" })
        return;
    };   
    next();
};

