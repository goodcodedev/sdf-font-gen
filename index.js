const generateBMFont = require('msdf-bmfont');
const convertBMFont = require('convert-bmfont');
const fs = require('fs');

function generate(fontName) {
    let generateOpts = {
        fieldType: 'sdf',
        textureWidth: 512,
        textureHeight: 512,
        fontSize: 42,
        distanceRange: 3,
        texturePadding: 2
    };
    generateBMFont(__dirname + `/input/${fontName}.ttf`, generateOpts, (error, textures, font) => {
        if (error) throw error;
        textures.forEach((sheet, index) => {
            font.pages.push(`${fontName}_sheet${index}.png`);
            fs.writeFile(__dirname + `/output/${fontName}_sheet${index}.png`, sheet, (err) => {
            if (err) throw err;
            });
        });
        let jsonFile = __dirname + `/output/${fontName}.json`;
        fs.writeFile(jsonFile, JSON.stringify(font), (err) => {
            if (err) throw err;
        });
        // Add binary format
        convertBMFont(jsonFile, {
            format: 'bin',
        }, function(err, data) {
            if (err) throw err;
            let wstream = fs.createWriteStream(__dirname + `/output/${fontName}.bin`);
            wstream.write(data);
            wstream.end();
        });
    });
}

if (process.argv.length < 3) {
    console.log("Usage: node index.js <fontName>, where a ttf file exists in input/<fontName>.ttf");
} else {
    generate(process.argv[2]);
}