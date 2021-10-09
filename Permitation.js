<script>
 
// Javascript program to check whether two
// strings are Permutations of each other
 
// Function to check whether two strings are
// Permutation of each other

function arePermutation(str1, str2)
{

     

    // Get lengths of both strings

    let n1 = str1.length;

    let n2 = str2.length;
 

    // If length of both strings is not same,

    // then they cannot be Permutation

    if (n1 != n2)

        return false;

         

    let ch1 = str1.split(' ');

    let ch2 = str2.split(' ');
 

    // Sort both strings

    ch1.sort();

    ch2.sort();
 

    // Compare sorted strings

    for(let i = 0; i < n1; i++)

        if (ch1[i] != ch2[i])

            return false;
 

    return true;
}
 
// Driver Code

let str1 = "test";

let str2 = "ttew";
 

if (arePermutation(str1, str2))

    document.write("Yes");
else

    document.write("No");
 
// This code is contributed by suresh07
 
</script>
