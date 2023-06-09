var express = require('express');
var router = express.Router();
let CommonScreensFromDisplayJson = require("./UserFolders/ScreensFromDisplayJson");
let CommonReportsFolder = require("./UserFolders/ReportsFolder");
let CommonConfigFolder = require("./UserFolders/ConfigFolder");
let CommonDataFolder = require("./UserFolders/DataFolder");
let CommonConfigAndDataFolders = require("./UserFolders/ConfigAndDataFolders");
let CommonAdminFolder = require("./UserFolders/AdminFolder");


router.use('/ScreensFromDisplayJson', CommonScreensFromDisplayJson);
router.use('/ReportsFolder', CommonReportsFolder);
router.use('/ConfigFolder', CommonConfigFolder);
router.use('/DataFolder', CommonDataFolder);
router.use('/ConfigAndDataFolders', CommonConfigAndDataFolders);
router.use('/AdminFolder', CommonAdminFolder);

module.exports = router;