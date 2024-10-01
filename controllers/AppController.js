import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class Appcontroller {
  static getStatus(request, response) {
    response.status(200).send({ redis: redisClient.isAlive(), db: dbClient.isAlive() });
  }

  static async getStats(request, response) {
    const usersNum = await dbClient.nbUsers();
    const filesNum = await dbClient.nbFiles();
    response.status(200).send({ users: usersNum, files: filesNum });
  }
}

module.exports = Appcontroller;
