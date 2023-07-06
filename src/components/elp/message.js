import {createVNode, render, h, computed, onMounted, ref, nextTick, watchEffect} from 'vue'
import {SuccessFilled} from '@element-plus/icons-vue'
import ElIcon from 'element-plus/lib/components/icon/index'

let seed = 1;
let top = ref(16);
const ElpMessage = (options) => {
    console.log({ElIcon})
    const container = document.createElement('div')
    const offset = computed(() => top.value)
    watchEffect(() => {
        console.log(offset.value)
    })
    const currentZIndex = ref(1)
    const customStyle = computed(() => ({
        top: `${offset.value}px`,
        zIndex: currentZIndex.value,
    }))
    watchEffect(() => {
        console.log('customStyle', customStyle.value)
    })
    const msg = ref('1')
    const id = `message_${seed++}`
    const vnode = createVNode('div', {
        className: 'el-message el-message--success',
        role: 'alert',
        style: customStyle.value,
    }, [
        createVNode(ElIcon, {
            className: 'el-icon el-message__icon el-message-icon--success'
        }, () => createVNode(SuccessFilled, {})),
        createVNode('p', {className: 'el-message__content'}, {default: () => msg.value}),
    ])
    render(vnode, container)
    document.body.appendChild(container.firstElementChild)
    console.log(vnode);
    setTimeout(() => {
        top.value += 40
        currentZIndex.value += 1
        msg.value = '2'
    }, 1000)
}
export default ElpMessage