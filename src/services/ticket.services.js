import TicketManager from "../persistence/daos/mongodb/ticket.dao.js";
const ticketDao = new TicketManager();

import Services from "./class.services.js";

export default class CartService extends Services {
    constructor() {
        super(ticketDao);
    }
}
