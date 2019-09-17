import getMessageKey from '../utils/getMessageKey';

export default ({to, from, messages}) =>{
    let msgKey= getMessageKey(from,to);

    if(msgKey in messages){
        return messages[msgKey];
    }
    return null;

}
