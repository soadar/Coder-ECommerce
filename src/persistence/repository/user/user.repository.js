import log from "../../../utils/logger.js";
import factory from "../../daos/factory.js";
import UserResDTO from "../../dtos/user/user.res.dto.js";
const { userDao } = factory;

export default class ProductRepository {
    constructor() {
        this.dao = userDao;
    }

    async getByIdDTO(id) {
        try {
            const response = await this.dao.getById(id);
            return new UserResDTO(response);
        } catch (error) {
            log.fatal(error.message);
        }
    }

    async getAllDTO() {
        try {
            const response = await this.dao.getAll();
            const userDtos = response.map((user) => new UserResDTO(user));
            return userDtos;
        } catch (error) {
            log.fatal(error.message);
        }
    }
}