var websiteTable = [
    {
        "name": "RPI Official Website",
        "description": "Official home page for RPI",
        "link": "https://www.rpi.edu/",
        "tags": [
            "Official"
        ]
    },
    {
        "name": "SIS",
        "description": "Rensselaer's Student Information System",
        "link": "https://sis.rpi.edu/",
        "tags": [
            "Official",
            "Courses",
            "Degrees"
        ]
    },
    {
        "name": "Degree works",
        "description": "Check how far are you from graduating, and what requirments you have left",
        "link": "https://degreeworksprd.rpi.edu:8708/degwx/RespDashboard/worksheets/WEB31",
        "tags": [
            "Official",
            "Courses",
            "Degrees"
        ]
    },
    {
        "name": "Rensselaer Catalog",
        "description": "Check all the courses, programs, and other important general information",
        "link": "http://catalog.rpi.edu/",
        "tags": [
            "Official",
            "Courses",
            "Degrees"
        ]
    },
    {
        "name": "QUACS",
        "description": "Questionably Accurate Course Scheduler for RPI",
        "link": "https://quacs.org/",
        "tags": [
            "RCOS",
            "Courses",
            "Organization"
        ]
    },
    {
        "name": "CRISIS",
        "description": "Correcting Rensselaer's Insufferable SIS",
        "link": "https://rpicrisis.org/",
        "tags": [
            "RCOS",
            "Courses",
            "Organization"
        ]
    }
]

var categories = [
    "Official",
    "RCOS",
    "Courses",
    "Degrees",
    "Organization"
]

buildTable(websiteTable, categories)

function buildTable(data, categories){
    var table = document.getElementById('myTable')

    for(var c = 0; c < categories.length; c++){
        var cTitle = `<h2>${categories[c]}</h3>`
        table.innerHTML += cTitle
        for(var i = 0; i < data.length; i++){
            if(data[i].tags.includes(categories[c])){
                var row = `
                    <tr>
                        <td><a href="${data[i].link}" target="_blank">${data[i].name}</a></td>
                        <td>${data[i].description}</td>
                    </tr>
                `
                table.innerHTML += row
            }
        }
    }
    
}