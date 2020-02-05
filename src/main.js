//Function to identify markdown file:
// const pathExt = (pathName) => {
//    if (path.extname(pathName) === ".md") {
//        return "Es un archivo markdown";
//     //    mdRead();
       
//    } else {
//       return "No es un archivo markdown";
//     //    checkDir();
      
//    }
// }

const readFileMd = (path) => {

    return new Promise((resolve, reject) => {
      fs.readFile(path, "utf8", (error, data) => {
        if (error) {
          // console.error(error);
            reject(error);
        } else {
          resolve(data);
        }
      })
    });
  };
  const extractLinks =(object)=> {
    return new Promise((resolve) => {
  
      const regex = /\[(.+)\]\((https?.+)\)/gm;
      let match;
      let i = 0;
      let newArray = [];
      while((match = regex.exec(object)) !== null) {
        const newObject = {
          href: match[2],
          text: match[1],
          File:path.resolve()
  
        };
        i++;
        newArray.push(newObject);
      }
      resolve(newArray);
    })
  };