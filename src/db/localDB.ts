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

  // Dexieオブザーバ
  observableTodoList = liveQuery(() => this.todo.toArray());

  // 新規追加
  addTodo = (addText: string, todoStatus: todoStatusType) => {
    this.transaction('rw', this.todo, async () => {
      try {
        this.todo.put({ action: addText, status: todoStatus });
      } catch (error) {
        console.log(error);
      }
    });
  };

  // 変更処理
  updateTodo = (changeTodo: todoType) => {
    this.transaction('rw', this.todo, async () => {
      try {
        this.todo.put(changeTodo);
      } catch (error) {
        console.log(error);
      }
    });
  };

  // 変更確定処理
  trashTodo = () => {
    this.transaction('rw', this.todo, async () => {
      try {
        const todoList = await this.todo.toArray();
        const updateTodoList: todoType[] = todoList.map((todo) => {
          if (todo.status === 'delete' || todo.status === 'complete') return { ...todo, status: 'trash' };
          return todo;
        });
        this.todo.bulkPut(updateTodoList);
      } catch (error) {
        console.log(error);
      }
    });
  };

  // データベースを削除
  DeleteDatabase = () => {
    (async () => {
      await this.delete();
      window.location.reload();
    })();
  };
}

export const localDB = new DB();
