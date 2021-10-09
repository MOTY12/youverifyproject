<script>
 




function uniqueCharacters(str)
{

     

    // If at any time we encounter 2

    // same characters, return false

    for(let i = 0; i < str.length; i++)

        for(let j = i + 1; j < str.length; j++)

            if (str[i] == str[j])

                return false;
 

    // If no duplicate characters

    // encountered, return true

    return true;
}
 
// Driver code

let input = "GeeksforGeeks";
 

if (uniqueCharacters(input) == true)

    document.write("The String " + input + 

                   " has all unique characters" + "</br>");
else

    document.write("The String " + input + 

                   " has duplicate characters");

                  
// This code is contributed by decode2207
 
</script>
