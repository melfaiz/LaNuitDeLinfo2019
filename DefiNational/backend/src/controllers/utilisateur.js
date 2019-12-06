import moment from "moment";
//import uuidv4 from 'uuid/v4';
import db from "../db";

const utilisateur = {
  /**
   * Create A utilisateur
   * @param {object} req
   * @param {object} res
   * @returns {object} utilisateur object
   */
  async create(req, res) {
    const text = `INSERT INTO utilisateur (pseudo, nom, prenom, xp)
	    VALUES($1, $2, $3, $4)
        returning *`;
    const values = [
      req.body.pseudo,
      req.body.nom,
      req.body.prenom,
      req.body.xp
    ];

    try {
      const { rows } = await db.query(text, values);
      return res.status(201).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Get All utilisateurs
   * @param {object} req
   * @param {object} res
   * @returns {object} utilisateurs array
   */
  async getAll(req, res) {
    const findAllQuery = "SELECT * FROM utilisateur";
    try {
      const { rows, rowCount } = await db.query(findAllQuery);
      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Get A utilisateur
   * @param {object} req
   * @param {object} res
   * @returns {object} utilisateur object
   */
  async getOne(req, res) {
    const text = "SELECT * FROM utilisateur WHERE id = $1";
    try {
      const { rows } = await db.query(text, [req.params.id]);
      if (!rows[0]) {
        return res.status(404).send({ message: "utilisateur not found" });
      }
      return res.status(200).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Delete A utilisateur
   * @param {object} req
   * @param {object} res
   * @returns {void} return statuc code 204
   */
  async delete(req, res) {
    const deleteQuery = "DELETE FROM utilisateur WHERE id=$1 returning *";
    try {
      const { rows } = await db.query(deleteQuery, [req.params.id]);
      if (!rows[0]) {
        return res.status(404).send({ message: "utilisateur not found" });
      }
      return res.status(204).send({ message: "deleted" });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
};

export default utilisateur;
