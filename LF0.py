import json
import boto3

client=boto3.client("lex-runtime")

def lambda_handler(event, context):
    # TODO implement
    print("event:" , event['message'])
    
    response=client.post_text(botName='Yelp_chat_bot', botAlias='$LATEST', userId='admin',inputText=event['message'])
   
    
    return response['message']