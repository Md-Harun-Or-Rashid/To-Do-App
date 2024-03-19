
// This TotalTaskToComplete var is a globalvariable, it is created to count how many tasks are listed in list 
var TotalTaskToComplete=0;

// this TaskCompleted var is a global variable, it is created to count how many tasks have been completed
var TaskCompleted=0;

// this DeletedTask  var is a global variable, it is created to count how many tasks are deleted .
var TotalTaskDeleted=0;

// I made this taskLoded function to load the relevant data from the local storage and this taskLoded function can be developed in many ways. 

/*function taskLoded(){

    const TaskDetails= document.getElementById('TaskDetails');
    const tasks=JSON.parse(localStorage.getItem('tasks'))|| [];

    //loading task from the localstorage

    tasks.forEach( task=> {
        const newRowAdding=TaskDetails.insertRow();
        const AddTaskCell=newRowAdding.insertCell(0);
        const AddDateCell=newRowAdding.insertCell(1);
        const PriorityLevelCell=newRowAdding.insertCell(2);
        const CheckedTask=newRowAdding.insertCell(3);
        const DeleteTask=newRowAdding.insertCell(4);

        AddTaskCell.textContent=task.task;
        AddDateCell.textContent=task.deadline;
        PriorityLevelCell.textContent=task.priority;

        const CheckBox=document.createElement('input');
            CheckBox.type='checkbox'; // type of the input element 
            CheckBox.id = 'taskCheckbox'; //adding id
            CheckedTask.appendChild(CheckBox);// inserting it to cell(3)
   
    CheckBox.onclick=function(){
    if(this.checked){
        AddTaskCell.style.textDecoration = 'line-through';// when checkbox is checked text in AddTaskCell will be changed to textDecoration: line-throught
        AddDateCell.style.textDecoration='line-through';
        PriorityLevelCell.style.textDecoration='line-through';
        this.disabled= true;// when checked box is checked , input button will be disable, user can not unchecked it
        var completedTask=document.getElementById('completedTask');
        TaskCompleted++; // It will increase the completed task by 1 for each checked 
        TotalTaskToComplete--;// it will reduce to total task to do by 1 for each checked
        CountElement.textContent="You have "+ TotalTaskToComplete + " tasks to complete!";// update will show in real time
        completedTask.textContent="You have completed "+ TaskCompleted + " tasks!";// update will show in real time 
        
    }
  }
  const DeleteTaskButton=document.createElement('button');
  DeleteTaskButton.textContent='Delete';
  DeleteTask.appendChild(DeleteTaskButton);

  DeleteTaskButton.addEventListener('click',function(event){
    
    var td=event.target.parentNode; // onclick function will target the table data of the specific row where delete button is located 
    var tr=td.parentNode;
    tr.parentNode.removeChild(tr);// it will remove the whole row

    var taskDeleted=document.getElementById('taskDeleted');// it will count the amount of deleted task
        TotalTaskDeleted++;
        taskDeleted.textContent="You have deleted "+ TotalTaskDeleted + " tasks !";// update in real time


  });
 


    })


}

document.addEventListener('DOMContentLoaded',()=> {
    taskLoded();
    // document.addEventListener will excedcut the taskLoad function automtically from the local storage when document content is loaded
}) */
   


// Time and date is added on the top of the page in the P element , showDatie time function is created to show the locak time and date
function showDateTime(){

    var currentDate= new Date(); // 
    var date = currentDate.toDateString();
    var Time = currentDate.toLocaleTimeString();

    document.getElementById('date').innerHTML= 'Today : ' + date;
    document.getElementById('time').innerHTML= 'Time : ' + Time;

}
// when page will loaded , this function will run automatically , we can customize the function running , for example onClick (click on an HTML element)
showDateTime();
setInterval(showDateTime, 1000)// update date and time in everysecond 



