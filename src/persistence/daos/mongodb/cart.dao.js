import mongoose from "mongoose";
import log from "../../../utils/logger.js";
import { CartModel } from "./models/cart.model.js";
import { ProductModel } from "./models/product.model.js";
import MongoDao from "./mongo.dao.js";
const ObjectId = mongoose.Types.ObjectId;

export default class CartDaoMongo extends MongoDao {
    constructor() {
        super(CartModel);
    }

    async getAll() {
        try {
            const response = await this.model.find({});
            return response;
        } catch (error) {
            log.fatal(error.message);
        }
    }

    async getById(id) {
        try {
            if (id.length != 24) {
                return false;
            }
            const response = await this.model.findById(id).populate('products._id');
            return response;
        } catch (error) {
            log.fatal(error.message);
        }
    }

    async update(cid, pid, owner) {
        try {
            if (cid.length != 24 || pid.length != 24) {
                return false
            }
            const product = await ProductModel.findById(pid);
            if (product?.owner === owner) return 2;
            if (product) {
                const idSearch = new ObjectId(pid);
                const cart = await this.model.findById(cid);
                if (cart) {
                    const found = cart.products.find(element => element["_id"].equals(idSearch));
                    if (found) {
                        found.quantity += 1;
                    } else {
                        cart.products.push({ _id: pid, quantity: 1 });
                    }
                    cart.save();
                    return cart;
                }
            }
            return false;
        } catch (error) {
            log.fatal(error.message);
        }
    }

    async delete(id) {
        try {
            if (id.length != 24) {
                return false;
            }
            const response = await this.model.findByIdAndDelete(id);
            return response;
        } catch (error) {
            log.fatal(error.message);
        }
    }

    async updateCant(cid, pid, stock) {
        try {
            if (cid.length != 24 || pid.length != 24) {
                return false
            }
            const cart = await this.model.findById(cid);
            if (cart) {
                const prod = await ProductModel.findById(pid);
                if (prod) {
                    return await this.addProdToCart(cid, pid, stock);
                }
            }
            return false;
        } catch (error) {
            log.fatal(error.message);
        }
    }

    async addProdToCart(cid, pid, stock) {
        try {
            const cart = await this.model.findById(cid);
            const found = cart.products.find(element => element["_id"].equals(pid));
            if (found) {
                found.quantity = stock;
            } else {
                cart.products.push({ _id: pid, quantity: stock });
            }
            cart.save();
            return cart;
        } catch (error) {
            log.fatal(error.message);
        }
    }

    async delProdInCart(cid, pid) {
        try {
            if (cid.length != 24 || pid.length != 24) {
                return false
            }
            const cart = await this.model.findById(cid);
            if (cart) {
                const prod = await ProductModel.findById(pid);
                if (prod) {
                    const found = cart.products.find(element => element["_id"].equals(pid));
                    if (found) {
                        const newProducts = cart.products.filter(element => !element["_id"].equals(pid));
                        cart.products = newProducts;
                        cart.save();
                        return cart;
                    }
                }
            }
            return false;
        } catch (error) {
            log.fatal(error.message);
        }
    }

    async delProdsInCart(id) {
        try {
            if (id.length != 24) {
                return false;
            }
            const cart = await this.model.findById(id);
            if (cart) {
                cart.products = [];
                cart.save();
                return cart;
            }
            return false;
        } catch (error) {
            log.fatal(error.message);
        }
    }

    async purchase(cid) {
        const productsSinStock = [];
        const productsComprados = [];
        const cart = await this.model.findById(cid);
        const subTotales = await Promise.all(cart.products.map(async product => {
            const prod = await ProductModel.findById(product._id);
            if (product.quantity <= prod.stock) {
                prod.stock -= product.quantity;
                await prod.save();
                productsComprados.push(product);
                return prod.price * product.quantity;
            } else {
                productsSinStock.push(product);
                return 0;
            }
        }));

        cart.products = productsSinStock;
        await cart.save();

        const total = await subTotales.reduce((a, b) => a + b, 0);
        return total;
    }

    async updateStock(products) {
        const subTotales = await products.map(async product => {
            const prod = await ProductModel.findById(product._id);
            if (product.quantity <= prod.stock) {
                product.quantity -= prod.stock
                prod.save();
                return prod.price * product.quantity;
            } else {
                return 0
            }
        })
        return subTotales;
    }
}