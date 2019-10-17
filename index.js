var chatHistory = [];

function sendMessageToApi(){
  //alert("Inside sendMessageToApi");

  var inputText = document.getElementById('user-input-message').value.trim().toLowerCase();

  document.getElementById('user-input-message').value = "";

  if(inputText == "") {
    //alert("Please enter some text");
    return false;
  }else {

    chatHistory.push('<b><color = "red">User:</color> </b>' + inputText);

    document.getElementById('bot-response').innerHTML = "";

    chatHistory.forEach((element) => {
      document.getElementById('bot-response').innerHTML += "<p>" + element + "</p>";
    });
    //alert('before calling function');
    receiveMessageFromApi(inputText);
    //alert('after calling function');
    return false;
  }

}

function receiveMessageFromApi(inputText){


    

    apigClient = apigClientFactory.newClient({
      // accessKey: 'AKIAIVIHZAIXOL7BR7RA',
      // secretKey: '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'
    });

    var params = {};
    var body = {
      "message":inputText
    };

    var additionalParams = {
      headers: {
        
      },
      queryParams: {}
    };

    apigClient.chatbotPost(params,body,additionalParams).then((result) =>{

      //alert("Inside return api client");
      console.log(result);
      chatHistory.push('<b><color = "Cyan">Bot:</color> </b>' + JSON.stringify(result.data));

      document.getElementById('bot-response').innerHTML = "";
      chatHistory.forEach((element) => {
        document.getElementById('bot-response').innerHTML += "<p>" +element + "</p>";
      });
  
  })
  .catch((err) =>{
    console.log(err);
  });

}
