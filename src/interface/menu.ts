export interface ITableDataRow {
    id: number;
    name: string;
    type: number;
    sort: number;
    component: string;
    componentName: string;
    children: ITableDataRow[];
}

export interface IMenuVO {
    id?: number;
    name: string;
    parentId: number;
    path: string;
    component: string;
    componentName: string;
    visible: boolean;
    type: number;
    keepAlive: boolean;
}
