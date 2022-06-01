import { todoStatusType } from './../models/modelTodo';
import Dexie, { liveQuery, Table } from 'dexie';
import { todoType } from '../models/modelTodo';

class DB extends Dexie {
  todo!: Table<todoType>;

  constructor() {
    super('localDB');
    this.version(1).stores({
      todo: '++id, text',
    });
  }

  observableTodoList = liveQuery(() => this.todo.toArray());

  addTodo = (addText: string, todoStatus: todoStatusType) => {
    this.transaction('rw', this.todo, async () => {
      try {
        this.todo.put({ action: addText, status: todoStatus });
      } catch (error) {
        console.log(error);
      }
    });
  };

  updateTodo = (changeTodo: todoType) => {
    this.transaction('rw', this.todo, async () => {
      try {
        this.todo.put(changeTodo);
      } catch (error) {
        console.log(error);
      }
    });
  };
}

export const localDB = new DB();
