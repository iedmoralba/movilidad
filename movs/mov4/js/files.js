import path from "path";
function getFileNames(folderName) {
  const files = [];

  // Abre la carpeta
  const folder = new File(path.join(folderName, "*"));

  // Itera a través de los archivos en la carpeta
  for (const file of folder.files) {
    // Agrega el nombre del archivo al array
    files.push(file.name);
  }

  // Devuelve el array de nombres de archivos
  return files;
}

const folderName = "../img/";

const files = getFileNames(folderName);

for (const file of files) {
  console.log(file);
}