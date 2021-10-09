<script>

 

// Javascript implementation to check if

// characters of a given string can

// be rearranged to form a palindrome

 

    let NO_OF_CHARS = 256;

  

    /* function to check whether characters

    of a string can form a palindrome */

    function canFormPalindrome(str)

    {

  

        // Create a count array and initialize all

        // values as 0

        let count = Array(NO_OF_CHARS).fill(0);

  

        // For each character in input strings,

        // increment count in the corresponding

        // count array

        for (let i = 0; i < str.length; i++)

            count[str[i].charCodeAt()]++;

  

        // Count odd occurring characters

        let odd = 0;

        for (let i = 0; i < NO_OF_CHARS; i++) {

            if ((count[i] & 1) == 1)

                odd++;

  

            if (odd > 1)

                return false;

        }

  

        // Return true if odd count is 0 or 1,

        return true;

    }

 

// Driver program 

 

      if (canFormPalindrome("geeksforgeeks"))

            document.write("Yes");

        else

            document.write("No");

  

        if (canFormPalindrome("geeksogeeks"))

            document.write("Yes");

        else

            document.write("No");

       

</script>
