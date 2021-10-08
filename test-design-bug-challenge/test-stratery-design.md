# Search weather in your city
## Test Strategy

  - [A. Introduction:](#a-introduction)
  - [B. Test Environment](#b-test-environment)
  - [C. Testing type](#c-testing-type)
  - [D. Scope of Work](#d-scope-of-work)
  - [E. Test Approach:](#e-test-approach)
  - [F. Exit criteria](#f-exit-criteria)


### [A. Introduction](#a-introduction): 
This document intends to provide all team members with an overview of the testing scope and approaches to be used in the project. 

### [B. Test Environment](#b-test-environment)

| Environment | URL                                             | Description  |
| ----------- | ----------------------------------------------- | ------------ |
| QA env      | https://openweathermap.org                      | This site is used for full of Testing |

### [C. Testing type](#c-testing-type)
#### Some testing types we should apply for testing this feature are:

- **Static testing**: review and give fast feedback to BA/PO/Client to update the requirements, and to enrich requirements before implementation

- **Smoke Testing**: Testing on the new build to ensure that the critical functions of the program are working.
  
- **Functional testing**: we will focus on the Requirements Documentation as well as the User Stories. The QA team will generate test scenarios that will be used during this test. Both negative and positive testing methods will be utilized to ensure that the Platform conforms to the requirements.

- **Automation test**: Some stable parts in regression tests will be automated to get fast feedback and reduce testing time.

- **Performance Testing**: check whether the system meets the performance requirements.

- **Re-test**: confirm the test cases that failed in the final execution are passing after the bugs are fixed.

- **Testing related to change (regression testing)**: QA will ensure that although an enhancement has been tested and passed, that no other modification has been broken. This will be accomplished via both manual testing and using the automated tools described above.


### [D. Scope of Work](#d-scope-of-work)

1. Platform and browser

    | Platform /Browser       | Description                           |
    | ----------------------- | -----------------------------------   |
    | Win 10 /Chrome(latest)  | Run all test cases                    |
    | Win 10 /Firefox(latest) | Run only highest priority test cases  |
    | MacOS /Safari(latest)   | Run all test cases                    |
    | MacOS /Chrome(latest)   | Run only highest priority test cases  |
    | MacOS /Firefox(latest)  | Run only highest priority test cases  |
Note: This feature is not existing in Mobile web view.
2. Features to be tested

    | No  | Description                     | Priority |
    | --- | -----------------------         | -------- |
    | 1   | Search weather in your city     | 1        |

### [E. Test Approach](#e-test-approach): 
The QA will perform testing within the Agile workflow to verify each individual Sprint, task, component or user story as it becomes available for testing. To perform the testing activities effectively, "Shift-left testing" and "Automation" are conducted on each testable items.

1. Shift-left Testing: is a method to get QA involved early in staring of each Sprint/Project, then the QA could prevent defect sooner.

    1.1. What to do:
      -    Carried out the review testing and risk analysis for testable tasks. 
      -    QA provide a check-list/test design sooner and sharing to developer before staring the implementation.     
      -    Test as early as possible by:
           -    Performing verification for a part of a feature when it's available, don't wait for all things to be integrated.
           -    The feature could be verified at local environment.
    
    1.2. Goals:
      - Detect issues in Requirements quickly.
      - Team is aware of risks, and allows the team to take more ownership in quality.
      - Reduce the testing time, and give quality feedback quickly.

2. Automation Testing (UI and API based): 
   
    2.1. What to do:
    -   Framework: WebdriverIO (https://webdriver.io/).
    -   Utilize the resources in team to write test script: Dev and QA contribute to write test scripts
    -   The test script is developed based on the scenarios defined in user stories.
    -   These test cases will be automated:
        - The repetitive tasks look like smoke and regression test.
        - Involve complex business logic.    
    -   Test automation will start to implement in each sprint.
        
    2.2. Goals:
    -   Detect issues quickly before releasing.
    -   Reduce the testing efforts.

### [F. Exit criteria](#f-exit-criteria)
Testing process is a part of Development cycle in Agile model. Dev team (QA and Developer) will work together to follow the Definition Of Done (DOD), here are outstanding points related to quality:
- DOD (the conditions to mark the tasks done)
   - All test cases are executed.
   - No major defects remain.

## Test Design
### [A. Feature](#)
Search weather in your city with the format: the city's name, comma, 2-letter country code (ISO3166)

### [B. This is a list of summary of test cases for this feature](#)
1. Verify the UI displays correctly as requirements:
- The Search text box displays.
- The Search icon displays.
- The placeholder "weather in your city" is displayed.
2. Verify the searching function is working in the UI as requirements:
   
    2.1. Positive cases:
    - Input city name with simple result: "Ha Noi", then click onto Search icon. Verify the page is redirected to https://openweathermap.org/find?q=Ha+noi.
    - Input city name with simple result: "Ha Noi", then press "Enter" keyboard, then verify there is a result displayed with correct information such as "temperature from 30 to 30 °С, wind 2.57 m/s. clouds 75 %, 1004 hpa, Geo coords [14.645, 120.9887]".  
    - Input city name with multiple result: "Ho Chi Minh", then press "Enter" keyboard, then verify there are two results displayed with correct information such as "temperature from 30 to 30 °С, wind 2.57 m/s. clouds 75 %, 1004 hpa, Geo coords [14.645, 120.9887]".
    - Search by contained city name "Tokyo", then verify there is a result contain Tokyo: "Tokyo Prefecture, JP".
    - Search by city name and country code: "Ha noi, VN", then verify there is a result displayed with correct information.
    - Search by city name as a number: "123", then verify there is a result displayed with correct information (123, PH).
    - Search by city name and country: "Ha noi, Viet Nam", then verify the result displayed with correct information (Ha Noi, VN).
      
    2.2. Negative cases:
    - Search by space value: " ". Verify the page is redirected to https://openweathermap.org/find?q=+ and result is displayed as "not found".
    - Click on search text box and press "Enter" without input. Verify the page is redirected to https://openweathermap.org/find?q=.
    - Search by invalid city name: "Testing". Verify the page is redirected to https://openweathermap.org/find?q=Testing and result is displayed as "not found".
    - Search by invalid format, long string: "so 1806/127 duong Huynh Tan Phat, thi tran Nha Be, huyen Nha Be, TP Ho Chi Minh". Verify the result is displayed as "not found".
    - Search by valid city name and invalid country code: "Ha noi, SG", then verify the result is displayed as "not found".
    - Search by country code: "VN", then verify the result is displayed as "not found".
    - Search by invalid number: "123123124134", then verify the result is displayed as "not found".
    - Search by special character: "@#$#$#$", then verify the result is displayed as "not found".
    - Search by XSS patterns: "<b onmouseover=alert('hello!')>click me!</b>", then verify the result is displayed as "not found".
    - Search by SQL injection patterns: "‘ or 1=1;–,", then verify the result is displayed as "not found".

3. Verify the searching function is working in the API as requirements (Using Data Driven Testing):
- **API Name**: api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
- **Preparation**: 
  - Setting up a automation framework to test this API.
  - Register an account to login to https://openweathermap.org/api.
  - Access: https://home.openweathermap.org/api_keys, then get the API key.  

- **Test cases**:
    - Send API use invalid Key: api.openweathermap.org/data/2.5/weather?q={city name}&appid=xxxx. Verify the response: {"cod":401, "message": "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."}
    - Replace the {city name} by Input value in below table into API: api.openweathermap.org/data/2.5/weather?q={city name}&appid={your Key}.
      
      |No| Input                   | Expected result                                        |
      |---| ----------------------- | -----------------------------------   |
      |1| Ha Noi  |{"coord":{"lon":105.8412,"lat":21.0245},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":307.15,"feels_like":314.15,"temp_min":307.15,"temp_max":307.15,"pressure":1003,"humidity":64,"sea_level":1003,"grnd_level":1001},"visibility":10000,"wind":{"speed":2.45,"deg":293,"gust":4.06},"clouds":{"all":85},"dt":1633600412,"sys":{"type":1,"id":9308,"country":"VN","sunrise":1633560554,"sunset":1633603172},"timezone":25200,"id":1581130,"name":"Hanoi","cod":200}|
      |2| Ha Noi, VN  |{"coord":{"lon":105.8412,"lat":21.0245},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":307.15,"feels_like":314.15,"temp_min":307.15,"temp_max":307.15,"pressure":1003,"humidity":64,"sea_level":1003,"grnd_level":1001},"visibility":10000,"wind":{"speed":2.45,"deg":293,"gust":4.06},"clouds":{"all":85},"dt":1633600412,"sys":{"type":1,"id":9308,"country":"VN","sunrise":1633560554,"sunset":1633603172},"timezone":25200,"id":1581130,"name":"Hanoi","cod":200}|
      |3| Ha Noi, Viet Nam  |{"coord":{"lon":105.8412,"lat":21.0245},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":307.15,"feels_like":314.15,"temp_min":307.15,"temp_max":307.15,"pressure":1003,"humidity":64,"sea_level":1003,"grnd_level":1001},"visibility":10000,"wind":{"speed":2.45,"deg":293,"gust":4.06},"clouds":{"all":85},"dt":1633600412,"sys":{"type":1,"id":9308,"country":"VN","sunrise":1633560554,"sunset":1633603172},"timezone":25200,"id":1581130,"name":"Hanoi","cod":200}|
      |4| Ho Chi Minh | {"coord":{"lon":106.6667,"lat":10.75},"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"base":"stations","main":{"temp":303.16,"feels_like":309.22,"temp_min":303.16,"temp_max":303.16,"pressure":1002,"humidity":74},"visibility":10000,"wind":{"speed":3.09,"deg":270},"rain":{"1h":2.44},"clouds":{"all":40},"dt":1633599984,"sys":{"type":1,"id":9314,"country":"VN","sunrise":1633560111,"sunset":1633603219},"timezone":25200,"id":1566083,"name":"Ho Chi Minh City","cod":200}  |
      |5| sfdfsdfsd   | {"cod":"404","message":"city not found"}                 |
      |6| ‘ or 1=1;–,   | {"cod":"404","message":"city not found"}  |
      |7|  empty | {"cod":"400","message":"Nothing to geocode"} |
      |8|  SG | {"cod":"404","message":"city not found"} |
      |9|  VN | {"cod":"404","message":"city not found"} |
      |10|  VN, Ha Noi | {"cod":"404","message":"city not found"} |
      |11|  @#$#$#$ | {"cod":"404","message":"city not found"} |

## Bug report: [Open here](https://github.com/lttrung112/openweathermap/tree/main/test-design-bug-challenge/bugs) 