function saveTask(){
    const AddTask=document.getElementById('AddTask');
    const AddDate=document.getElementById('AddDate');
    const PriorityLevel=document.getElementById('PriorityLevel');
    const TaskDetails= document.getElementById('TaskDetails');

    if (AddTask.value.trim()===''||AddDate.value===''){
        alert('Please enter task and set deadline for it.');
        return;
    } // It will prevent if user try to add task without inputing task and date

    if(AddTask.value.length<15){
        alert('Text input must be at least 15 characters long.');
        return false;
    }// It will prevent submission

    if (PriorityLevel.value==='Not Sure'){
       alert('If you are not sure about task, you better delete it');
    }

// Now we have to add task details to table body

const newRowAdding=TaskDetails.insertRow();

// We have data in different type of data , we need to add it to different cell

const AddTaskCell=newRowAdding.insertCell(0);
const AddDateCell=newRowAdding.insertCell(1);
const PriorityLevelCell=newRowAdding.insertCell(2);
const CheckedTask=newRowAdding.insertCell(3);
const DeleteTask=newRowAdding.insertCell(4);

// From newRowAdding , we need to take data to cell , adding their values

AddTaskCell.textContent=AddTask.value;
AddDateCell.textContent=AddDate.value;
PriorityLevelCell.textContent=PriorityLevel.value;

// Now we will create a checkbox in cell 3

const CheckBox=document.createElement('input');
      CheckBox.type='checkbox'; // type of the input element 
      CheckBox.id = 'taskCheckbox'; //adding id
      CheckedTask.appendChild(CheckBox);// inserting it to cell(3)

      CheckBox.onclick=function(){
        if(this.checked){
            AddTaskCell.style.textDecoration = 'line-through';// when checkbox is checked text in AddTaskCell will be changed to textDecoration: line-throught
            AddDateCell.style.textDecoration='line-through';
            PriorityLevelCell.style.textDecoration='line-through';
            this.disabled= true;// when checked box is checked , input button will be disable, user can not unchecked it
            var completedTask=document.getElementById('completedTask');
            TaskCompleted++; // It will increase the completed task by 1 for each checked 
            TotalTaskToComplete--;// it will reduce to total task to do by 1 for each checked
            CountElement.textContent="You have "+ TotalTaskToComplete + " tasks to complete!";// update will show in real time
            completedTask.textContent="You have completed "+ TaskCompleted + " tasks!";// update will show in real time 
            
        }
      }
      

// Now we will add a delete button to the last cell 

const DeleteTaskButton=document.createElement('button');
      DeleteTaskButton.textContent='Delete';
      DeleteTask.appendChild(DeleteTaskButton);

      DeleteTaskButton.addEventListener('click',function(event){
        
        var td=event.target.parentNode; // onclick function will target the table data of the specific row where delete button is located 
        var tr=td.parentNode;
        tr.parentNode.removeChild(tr);// it will remove the whole row

        var taskDeleted=document.getElementById('taskDeleted');// it will count the amount of deleted task
            TotalTaskDeleted++;
            taskDeleted.textContent="You have deleted "+ TotalTaskDeleted + " tasks !";// update in real time


      });
     
      var CountElement=document.getElementById('taskCounter');
          TotalTaskToComplete++;
          CountElement.textContent="You have "+ TotalTaskToComplete + " tasks to complete!";

          SaveTaskLocalStorage();
}
// When we will click the Clear button , it will clear the Task and Date filed , and set the priority level "High", we can change and set any other values as well
function clearFields(){
    // it is to clear the input fields , it is also possible to clean also Prioritylevel.value 
    AddTask.value='';
    AddDate.value='';
    PriorityLevel.value='High'; // we can make it empty string ('') like AddTask.value

}

// now we will save the task to local storage

function SaveTaskLocalStorage(){

    const TaskDetails= document.getElementById('TaskDetails');
    const tasks=[];// we will store data in this empty array

    // we will use for loops for it

    for (let i=0;i<TaskDetails.rows.length;i++){

        const allDetails={

            task:TaskDetails.rows[i].cells[0].textContent, // task is named to make it easy to identify , it can be anyother name, beside that TaskDetails.rows[i].cells[0].textContent representing the value of cell(0), where we added task
            deadline:TaskDetails.rows[i].cells[1].textContent,
            priority:TaskDetails.rows[i].cells[2].textContent,
        };
        tasks.push(allDetails); // pusing task, deadline, priority to tasks array

        localStorage.setItem('tasks',JSON.stringify(tasks));// Saving task to the local storage
    } 

    // now we have to make a function to load the save items from local storage.

}  
    