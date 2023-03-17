/**
 * A function that copies a Google Apps Script file to a specified Google Drive folder.
 */
function copyScriptFileToFolder() {
  // Set the ID of the script file and the ID of the target folder.
  var scriptID = "15Id-8numulSXJoroufd2MbdrRsTOGO2Tk-1mdnSZvRQuMamky2zKlpuN";
  var targetFolderID = "1ClKSuzejXPkGKD1iUSPDaIzSGsRpsird";
  
  // Get the script file using its ID and export its content as JSON.
  var file = Drive.Files.get(scriptID);
  var url = file.exportLinks["application/vnd.google-apps.script+json"];
  var options = {
    headers: {
      Authorization: "Bearer " + ScriptApp.getOAuthToken()
    }
  };
  var response = UrlFetchApp.fetch(url, options);
  
  // Parse the JSON response to get an array of file objects.
  var files = JSON.parse(response).files;
  
  // Get the target folder using its ID.
  var folder = DriveApp.getFolderById(targetFolderID);
  
  // Iterate over each file object and create a new file in the target folder.
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var fileType = file.type;
    var fileName = file.name;
    var fileSource = file.source;
    
    // Change the file type from "server_js" to "gs".
    if (fileType == "server_js") {
      fileType = "gs";
    }
    
    // Create a new file in the target folder with the file name and content.
    folder.createFile(fileName + "." + fileType, fileSource);
  }
}
