import moment from "moment";
//import uuidv4 from 'uuid/v4';
import db from "../db";

const discussion = {
  /**
   * Create A discussion
   * @param {object} req
   * @param {object} res
   * @returns {object} discussion object
   */
  async create(req, res) {
    const text = `INSERT INTO discussion (date, text, seen)
	    VALUES($1, $2, $3)
        returning *`;
    const values = [moment(new Date()), req.body.text, req.body.seen];

    try {
      const { rows } = await db.query(text, values);
      return res.status(201).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Get All discussions
   * @param {object} req
   * @param {object} res
   * @returns {object} discussions array
   */
  async getAll(req, res) {
    const findAllQuery = "SELECT * FROM discussion";
    try {
      const { rows, rowCount } = await db.query(findAllQuery);
      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Get A discussion
   * @param {object} req
   * @param {object} res
   * @returns {object} discussion object
   */
  async getOne(req, res) {
    const text = "SELECT * FROM discussion WHERE id = $1";
    try {
      const { rows } = await db.query(text, [req.params.id]);
      if (!rows[0]) {
        return res.status(404).send({ message: "discussion not found" });
      }
      return res.status(200).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Delete A discussion
   * @param {object} req
   * @param {object} res
   * @returns {void} return statuc code 204
   */
  async delete(req, res) {
    const deleteQuery = "DELETE FROM discussion WHERE id=$1 returning *";
    try {
      const { rows } = await db.query(deleteQuery, [req.params.id]);
      if (!rows[0]) {
        return res.status(404).send({ message: "discussion not found" });
      }
      return res.status(204).send({ message: "deleted" });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
};

export default discussion;
