export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export interface TaskInput {
    title: string;
    description: string;
    completed?: boolean;
}

