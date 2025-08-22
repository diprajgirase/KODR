var ImageKit  = require("imageKit");

var imagekit = new ImageKit({
   publicKey:"public_8JWgVpatq+giTR2TZrLCUWYJZSs=",
      privateKey:"private_vmh+xpd0dj9teI2mPh3qmp/6BQs=",
      urlEndpoint:"https://ik.imagekit.io/dipraj52",

})

async function uploadFile(file, fileName){
    const result = await imagekit.upload({
        file,
        fileName
    })

    return result
}