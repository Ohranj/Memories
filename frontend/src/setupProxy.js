const proxy = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        proxy("/login/**", {
            target: "http://localhost:8080",
        })
    );
    app.use(
        proxy("/register/**", {
            target: "http://localhost:8080",
        })
    );
    app.use(
        proxy("/account/**", {
            target: "http://localhost:8080",
        })
    );
    app.use(
        proxy("/memory/**", {
            target: "http://localhost:8080",
        })
    );
    app.use(
        proxy("/ui/**", {
            target: "http://localhost:8080",
        })
    );
    app.use(
        proxy("/profiles/**", {
            target: "http://localhost:8080",
        })
    );
};
