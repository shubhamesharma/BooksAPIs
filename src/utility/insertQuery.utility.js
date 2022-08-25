function insertQuery(queryParam){
    const key = Object.keys(queryParam);
    let q='';
  
    key.forEach((k)=>{
         q= `INSERT INTO (${k} ,)`
         console.log(q);
         return q;
    });

}

module.exports={
    insertQuery
}