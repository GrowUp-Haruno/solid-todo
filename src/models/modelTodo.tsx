export type todoStatusType = 'todo' | 'delete' | 'complete' | 'trash';
export type todoListTitleType = 'やること' | '削除' | '完了';
export type editType = 'edit' | 'view';
export type todoType = { id?: number; action: string; status: todoStatusType };
