import { Sequelize } from "sequelize"

const dbContent = new Sequelize("t2_notes_123220139", "root", "", {
  host: "34.70.179.84",
  dialect: "mysql"
});

export default dbContent;