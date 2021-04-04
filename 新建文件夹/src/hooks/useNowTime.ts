import { ref } from 'vue';

const nowTime = ref('00:00:00');
const getNowTime = () => {
    const time = new Date();
    const hour = String(time.getHours()).padStart(2, '0');
    const minu = String(time.getMinutes()).padStart(2, '0');
    const sec = String(time.getSeconds()).padStart(2, '0');
    nowTime.value = `${hour}:${minu}:${sec}`;

}

export {
    nowTime,
    getNowTime
}