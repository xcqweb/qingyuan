<<<<<<< HEAD
import To_md5 from './md5.js'

let WEB_KEY='AE0ADC3949BA59ABBEW6E057F20F983E'
export let timestamp= Date.parse( new Date())+'';
export default function sign_key(json){
    return To_md5('code='+json.code+'&password='+json.password+'&timestamp='+timestamp+'&username='+json.username+WEB_KEY)
=======
import To_md5 from './md5.js'

let WEB_KEY='AE0ADC3949BA59ABBEW6E057F20F983E'
export let timestamp= Date.parse( new Date())+'';
export default function sign_key(json){
    return To_md5('code='+json.code+'&password='+json.password+'&timestamp='+timestamp+'&username='+json.username+WEB_KEY)
>>>>>>> d36520eaf32dca37f3de581be37cd3e750e00f19
}