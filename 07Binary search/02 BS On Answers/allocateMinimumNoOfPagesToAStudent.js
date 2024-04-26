function allocateMinimumNoOfPagesToAStudent(books , noOfStudents){
    if(books.length < noOfStudents) return - 1;
    let minPages = Math.max(...books);
    let maxPages = books.reduce((acc , elem)=> acc + elem , 0);

    for(let pages = minPages ; pages <= maxPages ; pages++){
        if(studentsThatCanBeAlloted(books , pages , noOfStudents) === noOfStudents){
            return pages;
        }
    }
    return -1;
}

function studentsThatCanBeAlloted(books , pages , noOfStudents){
    let students= 1 ;
    let pagesAllotedToStudent = 0;

    for(let i=0 ; i < books.length ; i++){
        if(pagesAllotedToStudent + books[i] <= pages){
            pagesAllotedToStudent += books[i];
        }else{
            pagesAllotedToStudent = books[i];
            students++;
        }
    }
    return students;
}

console.log(allocateMinimumNoOfPagesToAStudent([12, 34, 67, 90] , 2));
console.log(allocateMinimumNoOfPagesToAStudent([25, 46, 28, 49, 24] , 4));