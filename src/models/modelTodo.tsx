export type todoStatusType = 'todo' | 'delete' | 'complete';
export type todoListTitleType = 'やること' | '削除' | '完了';
export type todoType = { id: number; action: string; status: todoStatusType };
