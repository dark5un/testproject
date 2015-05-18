## Users model and endpoints


|HTTP Verb|Path|Controller#Action|Used for|
|---------|----|-----------------|--------|
|GET|/users|users#index|all users in a array of json|
|POST|/users|users#create|create a new user from a json submition|
|GET|/users/:id|users#show|display a specific user in json|
|PATCH/PUT|/users/:id|users#update|update a specific user from a json submition|
|DELETE|/users/:id|users#destroy|delete a specific user|
