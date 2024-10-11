"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var app = (0, express_1.default)();
var PORT = 3000;
var Priority;
(function (Priority) {
    Priority[Priority["Low"] = 1] = "Low";
    Priority[Priority["Medium"] = 2] = "Medium";
    Priority[Priority["High"] = 3] = "High";
})(Priority || (Priority = {}));
app.use(express_1.default.static(path_1.default.join(__dirname)));
app.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'index.html'));
});
app.use(function (req, res) {
    res.status(404).send('Page not found');
});
app.listen(PORT, function () {
    console.log("Server running on http://localhost:".concat(PORT));
});
var TaskManager = /** @class */ (function () {
    function TaskManager(tasks) {
        if (tasks === void 0) { tasks = []; }
        this.tasks = tasks;
    }
    TaskManager.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    TaskManager.prototype.getTasks = function () {
        return this.tasks;
    };
    TaskManager.prototype.listTasks = function () {
        var string_tasks = this.tasks.map(function (task) {
            return "".concat(task.id, " | ").concat(task.name, "\nPriority: ").concat(task.priority, "\nDate: ").concat(task.date, "\n") + (task.tags ? task.tags.join(',') + '\n' : '') + "Completed: ".concat(task.completed ? 'Yes' : 'no');
        });
        return string_tasks;
    };
    TaskManager.prototype.sortTasksbyPriority = function () {
        this.tasks.sort(function (a, b) {
            return b.priority - a.priority;
        });
    };
    TaskManager.prototype.findTask = function (input) {
        if (typeof input === 'number') {
            return this.tasks.find(function (task) { return task.id === input; });
        }
        else {
            return this.tasks.find(function (task) { return task.name === input; });
        }
    };
    return TaskManager;
}());
