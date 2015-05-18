## Users model and endpoints


|HTTP Verb|Path|Controller#Action|Used for|
|GET|/users|users#index|display a list of all users|
|GET|/users/new|users#new|return an HTML form for creating a new user|
|POST|/users|users#create|create a new user|
|GET|/users/:id|users#show|display a specific user|
|GET|/users/:id/edit|users#edit|return an HTML form for editing a user|
|PATCH/PUT|/users/:id|users#update|update a specific user|
|DELETE|/users/:id|users#destroy|delete a specific user|
