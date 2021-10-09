<script>

    // Javascript program to check if given 

    // two strings are at distance one.

     

    // Returns true if edit distance 

    // between s1 and s2 is one, else false

    function isEditDistanceOne(s1, s2)

    {
 

        // Find lengths of given strings

        let m = s1.length, n = s2.length;
 

        // If difference between lengths is 

        // more than 1, then strings can't 

        // be at one distance

        if (Math.abs(m - n) > 1)

            return false;
 

            // Count of edits

            let count = 0;

            let i = 0, j = 0;
 

        while (i < m && j < n)

        {

            // If current characters 

            // don't match

            if (s1[i] != s2[j])

            {

                if (count == 1)

                    return false;
 

                // If length of one string is

                // more, then only possible edit

                // is to remove a character

                if (m > n)

                    i++;

                else if (m< n)

                    j++;
 

                 // If lengths of both 

                 // strings is same

                else

                {

                    i++;

                    j++;

                }
 

                // Increment count of edits 

                count++;

            }
 

            // If current characters match

            else

            {

                i++;

                j++;

            }

        }
 

        // If last character is extra 

        // in any string

        if (i < m || j < n)

            count++;
 

        return count == 1;

    }

     

    let s1 = "gfg";

    let s2 = "gf";

    if(isEditDistanceOne(s1, s2))

        document.write("Yes");

    else

        document.write("No"); 

     

    // This code is contributed by decode2207.
</script>
