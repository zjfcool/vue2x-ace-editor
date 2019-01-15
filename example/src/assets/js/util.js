// textarea 复制可换行，input不可换行
export function copy(val) {
    const textarea = document.createElement('textarea');
    textarea.style.height = 0;
    textarea.value = val;
    document.body.appendChild(textarea);
    textarea.select()
    if (document.execCommand('copy')) {
        document.execCommand('copy');
    }
    document.body.removeChild(textarea);
}