export interface IEditorBodyItem {
  text: string;
  tab?: number;
  comment?: boolean;
}

export interface IEditorFile {
  name: string;
  body: Array<IEditorBodyItem>;
}
