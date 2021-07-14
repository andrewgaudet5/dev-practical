// 1. Write a recursive function that takes a number and returns the sum of all the numbers from zero to that number.


/* 2. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/



// 3. A. What does this code do? B. Whats wrong with it?

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



/*5 Assuming the following basic  table structure:
Documents (DocID, DocDate)
Keywords (KeyWordID, KeyWord)
DocumentKeywords (DocID,KeywordID)
Write a query to return the following:
Part 1: Documents with a DocDate after 4/1/1995  
Part 2: Documents that contain the keyword "Blue"
Part 3: Documents that contain the both the keywords "Blue" and "Yellow"
*/



// 6. Design a system like Twitter. Looking for Database design