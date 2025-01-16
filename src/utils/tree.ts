export const defaultProps = {
    children: "children",
    label: "name",
    value: "id",
    isLeaf: "leaf",
    // 用于 cascader 组件：在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值
    emitPath: false
};

/**
 * @description 构造树型结构数据
 * @param data 原始数据
 * @param id id字段
 * @param parentId 父级id字段
 * @param children 子集字段
 */
export const handleTree = (data: any, id?: string, parentId?: string, children?: string) => {
    const config = {
        id: id || "id",
        parentId: parentId || "parentId",
        childrenList: children || "children"
    };
    let childrenListMap: any = {};
    let nodeIds: any = {};
    let tree: any = [];
    for (const d of data) {
        const parentId = d[config.parentId];
        if (childrenListMap[parentId] == null) {
            childrenListMap[parentId] = [];
        }
        nodeIds[d[config.id]] = d;
        childrenListMap[parentId].push(d);
    }
    for (const d of data) {
        const parentId = d[config.parentId];
        if (nodeIds[parentId] == null) {
            tree.push(d);
        }
    }
    for (const t of tree) {
        adaptToChildrenList(t);
    }
    function adaptToChildrenList(o: any) {
        if (childrenListMap[o[config.id]] !== null) {
            o[config.childrenList] = childrenListMap[o[config.id]];
        }
        if (o[config.childrenList]) {
            for (const c of o[config.childrenList]) {
                adaptToChildrenList(c);
            }
        }
    }
    return tree;
};
