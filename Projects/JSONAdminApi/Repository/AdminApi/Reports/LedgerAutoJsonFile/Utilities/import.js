let dal = require("../../../../../Dal/AdminApi/Reports/LedgerAutoJsonFile/Utilities/import");

exports.PostFunc = ({DataPK,ToName,ReportConfigObject  }) => {   
    dal.PostFunc({ DataPK,ToName,ReportConfigObject });
};