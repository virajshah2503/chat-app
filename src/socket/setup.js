const URL='wss://echo.websocket.org/';

const configureSocket = () =>{
  return new Promise((resolve) => {
    const webSocket = new WebSocket(URL);

    const receive = (callback) => {
      webSocket.onmessage = (event) => {
        let data= JSON.parse(event.data);

        /*mirror response*/
        data.message.messageid  += "1";
        let temp= data.message.to;
        data.message.to= data.message.from;
        data.message.from=temp;

        callback(data);
      }
    };

    const send = (message) => webSocket.send(JSON.stringify(message));

    webSocket.onopen = () => resolve({ send, receive });
  });
}

export default configureSocket;