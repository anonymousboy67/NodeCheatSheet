app.get('/users', getUsers);
app.post('/users', addUsers);
app.put('/users/:id', updateUsers);
app.delete('/users/:id', deleteUsers);
