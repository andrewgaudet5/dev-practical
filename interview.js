// 1. Write a recursive function that takes a number and returns the sum of all the numbers from zero to that number.

# Technically it does not include zero as one of the numbers being summed like the problem states, but it'd be an unnecessary operation
def recurseSum(n):
	if (n == 0):
		return 0
	else:
		return n + recurseSum(n-1)

/* 2. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

# Technically I wrote this code to handle a list as input (and return a list as output), not an array (since Python does not natively support arrays)
def sumToTarget(arr, target):
	# I figured it'd be easier to stop the outer loop at the second to last element, so that I can avoid any unintended consequences that might occur
	# when it gets to the last element and it needs to skip the inner loop entirely
	for i in range(0, len(arr)-1):
		for j in range(i+1, len(arr)):
			if (arr[i] + arr[j] == target):
				# Although I would usually return a tuple in this instance, the problem seems to be asking for an array return type
				return [i, j]

	# Although, per the instructions, I can assume as a precondition that a solution exists, I am adding this line so that the function can have
	# a list return type and there won't be any potential errors due to a lack of a guaranteed return value - this might not be as important
	# in an interpreted language like Python, but I feel it's good practice and a good habit to get into even if it doesn't matter
	return []

// 3. A. What does this code do? B. Whats wrong with it?

A. This code creates a button that displays how many times it has been pressed.
B. Unfortunately I am not familiar enough with React to know what's wrong with the code. If you would like, I could create an environment to run this code in and do some debugging to figure
    it out. Or I could do some Googling to find examples online for buttons in React and that would likely allow me to spot what's wrong.
    As a third option, I could also try putting the code into an LLM (like ChatGPT) and asking it what is wrong. However, I realize that this might not be an option if I was working for an
    organization that wants to keep its code confidential.

class MyComponent extends React.Component {
    constructor(props) {
        this.state = {
            clicks: 0,
        };
    }
    componentDidMount() {
        this.refs.myComponentDiv.addEventListener('click', this.clickHandler);
    }
    componentWillUnmount() {
        this.refs.myComponentDiv.removeEventListener('click', this.clickHandler);
    }
    clickHandler() {
        this.setState({
            clicks: this.clicks + 1,
        });
    }
    render() {
        let children = this.props.children;
        return (
            <div className='my-component' ref='myComponentDiv'>
                <h2>My Component ({this.state.clicks} clicks})</h2>
                <h3>{this.props.headerText}</h3>
                {children}
            </div>
        );
    }
}
// -----------------------------------------------------------------
const documents = [
    {
        id: 5,
        title:
            "Modélisation d'impacts multiples par méthode semi analytique pour la simulation de procédés de mise en compression",
        year: 2019,
        citations: 56,
        doc_type: 'Article',
    },
    {
        id: 82,
        title: 'Machine and method for reproducing images with photoconductive ink',
        year: 2017,
        citations: 293,
        doc_type: 'Patent',
    },
    {
        id: 22,
        name: 'INFERRING MOBILE ELEMENTS IN S. CEREVISIAE STRAINS',
        year: 2016,
        citations: 97,
        doc_type: 'Article',
    },
    {
        id: 15,
        name: 'Cam-follower construction',
        year: 2018,
        citations: 23,
        doc_type: 'Patent',
    },
    {
        id: 11,
        name: 'Cytological and histological changes in lymphocytes influence of ionizing radiation on health workers',
        year: 2012,
        citations: 337,
        doc_type: 'Article',
    },
];
/*4. if the above "documents" array is represented as rows in a SQL Database: 
Write a query to retrieve the sum of citations by document type.
*/

SELECT doc_type, SUM(citations) FROM documents
GROUP BY doc_type;

/*5 Assuming the following basic  table structure:
Documents (DocID, DocDate)
Keywords (KeyWordID, KeyWord)
DocumentKeywords (DocID,KeywordID)
Write a query to return the following:
Part 1: Documents with a DocDate after 4/1/1995  
Part 2: Documents that contain the keyword "Blue"
Part 3: Documents that contain the both the keywords "Blue" and "Yellow"
*/

-- SQL is not my strong suit, but I'm willing to teach myself whatever I need to learn

-- Part 1
SELECT * from Documents
WHERE DocDate>'4/1/1995';

-- Part 2
SELECT DISTINCT Documents.DocID, Documents.DocDate FROM Documents
RIGHT JOIN DocumentKeywords ON Documents.DocID=DocumentKeywords.DocID AS Docs
LEFT JOIN Keywords ON Docs.KeywordID=Keywords.KeyWordID
WHERE Keywords.KeyWord='Blue';

-- Part 3
-- Maybe this would be better as a Self Join?
SELECT DISTINCT Documents.DocID, Documents.DocDate FROM Documents
RIGHT JOIN DocumentKeywords ON Documents.DocID=DocumentKeywords.DocID AS Docs
LEFT JOIN Keywords ON Docs.KeywordID=Keywords.KeyWordID AS AllData
WHERE Keywords.KeyWord='Blue' AS BlueData
INNER JOIN (SELECT * FROM AllData WHERE KeyWord='Yellow' AS YellowData) ON BlueData.DocID=YellowData.DocID;

// 6. Design a system like Twitter. Looking for Database design

At its basics, I would create two tables: one called "Users" and another called "Tweets" (posts).
The Users table would have a string "Name", a string "Bio", and an integer "UserID" that serves as the primary key.
The Tweets table would have a string called "Text", a datetime called "TimePosted", a foreign key called "UserID" (an integer), and a primary key called "TweetID" (also an integer).
If you would like me to implement database elements for other features, such as likes, retweets, followers, etc., please let me know.
