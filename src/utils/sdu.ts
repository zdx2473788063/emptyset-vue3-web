import { ElMessageBox } from "element-plus";

/** 封装确认信息，默认warning */
export function sduMsgBox(
    message: any = "您确定进行关闭么？",
    title: string = "温馨提示：",
    confirmButtonText: string = "确定",
    cancelButtonText: string = "取消",
    type: string = "warning",
    showCancelButton: boolean = true
): Promise<boolean> {
    return new Promise((resolve, reject) => {
        ElMessageBox.confirm(
            message as any,
            title as any,
            {
                confirmButtonText,
                cancelButtonText,
                type,
                showCancelButton,
                draggable: true,
                dangerouslyUseHTMLString: true
            } as any
        )
            .then(() => {
                resolve(true);
            })
            .catch(() => {
                reject(false);
            });
    });
}
