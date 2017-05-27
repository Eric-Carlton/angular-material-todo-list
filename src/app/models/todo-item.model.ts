export class TodoItem {
    id: number;
    todo: string;
    completed: boolean;

    constructor(id: number, todo: string, completed: boolean) {
        this.id = id;
        this.todo = todo;
        this.completed = completed;
    }
}
