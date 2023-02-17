"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./routes/api/images"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var port = 3000;
app.use("/api", images_1.default);
app.use("/public", express_1.default.static(path_1.default.join(__dirname, "public")));
app.get("/", function (req, res) {
    res.send("Main API route");
});
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
exports.default = app;
//# sourceMappingURL=index.js.map