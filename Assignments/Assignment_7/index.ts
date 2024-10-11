import express from 'express';
import path  from 'path'; 
import { Request, Response } from 'express';

const app = express();
const PORT = 3000;

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

app.use(express.static(path.join(__dirname)));

app.get('/', (req: Request,res: Response) =>{
    res.sendFile(path.join(__dirname, 'index.html')); 
});

app.use((req: Request, res: Response) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

class TaskManager{
    private tasks:Task[];

    constructor(tasks:Task[] = []){
        this.tasks = tasks; 
    }

    addTask(task : Task) : void{
        this.tasks.push(task);
    }

    getTasks():Task[]{
        return this.tasks;
    }

    listTasks() : string[]{
        const string_tasks : string[] = this.tasks.map((task:Task) =>{
            return `${task.id} | ${task.name}\nPriority: ${task.priority}\nDate: ${task.date}\n` + (task.tags ? task.tags.join(',')+'\n' : '') + `Completed: ${task.completed? 'Yes':'no'}`;
        });

        return string_tasks;
    }

    sortTasksbyPriority() : void{
        this.tasks.sort((a:Task, b:Task) =>{
            return b.priority-a.priority;
        });
    }

    findTask(input : number | string) : Task | undefined{
        if(typeof input === 'number'){
            return this.tasks.find((task:Task) => task.id === input);
        } else {
            return this.tasks.find((task:Task) => task.name === input);
        }
    }
}

