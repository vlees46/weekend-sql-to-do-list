$( document ).ready( function(){
  console.log( 'JQ' ); 
  // load existing todos on page load
  getTodo();
    // TODO make sure to add class delete-btn, to the remove button.
  $('#viewTasks').on('click', '.delete-btn', deleteTask);
  $('#viewTasks').on('click', '.update-btn', updateComplete);
  $('#addTaskButton').on('click', postTodo);

}); // end doc ready

// clear koalaInputs
function clearInputs(){
  $('#taskIn').val('');

}

function getTodo(){ 
  console.log( 'in getTodo' );
  $.ajax({
    type: 'GET',
    url: '/todo'
  }).then((response) => {
    $('#viewTasks').empty();
    console.log("GET /todos response", response);
    for (let todos of response) {
      $('#viewTasks').append(`
      <tr>
        <td>${todos.task}</td>
        <td>${todos.completed}</td>
           <td>
          <button class="update-btn" data-id="${todos.id}">Completed</button>
        </td> 
        <td>
          <button class="delete-btn" data-id="${todos.id}">Delete</button>
        </td>        
      </tr>
      `);
    }
  });
}

function postTodo(){
  console.log( 'in postTodo' );
  let newTaskItem = {
    task: $('#taskIn').val(),
  }
  $.ajax({
    type: 'POST',
    url: '/todo',
    data: newTaskItem
  }).then((response) => {
    console.log('POST /todos succeeded')
    getTodo();
    clearInputs();
  });

}
// This function will DELETE a TASK from the DATABASE
 function deleteTask ( newTaskItem ){
  console.log( 'in deleteTask');
  const taskId = $(this).data('id');
  // ajax call to server to delete koalas
  $.ajax({
    type: 'DELETE',
    url: `/todo/${taskId}`
  }).then(function(response) {
    console.log('response', response);
    // TODO refreshTodo(); 
    getTodo();
  }).catch(function(error) {
    console.log('error: ', error);
  });
}; // end deletetasiki

// update the complete tasks
function updateComplete(){
  const update = $(this).data('id');
  $.ajax({
    method: 'PUT',
    url: `/todo/${update}`    
  }).then(function(response) {
    console.log(response);
    getTodo();
  }).catch(function(error) {
    console.log(error);
  }) ;
 }; // end updateComplete