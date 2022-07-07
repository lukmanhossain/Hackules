const data = [1, 1, 2, 3, 5];

function answer(data) {
  const unique = [];
  for (const element of data) {
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}

const uniqueData = answer(data);
console.log(uniqueData);

// { Trying to solve C++ }

// #include<bits/stdc++.h>
// using namespace std;
// int main(){
// int t;
// cin >> t; //if number occurs more than t times it will be removed from array.
// int n; //size of array.
// cin >> n;
// int arr[n];

// map < int, int > data;
// for(int i =0; i < n; i++){
//     cin >> arr[i];
//     data[arr[i]]++; //storing the frequency of numbers(how many time it occurs).
// }
// for(auto i: data){
//     if(i.second <= t) cout << i.first << " "; //if frequency is less or equal t answer will be print.
// }
// return 0;
// }
