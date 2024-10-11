enum Priority{
    Low = 1,
    Medium = 2,
    High = 3
}

interface Task{
    id : number,
    name : string,
    date : string,
    category : ("Work" | "Personal" | "Hobby" | "Other"),
    priority : Priority,
    tags? : string[],
    completed : boolean
}

 class TaskManager{
    private tasks:Task[];

    constructor(tasks:Task[] = []){
        this.tasks = tasks; 
    }

   public addTask(task : Task) : void{
        this.tasks.push(task);
    }

   public getTasks():Task[]{
        return this.tasks;
    }

   public listTasks() : string[]{
        const string_tasks : string[] = this.tasks.map((task:Task) =>{
            return `${task.id} | ${task.name}\nPriority: ${task.priority}\nDate: ${task.date}\n` + (task.tags ? task.tags.join(',')+'\n' : '') + `Completed: ${task.completed? 'Yes':'no'}`;
        });

        return string_tasks;
    }

    public sortTasksbyPriority() : void{
        this.tasks.sort((a:Task, b:Task) =>{
            return b.priority-a.priority;
        });
    }

    public findTask(input : number | string) : Task | undefined{
        if(typeof input === 'number'){
            return this.tasks.find((task:Task) => task.id === input);
        } else {
            return this.tasks.find((task:Task) => task.name === input);
        }
    }
}


