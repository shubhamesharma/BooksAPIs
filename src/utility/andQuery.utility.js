function andQuery(queryParam) {
    const key = Object.keys(queryParam);
    let q = '';
    key.forEach((k) => {
        q = `${q}"${k}"='${queryParam[k]}' and `;
    });
    if (key.length) 
        q = 'WHERE ' + q.substring(0, q.lastIndexOf('and'));
    return q;
}


// const { titlevalidator } = require("../middleware/title.middleware");

// function andQuery(queryParam) {

//     const key = Object.keys(queryParam);
//     let q = '';
//     for (let k = 0; k <= key.length; k++) {
//         if (k == key[titlevalidator]) {
//             q=``
//         }
//     }
// }



module.exports = andQuery;
