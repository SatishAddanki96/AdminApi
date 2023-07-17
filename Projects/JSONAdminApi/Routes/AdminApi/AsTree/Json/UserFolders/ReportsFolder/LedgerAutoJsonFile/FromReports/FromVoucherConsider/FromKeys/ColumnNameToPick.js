var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/ColumnNameToPick.Controllers");

router.get('/', CommonControllers.GetFuncs);
router.patch('/', CommonControllers.PatchFuncs);
router.post('/', CommonControllers.PostFunc);

module.exports = router;