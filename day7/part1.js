const utils = require("../utils");

function calculateFolderSystemSum(filesystem){
  filesystem.entries((folder, folderInfo) => {
    folderInfo.subfolders;
  })
}

function calculateFolderSums(data){
  const folders = new Map();
  const visitedFolders = ['/'];
  let currentFolder = '/'
  data.forEach(cmd => {
    console.log(cmd.match(/^\d+/));

      // switching folders
      if(cmd.includes('$ cd ')){
        const dir = cmd.split(' ');
        console.log('visit folder', dir[2]);
        if(dir[2] === '..'){
          currentFolder = visitedFolders.pop();
        } else {
          currentFolder=dir[2];
          visitedFolders.push(currentFolder);
        }
      }
      // folder content files
      else if(cmd.match(/^\d+/)){
        console.log('line with file', cmd);
          const file = cmd.split(' ');
          const fileSize = parseInt(file[0],10);
         if(folders.has(currentFolder)){
           const folder = folders.get(currentFolder);
           folder.fileSize +=fileSize;
         } else {
          const folder = {fileSize: fileSize, subfolders: []}
          folders.set(currentFolder, folder);
         }
      }
      // folder contains folder 
      else if (cmd.match(/^dir/)){
        const subfolder = cmd.split(' ');
        console.log(subfolder[1]);
          if(folders.has(currentFolder)){
           const folder = folders.get(currentFolder);
            folder.subfolders.push(subfolder[1]);
          }
           else {
            const folder = {fileSize:0, subfolders: [subfolder[1]]};
            folders.set(currentFolder, folder);
           }
      }
  }); 
  console.log(folders);
  console.log(visitedFolders);
}

try {
  let data = utils.readInput('./example.txt');
  // let data = utils.readInput('./input.txt');
  data = utils.modDataNewlineStr(data);
  calculateFolderSums(data);
} catch (e) {
  console.log("Error", e.stack);
}
