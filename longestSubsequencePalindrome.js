// Using Dynamic Programming
longestSubsequencePalindrome = a => {  
    let n = a.length;
    let dp = [],
        m = 0;  
    for (let i = 0; i <= n; dp[i] = Array(n + 1).fill(0), ++i);

    for (let i = 0; i < n; ++i)    
        for (let j = 0; j < n; ++j) {      
            a[i] == a[n - 1 - j] ? dp[i + 1][j + 1] = dp[i][j] + 1 : dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);      
            m = Math.max(m, dp[i + 1][j + 1]);    
        }  
    return m;
}

console.log(longestSubsequencePalindrome([1, 2, 4, 1]));