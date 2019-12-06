import moment from "moment";
//import uuidv4 from 'uuid/v4';
import db from "../db";

const discussion_replies = {
  /**
   * Create A discussion_replies
   * @param {object} req
   * @param {object} res
   * @returns {object} discussion_replies object
   */
  async create(req, res) {
    const text = `INSERT INTO discussion_replies (text, dis_id, player_id)
	    VALUES($1, $2, $3)
        returning *`;
    const values = [req.body.text, req.body.dis_id, req.body.player_id];

    try {
      const { rows } = await db.query(text, values);
      return res.status(201).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Get All discussion_repliess
   * @param {object} req
   * @param {object} res
   * @returns {object} discussion_repliess array
   */
  async getAll(req, res) {
    const findAllQuery = "SELECT * FROM discussion_replies";
    try {
      const { rows, rowCount } = await db.query(findAllQuery);
      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Get A discussion_replies
   * @param {object} req
   * @param {object} res
   * @returns {object} discussion_replies object
   */
  async getOne(req, res) {
    const text = "SELECT * FROM discussion_replies WHERE dis_id = $1";
    try {
      const { rows, rowCount } = await db.query(text, [req.params.id]);
      if (!rows[0]) {
        return res
          .status(404)
          .send({ message: "discussion_replies not found" });
      }
      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Delete A discussion_replies
   * @param {object} req
   * @param {object} res
   * @returns {void} return statuc code 204
   */
  async delete(req, res) {
    const deleteQuery =
      "DELETE FROM discussion_replies WHERE id=$1 returning *";
    try {
      const { rows } = await db.query(deleteQuery, [req.params.id]);
      if (!rows[0]) {
        return res
          .status(404)
          .send({ message: "discussion_replies not found" });
      }
      return res.status(204).send({ message: "deleted" });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
};

export default discussion_replies;
