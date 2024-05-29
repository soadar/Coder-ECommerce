import { createHash, isValidPassword } from '../../../utils.js';
import log from '../../../utils/logger.js';
import CartDao from '../mongodb/cart.dao.js';
import { UserModel } from "./models/user.model.js";
import MongoDao from "./mongo.dao.js";

const cartDao = new CartDao();

export default class UserDaoMongo extends MongoDao {
    constructor() {
        super(UserModel);
    }

    async loginUser(user) {
        try {
            const { email, password } = user;
            const userExist = await this.getByEmail(email);
            if (userExist) {
                const validPass = isValidPassword(password, userExist);
                return validPass ? userExist : false;
            }
            else return false;
        } catch (error) {
            log.fatal(error.message);
        }
    };

    async registerUser(user) {
        try {
            const { email, password } = user;
            const userExist = await this.getByEmail(email);
            if (!userExist) {
                if (email === 'adminCoder@coder.com' && password === 'adminCod3r123') {
                    return await this.model.create({
                        ...user,
                        password: createHash(password),
                        cart: await cartDao.create(),
                        role: 'admin'
                    });
                }
                return await this.model.create({
                    ...user,
                    password: createHash(password),
                    cart: await cartDao.create(),
                    role: 'user'
                });
            } else return false;
        } catch (error) {
            log.fatal(error.message);
        }
    };

    async getById(id) {
        try {
            const userExist = await this.model.findById(id).populate('cart') //propiedad - atributo
            return userExist ? userExist : false;
        } catch (error) {
            log.fatal(error.message);
        }
    };

    async getByEmail(email) {
        try {
            const userExist = await this.model.findOne({ email });
            return userExist ? userExist : false;
        } catch (error) {
            log.fatal(error.message);
        }
    };

    async getByCart(cart) {
        try {
            const userExist = await this.model.findOne({ cart });
            return userExist ? userExist : false;
        } catch (error) {
            log.fatal(error.message);
        }
    };

    async recoverPass(email, password) {
        try {
            const userExist = await this.getByEmail(email);
            if (!userExist) return 3;
            const validPass = isValidPassword(password, userExist);
            if (validPass) return 2;
            return await this.model.findByIdAndUpdate(userExist._id, { password: createHash(password) })
        } catch (error) {
            log.fatal(error.message);
        }
    };

    async deleteInactives() {
        try {
            const tiempoInactividad = new Date(new Date().setDate(new Date().getDate() - 2));
            //const tiempoInactividad = new Date(new Date().setMinutes(new Date().getMinutes() - 10));
            const userExist = await this.model.deleteMany({ last_connection: { $lt: tiempoInactividad } });

            return userExist ? userExist : false;
        } catch (error) {
            log.fatal(error.message);
        }
    };
}