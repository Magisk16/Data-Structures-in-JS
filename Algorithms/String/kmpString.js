// import readline from "readline-sync";
function computeLPSArray(pattern,patternSize,lps)
{
    var len = 0;
    var i = 1;
    lps[0] = 0; 
    while (i < patternSize) {
        if (pattern.charAt(i) == pattern.charAt(len)) 
        {
            len++;
            lps[i] = len;
            i++;
        }
        else // (pat[i] != pat[len])
        {
            if (len != 0) 
            {
                len = lps[len - 1];
            }
            else // if (len== 0)
            {
                lps[i] = len;
                i++;
            }
        }
    }
}

function KMPSearching(txt,pattern)
{
    var patternSize = pattern.length;
    var txtSize = txt.length;
    var lps = [];
    var j = 0; 

    computeLPSArray(pattern, patternSize, lps);
    var i = 0; 
    while ((txtSize - i) >= (patternSize - j)) 
    {
        if (pattern.charAt(j) == txt.charAt(i)) 
        {
            j++;
            i++;
        }
        if (j == patternSize) 
        {
            console.log("Found pattern " + "at index " + (i - j) + "\n");
            j = lps[j - 1];
        }
        else if (i < txtSize && pattern.charAt(j) != txt.charAt(i)) 
        {
            if (j != 0)
                j = lps[j - 1];
            else
                i = i + 1;
        }
    }
}

let txt = "AABSDAABDFRAAABGD";
let pattern = "AAB";
KMPSearching(txt,pattern);