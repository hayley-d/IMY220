var Priority;
(function (Priority) {
    Priority[Priority["Low"] = 1] = "Low";
    Priority[Priority["Medium"] = 2] = "Medium";
    Priority[Priority["High"] = 3] = "High";
})(Priority || (Priority = {}));
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
// Expose TaskManager to global scope
window.TaskManager = TaskManager;
