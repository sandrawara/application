// Function to fetch courses from JSON
function get_courses() {
    fetch ('http://sandrawara.se/rest/app/read.php')
        .then((res) => res.json())
        .then((data) => {
            let output = `<h2>Courses</h2>`;

            // Loop
            data.forEach((course)=> {
                output +=`
                <div id= "courses">
                            <h4 id="${course.id}code"> ${course.course_code}</h4>
                            <p id="${course.id}name"> ${course.course_name}</p>
                            <p>Progression: <span id="${course.id}progression"> ${course.progression}</span></p>
                            <a id="${course.id}syllabus" href="${course.syllabus}">Website</a>
                            <button onclick="update(${course.id})" class="mainBtn" type="button">Update course</button> 
                            <button id="${course.id}" onclick="delete_course(this)" class="mainBtn" type="button">Delete course</button> 
                </div>
                `;
            })
            document.getElementById('output').innerHTML = output;
        })
    
}

get_courses(); // Call function

// Function that post courses and get the id and convert to JSON
function post_course() { 
    let course_code = document.getElementById('code').value;
    let course_name = document.getElementById('name').value;
    let progression = document.getElementById('progression').value;
    let syllabus = document.getElementById('syllabus').value;
 
    let info = JSON.stringify(
        {
        "course_code": course_code,
        "course_name": course_name,
        "progression": progression,
        "syllabus": syllabus

        }
    );

    let getData = {
        method: 'POST',
        body: info
    }
    fetch('http://sandrawara.se/rest/app/read.php', getData);

    get_courses(); // Call function and post new data

}

function update(id) {
    let _id = id + ""; 
    let _course_code = _id.concat('code');
    let _course_name = _id.concat('name');
    let _progression = _id.concat('progression');
    let _syllabus = _id.concat('syllabus');

    document.getElementById('code').value = document.getElementById(_course_code).innerHTML;
    document.getElementById('name').value = document.getElementById(_course_name).innerHTML;
    document.getElementById('progression').value = document.getElementById(_progression).innerHTML;
    document.getElementById('syllabus').value = document.getElementById(_syllabus).getAttribute("href");

    let updateClass = document.getElementById('btn');
    updateClass.className = _id;

}


function update_course() { 
    let id = document.getElementById('btn').className;
    let course_code = document.getElementById('code').value;
    let course_name = document.getElementById('name').value;
    let progression = document.getElementById('progression').value;
    let syllabus = document.getElementById('syllabus').value;
 
    let info = JSON.stringify(
        {
        "id": id,
        "course_code": course_code,
        "course_name": course_name,
        "progression": progression,
        "syllabus": syllabus

        }
    );

    let getData = {
        method: 'PUT',
        body: info
    }
    fetch('http://sandrawara.se/rest/app/read.php', getData);

    get_courses(); // Call function and post new data
}
    
function delete_course(element) { 
    let id = element.id;
 
    let info = JSON.stringify(
        {
        "id": id
        }
    );

    let getData = {
        method: 'DELETE',
        body: info
    }
    fetch('http://sandrawara.se/rest/app/read.php', getData);

    get_courses(); // Call function and post new data

}

