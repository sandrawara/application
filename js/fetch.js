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
                            <h4> ${course.course_code}</h4>
                            <p> ${course.course_name}</p>
                            <p>Progression: ${course.progression}</p>
                            <a href="${course.syllabus}">Website</a>
                </div>
                `;
            })
            document.getElementById('output').innerHTML = output;
        })
    
}

get_courses(); // Call function

// Function that post courses and get the id and convert to JSON
function post_course() { 
    course_code = document.getElementById('code').value;
    course_name = document.getElementById('name').value;
    progression = document.getElementById('progression').value;
    syllabus = document.getElementById('syllabus').value;
 
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



