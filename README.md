import unittest##

# Function to be tested#
def divide(a, b):##
    if b == 0:##
        raise ZeroDivisionError("Cannot divide by zero")##
    else:##
        return a / b##

# Unit tests#
class TestDivision(unittest.TestCase):##
    def test_positive_numbers(self):##
        result = divide(10, 2)##
        self.assertEqual(result, 5)##
        print("Test passed: Positive numbers")##

    def test_negative_numbers(self):
        result = divide(-10, 2)
        self.assertEqual(result, -5)
        print("Test passed: Negative numbers")

    def test_divide_by_zero(self):
        with self.assertRaises(ZeroDivisionError):
            divide(10, 0)
        print("Test passed: Divide by zero")

# Control flow graphs (not computed programmatically)
# Positive numbers: [start] -> [b != 0] -> [return a/b] -> [end]
# Negative numbers: [start] -> [b != 0] -> [return a/b] -> [end]
# Divide by zero: [start] -> [b == 0] -> [raise ZeroDivisionError] -> [end]

# Cyclomatic complexity = E - N + 2P
# where E = number of edges, N = number of nodes, P = number of connected components
# Here, E = 6, N = 5, P = 1
# Cyclomatic complexity = 6 - 5 + 2*1 = 3

if __name__ == '__main__':
    print("Running unit tests...")  
    unittest.main()



    #code2#


    import requests

# Bugzilla REST API endpoint
BUGZILLA_API_URL = "https://your_bugzilla_instance/rest/"##

# Function to fetch test cases from Bugzilla#
def fetch_test_cases():##
    # Fetching test cases using Bugzilla API#
    response = requests.get(BUGZILLA_API_URL + "bugtestcases")  # Adjust endpoint as needed#
    if response.status_code == 200:##
        return response.json()##
    else:##
        print("Failed to fetch test cases:", response.status_code)##
        return []##

# Function to execute test cases and update their status
def execute_test_cases(test_cases):##
    for test_case in test_cases:##
        # Simulate test execution and get test result (e.g., "pass" or "fail")##
        test_result = "pass"  # Replace with actual test result3##
        
        # Update test case status in Bugzilla
        payload = {
            "status": test_result
        }
        response = requests.put(BUGZILLA_API_URL + f"testcases/{test_case['id']}", json=payload)
        if response.status_code != 200:
            print("Failed to update test case status:", response.status_code)

# Main function#
def main():##
    # Fetch test cases from Bugzilla#
    test_cases = fetch_test_cases()##
    if not test_cases:##
        print("No test cases found.")##
        return#
    
    # Execute test cases and update their status
    execute_test_cases(test_cases)
    
    print("Test cases executed successfully.")

if __name__ == "__main__":
    main()


