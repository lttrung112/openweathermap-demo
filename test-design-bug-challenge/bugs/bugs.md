## Issue-01: 
### Summary: Search Icon is not working
### Severity: Critical
### Frequency: Always
### Testing environment: 
- MacOS
  - Chrome(version 94.0.4606.71)
  - Safari(version 14.1)
  - Firefox(version 92.0.1 )
### Build date of website: 2021/10/05
### Steps to reproduce:
1. Open url: https://openweathermap.org/
2. Input city name such as "Ha Noi" in the Search text box.
3. Click in to Search Icon.
### Expected result
1. The page redirects to https://openweathermap.org/find?q=Ha+noi 
2. The search result should be displayed.  
### Actual result
1. The page does not redirect to https://openweathermap.org/find?q=Ha+noi
2. The  Search Icon is not working. 
- Attachments (screenshots): Check the image "issues01.png"
### Work around
* Use "Enter" keyboard to process the search action.


## Issue-02:
### Summary: Searching by long string does not response result 
### Severity: Minor
### Environment:
- Chrome(version 94.0.4606.71)
- Safari(version 14.1)
- Firefox(version 92.0.1 )
### Build version of website: xyz
### Steps to reproduce:
1. Open url: https://openweathermap.org/
2. Input a long string "so 1806/127 duong Huynh Tan Phat, thi tran Nha Be, huyen Nha Be, TP Ho Chi Minh" in the Search text box.
3. Press "Enter".
### Expected result
1. The search result should be responded as "Not found" (check as image "issue02-expected-result.png").
### Actual result
1. No search result responded.
2. The console of Dev tool displays error: 500 (Internal Server Error) 
- Attachments (screenshots): Check the image "issue02-actual-result.png"
### Note for developer
* This issue also happen when at the step 3, we input the 2-letter country code such as "VN". The result and error are the same (check as image "issue02-actual-result-country-code")