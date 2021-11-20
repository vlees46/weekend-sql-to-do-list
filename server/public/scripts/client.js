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
      console.log('in client side of GET', todos);
      
      /* $('#viewTasks').append(`
      <tr>
        <td>${todos.task}</td>       
           <td>
          <button class="update-btn" data-id="${todos.id}">Completed</button>
        </td> 
        <td>
          <button class="delete-btn" data-id="${todos.id}">Delete</button>
        </td>        
        <td>${todos.completed}</td>
        
      </tr>
      `); */
      console.log('change color conditional',todos)
      if (todos.completed === "Y"){
        
      //  $('#viewTasks').css("background-color", "green");
       // $('#task-table').css("color", "green");

       $('#viewTasks').append(`
       <tr>
         <td style="background-color:#00FF00" >${todos.task}</td>       
            <td>
           <button class="update-btn" data-id="${todos.id}">Completed</button>
         </td> 
         <td>
           <button class="delete-btn" data-id="${todos.id}">Delete</button>
         </td>        
         <td>${todos.completed}</td>
         
       </tr>
       `);
               
      }
      else {
     // $('td').css("color", "black");

     $('#viewTasks').append(`
     <tr>
       <td >${todos.task}</td>       
          <td>
         <button class="update-btn" data-id="${todos.id}">Completed</button>
       </td> 
       <td>
         <button class="delete-btn" data-id="${todos.id}">Delete</button>
       </td>        
       <td>${todos.completed}</td>
       
     </tr>
     `);











      }  
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
      type: 'PUT',
      url: `/todo/${update}`
    }).then((res) => {
      console.log(res);
      getTodo();
     // docolorchange();
    }).catch((err) => {
      console.log(err);
    })
  }; // end updateKoala

  