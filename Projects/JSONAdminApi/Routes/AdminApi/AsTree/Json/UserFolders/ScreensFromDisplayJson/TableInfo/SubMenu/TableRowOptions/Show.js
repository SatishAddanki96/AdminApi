var express = require('express');
var router = express.Router();
let CommonControllers = require("../../../../../../../../../Controllers/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableInfo/SubMenu/TableRowOptions/Show.Controllers");
let CommonMiddlewares = require("../../../../../../../../../Middlewares/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableInfo/SubMenu/TableRowOptions/Show");

router.get('/', CommonControllers.GetFuncs);
router.patch('/',CommonMiddlewares.PatchFuncs, CommonControllers.PatchFuncs);



module.exports = router;