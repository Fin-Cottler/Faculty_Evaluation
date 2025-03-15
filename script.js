function addEval(){
    // console.log("started")
    //dont hate me for this /with love

    //create elements

    //performance-eval
        //amount of Evals
    
    const evals = document.getElementsByClassName("performance-eval");

    const performanceEval = document.createElement("div");
    performanceEval.className = "performance-eval";
    performanceEval.id = evals.length + 1;
    // console.log("created eval")

    //content
    const content = document.createElement("div");
    content.className = "content";
    // console.log("created content")

    //img
    const image = document.createElement("img");
    image.src = "images/Template-FacultyEval.png";
    image.alt = "Faculty Evaluation";
    // console.log("created image")

    //cells
    const cell1 = document.createElement("div");
    cell1.className = "cell";
    cell1.id = "name";

    const cell2 = document.createElement("div");
    cell2.className = "cell";
    cell2.id = "year";

    const cell3 = document.createElement("div");
    cell3.className = "cell";
    cell3.id = "graph-items";

    const cell4 = document.createElement("div");
    cell4.className = "cell";
    cell4.id = "advisor";

    const cell5 = document.createElement("div");
    cell5.className = "cell";
    cell5.id = "mentor";

    const cell6 = document.createElement("div");
    cell6.className = "cell";
    cell6.id = "input1";
    
    const cell7 = document.createElement("div");
    cell7.className = "cell";
    cell7.id = "input2";

    const cell8 = document.createElement("div");
    cell8.className = "cell";
    cell8.id = "output1";
    
    const cell9 = document.createElement("div");
    cell9.className = "cell";
    cell9.id = "output2";

    const cell10 = document.createElement("div");
    cell10.className = "cell";
    cell10.id = "leadership";

    const cell11 = document.createElement("div");
    cell11.className = "cell";
    cell11.id = "passion";

    // console.log("created cells")


    //rows
    const row1 = document.createElement("div");
    row1.className = "row";
    row1.id = "current-courses";

    const row2 = document.createElement("div");
    row2.className = "row";
    row2.id = "current-courses-3yr";

    const row3 = document.createElement("div");
    row3.className = "row";
    row3.id = "salary-grants";

    const row4 = document.createElement("div");
    row4.className = "row";
    row4.id = "salary-grants-3yr";
    
    const row5 = document.createElement("div");
    row5.className = "row";
    row5.id = "undergrad";

    const row6 = document.createElement("div");
    row6.className = "row";
    row6.id = "grad-pi";

    const row7 = document.createElement("div");
    row7.className = "row";
    row7.id = "grad-com";

    const row8 = document.createElement("div");
    row8.className = "row";
    row8.id = "post-doc";
    
    const row9 = document.createElement("div");
    row9.className = "row";
    row9.id = "faculty";

    const row10 = document.createElement("div");
    row10.className = "row";
    row10.id = "val1";

    const row11 = document.createElement("div");
    row11.className = "row";
    row11.id = "val2";

    const row12 = document.createElement("div");
    row12.className = "row";
    row12.id = "val3";
    
    const row13 = document.createElement("div");
    row13.className = "row";
    row13.id = "val4";

    const row14 = document.createElement("div");
    row14.className = "row";
    row14.id = "peer-reviewed-paper";

    const row1401 = document.createElement("div");
    row1401.className = "row";
    row1401.id = "seminars";

    const row1402 = document.createElement("div");
    row1402.className = "row";
    row1402.id = "conference-pres";

    const row1403 = document.createElement("div");
    row1403.className = "row";
    row1403.id = "software";

    const row1404 = document.createElement("div");
    row1404.className = "row";
    row1404.id = "prov-pat";

    const row16 = document.createElement("div");
    row16.className = "row";
    row16.id = "patents";
    
    const row17 = document.createElement("div");
    row17.className = "row";
    row17.id = "licenses";

    const row18 = document.createElement("div");
    row18.className = "row";
    row18.id = "new-co";

    const row19 = document.createElement("div");
    row19.className = "row";
    row19.id = "products";

    const row1901 = document.createElement("div");
    row1901.className = "row";
    row1901.id = "other";

    const row20 = document.createElement("div");
    row20.className = "row";
    row20.id = "BME";

    const row21 = document.createElement("div");
    row21.className = "row";
    row21.id = "SOM-SEAS";

    const row22 = document.createElement("div");
    row22.className = "row";
    row22.id = "Uni";

    const row23 = document.createElement("div");
    row23.className = "row";
    row23.id = "Nat-Int";

    // single rows
    const row24 = document.createElement("div");
    row24.className = "row";
    row24.id = "name-row";
    
    const row25 = document.createElement("div");
    row25.className = "row";
    row25.id = "year-row";

    const row26 = document.createElement("div");
    row26.className = "row";
    row26.id = "advisor-row";

    const row27 = document.createElement("div");
    row27.className = "row";
    row27.id = "passion-row";
    
    
    // console.log("created rows")

    
    //concat
        //rows to cells
    cell1.appendChild(row24);

    cell2.appendChild(row25);
    
    cell3.appendChild(row1);
    cell3.appendChild(row2);
    cell3.appendChild(row3);
    cell3.appendChild(row4);

    cell4.appendChild(row26);

    cell5.appendChild(row5);
    cell5.appendChild(row6);
    cell5.appendChild(row7);
    cell5.appendChild(row8);
    cell5.appendChild(row9);

    cell6.appendChild(row10);
    cell6.appendChild(row11);

    cell7.appendChild(row12);
    cell7.appendChild(row13);

    cell8.appendChild(row14);
    cell8.appendChild(row1401);
    cell8.appendChild(row1402);
    cell8.appendChild(row1403);
    cell8.appendChild(row1404);

    cell9.appendChild(row16);
    cell9.appendChild(row17);
    cell9.appendChild(row18);
    cell9.appendChild(row19);
    cell9.appendChild(row1901);

    cell10.appendChild(row20);
    cell10.appendChild(row21);
    cell10.appendChild(row22);
    cell10.appendChild(row23);


    cell11.appendChild(row27);

    // console.log("finished rows")

        //cells to content
    content.appendChild(cell1);
    content.appendChild(cell2);
    content.appendChild(cell3);
    content.appendChild(cell4);
    content.appendChild(cell5);
    content.appendChild(cell6);
    content.appendChild(cell7);
    content.appendChild(cell8);
    content.appendChild(cell9);
    content.appendChild(cell10);
    content.appendChild(cell11);
    // console.log("finished cells")

        //content and img to performance-eval
    performanceEval.appendChild(content);
    performanceEval.appendChild(image);
    // console.log("finished content")

        //performance eval to container
    document.getElementById("container").appendChild(performanceEval);
    // console.log("finished concat")


}


function fillCharts(){
    const csv = JSON.parse(sessionStorage.getItem('array'));
    

    for(let i = 0; i<csv.length - 1; i++){
        addEval();
    }



    for(let i = 0; i<csv.length; i++){
        //get page
        const page = document.getElementById(csv[i].Id);
        console.log(page)
        //get content element from page
        const content = page.children
        //get all cell elements from content
        
        const cells = content[0].children
        
        //all row elements 
        const allRows = [];
        
        console.log(allRows)
        //for each cell
        for (let f = 0; f < cells.length; f++){
        //each row in cell
            const rows = cells[f].children;
        //for each row in cell
            for (let k = 0; k < rows.length; k++){
                allRows.push(rows[k]);
            }
            
        }
        console.log(allRows)

        
        for(let f = 1; f<allRows.length+ 1; f++){
            allRows[f-1].innerHTML = Object.values(csv[i])[f];
        }
    }
    
}

function printDiv() {
    var printContents = document.getElementById("container").innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}




