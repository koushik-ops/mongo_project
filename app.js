const mysql = require('mysql2/promise');
async function runProject() {
    const config = { host: "localhost", user: "root", password: "Sai@2006" };
    let con;
    try {
        con = await mysql.createConnection(config);
        console.log("connected!");

        await con.query("CREATE DATABASE IF NOT EXISTS appon");
        console.log("database created");

        await con.query("USE appon");
        await con.query("CREATE TABLE IF NOT EXISTS alia (id int auto_increment primary key, name varchar(20), address varchar(20))");
        console.log("table created");

        await con.query("INSERT INTO alia (id, name, address) VALUES (1,'sanjay','new delhi'),(2,'maya','mysore'),(3,'sanju','bangalore'),(4,'manju','mangalore') ON DUPLICATE KEY UPDATE name=VALUES(name), address=VALUES(address)");
        console.log("record inserted");

        const [res1] = await con.query("SELECT * FROM alia");
        console.log(res1);

        const [res2] = await con.query("SELECT * FROM alia WHERE id=1");
        console.log(res2);

        const [res3] = await con.query("DELETE FROM alia WHERE id=2");
        console.log("recorded deleted", res3);
        
        await con.query("ALTER TABLE alia ADD COLUMN phone_number int");
        console.log("new column added");

        await con.query("ALTER TABLE alia DROP COLUMN phone_number");
        console.log("column droped");

        await con.query("UPDATE alia SET name='mamtha' WHERE id=3");
        console.log("record updated");

        await con.query("ALTER TABLE alia MODIFY id int");
        await con.query("ALTER TABLE alia DROP PRIMARY KEY");
        console.log("primary key dropped");

        await con.query("DROP TABLE alia");
        console.log("table dropped");

    } 
    catch (err) {
        console.error(err);
    } 
    finally {
        if (con) await con.end();
    }
}
runProject();