let connect = function(){
  if (global.connection){
    return global.connection.connect();
  }
  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString:
"postgres://blsnppyv:lCsUavlnVhcApHlWkCZHqJ5VAffIkAax@kesavan.db.elephantsql.com/blsnppyv"
  });
  global.connection = pool
  return pool.connect();
}
module.exports= { connect }
  