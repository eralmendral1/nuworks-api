# Nuworks Todo's API

- Backend is created using express and mongodb

### Deployed URL
<a href="https://nuworks-api.up.railway.app/todos" target="_blank">https://nuworks-api.up.railway.app/todos</a>

## Installation
```yarn```

## Running the app
```yarn start```


## Git commands
 - ```git add <file_name>```
 - ```git commit -m <message>```
 - ```git push```


## Endpoints

#### Get all todos:
-  URL ```/todos```
-  METHOD : GET
-  Response
     - type: Array of todos
     - Sample response:
```
[
{"_id": "653ca2cba454a47a7fc1d1d0",
"title": "test b",
"done": false,
"updated_at": "2023-10-28T05:57:31.626Z",
"created_at": "2023-10-28T05:57:31.626Z"
},
...
]
```

#### Get single todo
-  URL ```/todos/:id```
-  METHOD : GET
-  Response
     - type: Single todo
     - Sample response:
```
 {"_id": "653ca2cba454a47a7fc1d1d0",
"title": "test b",
"done": false,
"updated_at": "2023-10-28T05:57:31.626Z",
"created_at": "2023-10-28T05:57:31.626Z"
}
```


#### Create todo
-  URL ```/todos```
-  METHOD : POST
-  Sample Body
```
 {
  title: "Go to the gym"
}
```


#### Update todo
-  URL ```/todos/:id```
-  METHOD : PUT
-  Sample Body
```
 {
  done: true
}
```

#### Delete todo 
-  URL ```/todos/:id```
-  METHOD : DELETE
- Response
  -  204 status
