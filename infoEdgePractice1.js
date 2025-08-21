// You are given a string statuses representing the tracking statuses of a package
// separated by a delimiter (e.g., &quot;;&quot;). The statuses can be &quot;in-transit&quot;, &quot;delivered&quot;, &quot;on-
// hold&quot;, or &quot;returned&quot;.

// Determine the final status of the package.
// Function description
// Complete the solve function in the editor below. It has the following parameter(s):
// Name Type Description statuses STRING The string mentioned above

// Return

// The function must return a STRING denoting the final
// status of the package.

// Constraints
//  1  ≤ len(statuses) ≤  10^5
// Input format for debugging
//  The first line contains a string, statuses, denoting the statuses of the package.
// Sample Testcases
// Input Output Output Description

// returned;on-hold on-hold The final status is &quot;on-

// hold&quot;

// in-transit in-
// transit

// The final status is in-transit;

// delivered;returned;on-hold  The final status is on-hold;

function solve(statuses){
    let newStatus = statuses.split(";");
    // console.log(newStatus);
    return newStatus[newStatus.length -1];
    
}

console.log(solve("in-transit;on-hold"));