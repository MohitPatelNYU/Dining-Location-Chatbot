**Lambda Funtions:**

LF0 - used for interacting front end with the Lex bot which performs the Natural Language Processing.
LF_Fullfillment - used for collecting all the data from the user in order the send the messsage to them using AWS SNS
LF_Validation - used for validating that the data provided by customer is in the proper range and criteria.
LF2 - used for getting the data from sqs and process the request so that the required response can be send to the user using SNS. The data is fetched based on the cuisine provided by the user in the ElasticSearch and then top 5 locations are fetched from DynamoDB.

User Interface:

index.html - main frontend page
index.js - intermediate between frontend and the API Calls
apigClient.js - SDK generated javascript file which handles the API calls
