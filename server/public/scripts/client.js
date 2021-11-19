console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' ); 
  // load existing todos on page load
  getTodo();
    // TODO make sure to add class delete-btn, to the remove button.
  //$('#viewKoalas').on('click', '.delete-btn', deleteKoala);
  //$('#viewKoalas').on('click', '.update-btn', updateKoala);
  //$('#addButton').on('click', saveKoala);

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

/* function saveKoala(){
  console.log( 'in saveKoala' );
  let newKoala = {
    name: $('#nameIn').val(),
    age: $('#ageIn').val(),
    gender: $('#genderIn').val(),
    ready_to_transfer: $('#readyForTransferIn').val(),
    notes: $('#notesIn').val()
  }
  $.ajax({
    type: 'POST',
    url: '/koalas',
    data: newKoala
  }).then((response) => {
    console.log('POST /koalas succeeded')
    getKoalas();
    clearInputs();
  });

}

function deleteKoala( newKoala ){
  console.log( 'in deleteKoala');
  const koalaId = $(this).data('id');
  // ajax call to server to delete koalas
  $.ajax({
    type: 'DELETE',
    url: `/koalas/${koalaId}`
  }).then(function(response) {
    console.log('response', response);
    // TODO refreshKoalas(); 
    getKoalas();
  }).catch(function(error) {
    console.log('error: ', error);
  });
}; // end deleteKoala

// update the inputs
function updateKoala(){
  const update = $(this).data('id');
  $.ajax({
    type: 'PUT',
    url: `/koalas/${update}`
  }).then((res) => {
    console.log(res);
    getKoalas();
  }).catch((err) => {
    console.log(err);
  })
}; // end updateKoala */