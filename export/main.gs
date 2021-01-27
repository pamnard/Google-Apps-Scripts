function test() {
  var scriptID = '15Id-8numulSXJoroufd2MbdrRsTOGO2Tk-1mdnSZvRQuMamky2zKlpuN',
    targetFolderID = '1ClKSuzejXPkGKD1iUSPDaIzSGsRpsird';
  var file = Drive.Files.get(scriptID);
  var url = file.exportLinks['application/vnd.google-apps.script+json'],
    options = {
      headers: {
        Authorization: 'Bearer ' + ScriptApp.getOAuthToken()
      }
    };
  var response = UrlFetchApp.fetch(url, options);
  var files = JSON.parse(response).files;
  var folder = DriveApp.getFolderById(targetFolderID);
  for (var i = 0; i < files.length; i++) {
    var file = files[i],
      fileType = file.type,
      fileName = file.name,
      fileSource = file.source;
    if (fileType == 'server_js') {
      fileType = 'gs';
    }
    folder.createFile(fileName + '.' + fileType, fileSource);
  }
}