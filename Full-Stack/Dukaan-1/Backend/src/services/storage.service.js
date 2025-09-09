var ImageKit = require("imagekit");
const { generateUUID } = require("../utils/utils");

var imagekit = new ImageKit({
   publicKey: "public_xu86Gl0yE/tZd5MfY2q9bMDmkaw=",
   privateKey: "private_Je3krnVosVorIWnjYxL2BfGbkLw=",
   urlEndpoint: "https://ik.imagekit.io/jo2meypr4"
});


async function uploadFile(file) {
   const result = await imagekit.upload({
      file: file,
      fileName: generateUUID() ,
      folder: "products"
   })

   return result
}

module.exports = uploadFile;