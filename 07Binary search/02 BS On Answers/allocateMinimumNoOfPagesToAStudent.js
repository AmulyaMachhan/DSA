//Problem Statement
//Given an array ‘arr of integer numbers, ‘ar[i]’ represents the number of pages in the ‘i-th’ book. 
//There are a ‘m’ number of students, and the task is to allocate all the books to the students.
//Allocate books in such a way that:

//1 - Each student gets at least one book.
//2 - Each book should be allocated to only one student.
//3 - Book allocation should be in a contiguous manner.
//You have to allocate the book to ‘m’ students such that the maximum number of pages assigned to a student is minimum. 
//If the allocation of books is not possible. return -1

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

console.log(allocateMinimumNoOfPagesToAStudent_1([12, 34, 67, 90] , 2));
console.log(allocateMinimumNoOfPagesToAStudent_1([25, 46, 28, 49, 24] , 4));

//Time Complexity: O(N * log(sum(arr[])-max(arr[])+1)), where N = size of the array, sum(arr[]) = sum of all array elements, max(arr[]) = maximum of all array elements.
//Reason: We are applying binary search on [max(arr[]), sum(arr[])]. 
//Inside the loop, we are calling the countStudents() function for the value of ‘mid’. 
//Now, inside the countStudents() function, we are using a loop that runs for N times.


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

///Time Complexity: O(N * (sum(arr[])-max(arr[])+1)), where N = size of the array, sum(arr[]) = sum of all array elements, max(arr[]) = maximum of all array elements.
//Reason: We are using a loop from max(arr[]) to sum(arr[]) to check all possible numbers of pages. 
//Inside the loop, we are calling the countStudents() function for each number. 
//Now, inside the countStudents() function, we are using a loop that runs for N times.