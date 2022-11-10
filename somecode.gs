function getSubFolders(parent) {
  parent = parent.getId();
  var childFolder = DriveApp.getFolderById(parent).getFolders();
  while(childFolder.hasNext()) {
    var child = childFolder.next();
    Logger.log(child.getName());
    getSubFolders(child);
  }
  return;
}

function listFolders() {
  var parentFolder = DriveApp.getFolderById("0BySAkrDl5J86X1U4bDJ1ZHNOTk0");
  var childFolders = parentFolder.getFolders();
  while(childFolders.hasNext()) {
    var child = childFolders.next();
    Logger.log(child.getName());
    getSubFolders(child);
  }
}
