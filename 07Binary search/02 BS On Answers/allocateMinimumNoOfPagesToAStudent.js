//OPTIMAL SOLUTION
function allocateMinimumNoOfPagesToAStudent_1(books , noOfStudents){
    if(books.length < noOfStudents) return -1;

    let minPages = Math.max(...books);
    let maxPages = books.reduce((acc , elem) => acc + elem , 0);
    
    while(minPages <= maxPages){
        let mid = minPages + Math.floor((maxPages - minPages)/2);
        
        if(studentsThatCanBeAlloted(books , mid) > noOfStudents){
            minPages = mid + 1;
        }else{
            maxPages = mid - 1;
        }
    }

    return minPages;
}

console.log(allocateMinimumNoOfPagesToAStudent_1([12, 34, 67, 90] , 2));
console.log(allocateMinimumNoOfPagesToAStudent_1([25, 46, 28, 49, 24] , 4));

function studentsThatCanBeAlloted(books , pages){
    let students= 1 ;
    let pagesAllotedToStudent = 0;

    for(let i=0 ; i < books.length ; i++){
        //Alloting books to students according to the number of pages
        if(pagesAllotedToStudent + books[i] <= pages){
            pagesAllotedToStudent += books[i];    
        }else{
            //Alloting books to a new student 
            students++;
            pagesAllotedToStudent = books[i];
        }
    }
    return students;
}
//BRUTE FORCE METHOD
function allocateMinimumNoOfPagesToAStudent(books , noOfStudents){
    
    //Checking if the number of books are less than the number of students
    if(books.length < noOfStudents) return - 1;
    
    //Minimum pages that can be assigned to a no of students is the maximum pages in books array
    let minPages = Math.max(...books);

    //Maximum pages that can be assinged to a student is total books 
    let maxPages = books.reduce((acc , elem)=> acc + elem , 0);

    for(let pages = minPages ; pages <= maxPages ; pages++){
        if(studentsThatCanBeAlloted(books , pages , noOfStudents) === noOfStudents){
            return pages;
        }
    }
    return -1;
}



console.log(allocateMinimumNoOfPagesToAStudent([12, 34, 67, 90] , 2));
console.log(allocateMinimumNoOfPagesToAStudent([25, 46, 28, 49, 24] , 4));