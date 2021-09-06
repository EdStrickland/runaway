let app = {
    name: "app",
    updateName: function () { },
    register: function (fn) {
        this.updateName = fn;
    },
};

export default app;