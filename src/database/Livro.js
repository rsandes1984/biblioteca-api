import { DataTypes } from "sequelize";
import { connection } from "./connection.js";

const Livro = connection.define(
  "livros",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    paginas: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    autor: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.ENUM("Terror", "Tecnologia", "Romance", "Ação"),
      defaultValue: "Ação",
    },
    ano_publicacao: {
      type: DataTypes.INTEGER,
    },
    edicao: {
      type: DataTypes.STRING(20),
      defaultValue: "1º Edição",
    },
    data_publicacao: {
      type: DataTypes.DATEONLY,
      field: "data_publicacao",
    },
    isbn: {
      type: DataTypes.STRING(13),
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

export default Livro;
