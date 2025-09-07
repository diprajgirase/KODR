const ImageKit = require("imagekit");
const utils = require("../utils/utils")

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});


async function uploadFile(file) {

    const result = await imagekit.upload({
        file: file,
        fileName: utils.createId(),
        folder: "kodr_phase_1"
    })

    return result;
}


module.exports = { uploadFile }