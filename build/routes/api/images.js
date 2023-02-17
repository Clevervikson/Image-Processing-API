"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resize_1 = __importDefault(require("../../utilities/resize"));
var images = express_1.default.Router();
var morgan = require("morgan");
// Middlewares
images.use(morgan("common"));
images.get("/images", resize_1.default, function (req, res) {
    res.send("Resize your image by adding the approriate query parameters to the URL");
});
exports.default = images;
//# sourceMappingURL=images.js.map