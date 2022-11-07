# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter serves as a placeholder for values you're using to pass in an argument when you call that function. The parameters are named when you define a function.  

Researched answer: Parameters are abstract variaible names that you are able to use when you define a function and serves as placeholders, also known as variable declaration in the function. However, arguments are the actual values or elements that you provide to the function that will be passed when you call on the function. The values that are passed will be stored and can be accesssed under the same parameters you assigned them to in the function.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The .map() method takes in 3 predfined parameters that are value, index, and array. Value is required because it contains the values of the elements of the array provided. Index and arr are optional.

Researched answer: The .map() has value, index, and arr as the predefined parameters. Value is the only required predfined parameter because it contains the value of the array. Index and arr are optional. Index contains the index of the current element and arr contains the array where the map() function is applied. 

3. What is the difference between map and filter?

Your answer: The .map() and .filter() method are quite similar but have some differences.The .map() method iterates each element in the array and returns the same length array once all the conditions are met. However, the .filter() method iterates over each element in the array but always want to return a new shorter array once the condtion is met.

Researched answer: The .map() method creates a new array by calling a function on each values in the array. It will include the new desired data as a part of the new array. The .filter() method returns a new array of elements based on custom criteria that was set in the callback function. What they do have in common though is that they both return a new array.

4. What is iteration?

Your answer: Iteration is a set of conditions that are being performed over and over again until the condtion is met. 

Researched answer: Iteration is a set of commands that are excuted over and over again until a condtion is met. During loops, it can undergo many iterations. In for loops, it wont be executed on every iteration. Once the codition is evaluated, the code would either be executed or not excuted. The process will repeat until the condition is met. 

5. What is the difference between a class and an object?

Your answer: A class is a set of plans that are helpful for creating objects. Objects are a collection of things and is the intersection between data and behavior. Within an object, things can have the same properties but they can also have unique values. It's important to note that classes are not objects but the plans to make them.

Researched answer: Classes are a set of templates for objects that describe what the object contains and how it will behave. Classes are what generates objects. An object is an instance of a class and are able to create more than one object. Objects can be manipulated are also able to have their own values. For example, dog(class) and each dog are can be categorized as breed, age, and color (objects).

6. STRETCH: What is hoisting in JavaScript?

Your answer: I honestly have no idea what hoisting in Javascript means...

Researched answer: Hoisting is the process of the JS engine storing declared variables to the top of the scope in mememory regardless of where they are declared. This happens when JS is being compiled and all the expressions occur where the code is written. Some developers will have issues that are not apparent until several errors. It is intended to help devolopers who are not familiar with programming. Depending on the developer's experience, it can be helpful or it can be more confusing and complicated.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: User stories takes the perspective of a user's standpoint when looking at software whether if they're satifisfied with it or changes need to be made. When following good user stories, it's usually followed by 3 c's: card, conversation, and confirmation. Card is focused mainly on input from the user and usually are short. During the changes, software developers will have conversations based on the input provided from the user. Lastly, confirmation serves as acceptance that everything has been implemented completely. 

2. Spread operator: The spread operator syntax is (...). The purpose of this operator is allowing an array or object to expand into sets of items. By using the spread operator, it allows the user to make a new copy in memory of the array. However, you must be careful when spreading into an array. It only works if the object is iterable.

3. React: React is a JS library or front end framework that makes it easy to create user interfaces with less code. It's efficieny allows the user to see changes right away once your data changes in a virtual DOM . It was founded by Meta. The components are independent and are reuseable containing its own functionality. React relies on the virtual DOM and compares the changes from the actual DOM and figures out what is the easiest way to fix it without manipulated the actual DOM. Used to build webpages and applications, it is an essential tool for development.

4. React props: React props(properties) is quite similar to HTML. The props are known as a type of object where the value of the tag is being stored. Props are able to pass data from one component to another and also add attributes but they are not able to be manipulated(read only). 

5. DOM events: DOM (document object models) provides information about events to a script. It provides the what, where, and when to generate an even on the page. An event can occur when a user clicks on a HTML element like a button or selecting some texts on the homepage. Each HTML element will contain a collection of events that will prompt the code.
